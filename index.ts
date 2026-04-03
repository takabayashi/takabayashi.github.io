import bioData from './data/bio.json';
import {
  homePage,
  experiencePage,
  projectsPage,
  publicationsPage,
  certificationsPage,
  contactPage,
} from './pages';

const port = process.env.PORT || 3000;

Bun.serve({
  port,
  routes: {
    "/": {
      GET: () => new Response(homePage(), { headers: { 'Content-Type': 'text/html' } })
    },
    "/experience": {
      GET: () => new Response(experiencePage(), { headers: { 'Content-Type': 'text/html' } })
    },
    "/projects": {
      GET: () => new Response(projectsPage(), { headers: { 'Content-Type': 'text/html' } })
    },
    "/publications": {
      GET: () => new Response(publicationsPage(), { headers: { 'Content-Type': 'text/html' } })
    },
    "/certifications": {
      GET: () => new Response(certificationsPage(), { headers: { 'Content-Type': 'text/html' } })
    },
    "/contact": {
      GET: () => new Response(contactPage(), { headers: { 'Content-Type': 'text/html' } })
    },
    "/api/bio": {
      GET: () => Response.json(bioData)
    },
    "/api/experience": {
      GET: () => Response.json(bioData.experience)
    },
    "/api/projects": {
      GET: () => Response.json(bioData.projects)
    },
    "/api/skills": {
      GET: () => Response.json(bioData.skills)
    },
    "/api/publications": {
      GET: () => Response.json(bioData.publications)
    },
    "/api/certifications": {
      GET: () => Response.json(bioData.certifications)
    },
    "/api/contact": {
      POST: async (req) => {
        const body = await req.json();
        console.log('Contact form submission:', body);
        return Response.json({
          success: true,
          message: 'Thank you for your message! I will get back to you soon.'
        });
      }
    },
    "/css/:file": {
      GET: (req) => {
        const file = Bun.file(`./public/css/${req.params.file}`);
        return new Response(file);
      }
    },
    "/js/:file": {
      GET: (req) => {
        const file = Bun.file(`./public/js/${req.params.file}`);
        return new Response(file);
      }
    },
    "/images/:file": {
      GET: (req) => {
        const file = Bun.file(`./public/images/${req.params.file}`);
        return new Response(file);
      }
    }
  },
  development: {
    hmr: true,
    console: true,
  }
});

console.log(`Server running at http://localhost:${port}`);
