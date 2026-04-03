import { chromium, devices } from "playwright";
import { readdirSync } from "node:fs";

const iPhone = devices["iPhone 13"];
const distDir = process.cwd() + "/dist";
const pages = readdirSync(distDir).filter(f => f.endsWith(".html"));

async function main() {
  // Serve dist/ over HTTP so relative paths work
  const server = Bun.serve({
    port: 0,
    async fetch(req) {
      const url = new URL(req.url);
      let path = url.pathname === "/" ? "/index.html" : url.pathname;
      const file = Bun.file(distDir + path);
      if (await file.exists()) {
        return new Response(file);
      }
      return new Response("Not found", { status: 404 });
    },
  });
  const baseUrl = `http://localhost:${server.port}`;

  const browser = await chromium.launch();
  const context = await browser.newContext({ ...iPhone });
  let hasAnyOverflow = false;

  for (const pageName of pages) {
    const tab = await context.newPage();
    await tab.goto(`${baseUrl}/${pageName}`);
    await tab.waitForLoadState("networkidle");

    // Scroll through the page to trigger intersection observers
    await tab.evaluate(async () => {
      const step = 300;
      const delay = (ms: number) => new Promise(r => setTimeout(r, ms));
      for (let y = 0; y < document.body.scrollHeight; y += step) {
        window.scrollTo(0, y);
        await delay(50);
      }
      window.scrollTo(0, 0);
      await delay(200);
    });

    const { scrollWidth, clientWidth } = await tab.evaluate(() => ({
      scrollWidth: document.documentElement.scrollWidth,
      clientWidth: document.documentElement.clientWidth,
    }));

    const overflow = scrollWidth > clientWidth;
    const status = overflow ? "FAIL" : "OK";
    const extra = overflow ? ` (${scrollWidth}px > ${clientWidth}px)` : "";

    console.log(`  ${status}  ${pageName}${extra}`);

    await tab.screenshot({
      path: `dist/${pageName.replace(".html", "-mobile.png")}`,
      fullPage: true,
    });

    if (overflow) hasAnyOverflow = true;
    await tab.close();
  }

  await browser.close();
  server.stop();

  if (hasAnyOverflow) {
    console.log("\nOverflow detected. Check screenshots in dist/");
    process.exit(1);
  } else {
    console.log("\nAll pages pass mobile viewport check.");
  }
}

main();
