import { chromium } from "playwright";

const browser = await chromium.launch();
const distDir = process.cwd() + "/dist";
const server = Bun.serve({
  port: 0,
  async fetch(req) {
    const url = new URL(req.url);
    let path = url.pathname === "/" ? "/index.html" : url.pathname;
    const file = Bun.file(distDir + path);
    if (await file.exists()) return new Response(file);
    return new Response("Not found", { status: 404 });
  },
});

const page = await browser.newPage({ viewport: { width: 1440, height: 900 } });
await page.goto(`http://localhost:${server.port}/index.html`);
await page.waitForLoadState("networkidle");
await page.screenshot({ path: "dist/desktop-full.png", fullPage: true });
console.log("Saved dist/desktop-full.png");

await browser.close();
server.stop();
