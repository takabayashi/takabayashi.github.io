import bioData from './data/bio.json';

function formatDate(dateStr: string | null): string {
  if (!dateStr) return 'Present';
  const date = new Date(dateStr + '-01');
  return date.toLocaleDateString('en-US', { month: 'short', year: 'numeric' });
}

// basePath: "" for dev server, "/repo-name" for GitHub Pages subdirectory
// useHtmlExt: false for dev server (clean URLs), true for static build (.html extensions)
function link(path: string, basePath: string, useHtmlExt: boolean): string {
  if (path === '/') return basePath + (useHtmlExt ? '/index.html' : '/');
  return basePath + path + (useHtmlExt ? '.html' : '');
}

export function layout(title: string, content: string, activeTab: string, basePath: string, useHtmlExt: boolean): string {
  const l = (path: string) => link(path, basePath, useHtmlExt);

  return `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - ${bioData.name}</title>
    <meta name="description" content="AI Architect building event-driven GenAI and multi-agent systems for Fortune 500 enterprises. Confluent Staff SE, Apache Marvin creator, 20+ years in AI/ML and distributed systems.">
    <meta name="keywords" content="Daniel Takabayashi, AI Architect, Solutions Engineer, Confluent, Apache Marvin, Machine Learning, Data Streaming, GenAI, Multi-Agent Systems, Event-Driven AI, MCP, RAG, Agentic Workflows, Apache Kafka, Apache Flink">
    <meta property="og:title" content="${title} - ${bioData.name}">
    <meta property="og:description" content="${bioData.tagline}">
    <meta property="og:type" content="website">
    <link rel="stylesheet" href="${basePath}/css/style.css">
</head>
<body>
    <nav class="navbar">
        <div class="container">
            <div class="nav-brand">
                <a href="${l('/')}"><h2>${bioData.nickname || bioData.name}</h2></a>
            </div>
            <button class="nav-toggle" aria-label="Toggle navigation">
                <span></span><span></span><span></span>
            </button>
            <ul class="nav-menu">
                <li><a href="${l('/')}" class="${activeTab === 'home' ? 'active' : ''}">Home</a></li>
                <li><a href="${l('/experience')}" class="${activeTab === 'experience' ? 'active' : ''}">Experience</a></li>
                <li><a href="${l('/projects')}" class="${activeTab === 'projects' ? 'active' : ''}">Projects</a></li>
                <li><a href="${l('/publications')}" class="${activeTab === 'publications' ? 'active' : ''}">Publications</a></li>
                <li><a href="${l('/certifications')}" class="${activeTab === 'certifications' ? 'active' : ''}">Certifications</a></li>
                <li><a href="${l('/contact')}" class="${activeTab === 'contact' ? 'active' : ''}">Contact</a></li>
            </ul>
        </div>
    </nav>

    <main>
        ${content}
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="footer-info">
                    <p>&copy; ${new Date().getFullYear()} ${bioData.name}. All rights reserved.</p>
                    <p class="footer-tagline">${bioData.tagline}</p>
                    <div class="footer-badges">
                        <a href="https://github.com/takabayashi/takabayashi.github.io/actions/workflows/deploy.yml" target="_blank"><img src="https://github.com/takabayashi/takabayashi.github.io/actions/workflows/deploy.yml/badge.svg" alt="Deploy Status"></a>
                        <a href="https://github.com/takabayashi/takabayashi.github.io/releases" target="_blank"><img src="https://img.shields.io/github/v/release/takabayashi/takabayashi.github.io?color=00ff41" alt="Latest Release"></a>
                    </div>
                </div>
                <div class="footer-links">
                    <div class="social-links">
                        <a href="https://github.com/${bioData.social.github}" target="_blank">GitHub</a>
                        <a href="https://linkedin.com/in/${bioData.social.linkedin}" target="_blank">LinkedIn</a>
                    </div>
                    <div class="footer-nav">
                        <a href="${l('/')}">Home</a>
                        <a href="${l('/experience')}">Experience</a>
                        <a href="${l('/projects')}">Projects</a>
                        <a href="${l('/publications')}">Publications</a>
                        <a href="${l('/certifications')}">Certifications</a>
                        <a href="${l('/contact')}">Contact</a>
                    </div>
                </div>
            </div>
        </div>
    </footer>

    <script src="${basePath}/js/main.js"></script>
</body>
</html>`;
}

export function homePage(basePath = '', useHtmlExt = false): string {
  const l = (path: string) => link(path, basePath, useHtmlExt);

  const content = `
    <section class="hero">
        <div class="container">
            <div class="hero-content">
                <div class="hero-text">
                    <p class="hero-greeting">Hello, I'm</p>
                    <h1>${bioData.name}</h1>
                    <p class="hero-tagline">${bioData.tagline}</p>
                    <p class="hero-title">${bioData.title}</p>
                    <div class="hero-meta">
                        <span class="hero-location">${bioData.location}</span>
                        <span class="hero-separator">|</span>
                        <span class="hero-languages">${Object.keys(bioData.spokenLanguages).join(' / ')}</span>
                    </div>
                    <div class="hero-buttons">
                        <a href="${l('/contact')}" class="btn btn-primary">Let's Talk</a>
                        <a href="${l('/projects')}" class="btn btn-secondary">View Projects</a>
                    </div>
                </div>
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">20+</span>
                        <span class="stat-label">Years in Engineering</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">$15M+</span>
                        <span class="stat-label">Deals Supported</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Enterprise Customers</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">2</span>
                        <span class="stat-label">Startup Exits</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-section">
        <div class="container">
            <h2>About Me</h2>
            ${bioData.about.split('\n\n').map(p => `<p>${p}</p>`).join('')}
        </div>
    </section>

    <section class="highlights-section">
        <div class="container">
            <h2>Career Highlights</h2>
            <div class="highlights-grid">
                ${bioData.achievements.slice(0, 4).map(achievement => `
                    <div class="highlight-card">
                        <p>${achievement}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>

    <section class="ai-section">
        <div class="container">
            <h2>${bioData.aiContributions.title}</h2>
            <p class="section-intro">${bioData.aiContributions.description}</p>
            <div class="ai-grid">
                ${bioData.aiContributions.categories.map(cat => `
                    <div class="ai-category-card">
                        <h3>${cat.name}</h3>
                        <ul>
                            ${cat.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>
            <div class="section-cta">
                <p class="podcast-callout">Also co-hosting <a href="${l('/publications')}"><strong>${bioData.podcast.name}</strong></a> — a Portuguese-language podcast interviewing AI/ML specialists about the real impact of AI.</p>
            </div>
        </div>
    </section>

    <section class="skills-section">
        <div class="container">
            <h2>Technical Skills & Expertise</h2>
            <div class="skills-grid">
                <div class="skill-category">
                    <h3>Programming Languages</h3>
                    <ul>
                        ${bioData.skills.languages.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>AI & Machine Learning</h3>
                    <ul>
                        ${bioData.skills.ai.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Data & Streaming</h3>
                    <ul>
                        ${bioData.skills.data.slice(0, 10).map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Cloud & Architecture</h3>
                    <ul>
                        ${bioData.skills.architectures.slice(0, 8).map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>MLOps & Infrastructure</h3>
                    <ul>
                        ${bioData.skills.mlops.map(skill => `<li>${skill}</li>`).join('')}
                        ${bioData.skills.infrastructure.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
                <div class="skill-category">
                    <h3>Leadership & Practices</h3>
                    <ul>
                        ${bioData.skills.leadership.map(skill => `<li>${skill}</li>`).join('')}
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section class="mentorship-section">
        <div class="container">
            <h2>Mentorship & Volunteering</h2>
            <div class="mentorship-grid">
                ${bioData.mentorship.map(m => `
                    <div class="mentorship-card">
                        <h3>${m.organizationUrl ? `<a href="${m.organizationUrl}" target="_blank" class="institution-link">${m.organization}</a>` : m.organization}</h3>
                        <p class="mentorship-role">${m.role} (${m.period})</p>
                        <p>${m.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;

  return layout('Home', content, 'home', basePath, useHtmlExt);
}

export function experiencePage(basePath = '', useHtmlExt = false): string {
  const content = `
    <section class="page-header">
        <div class="container">
            <h1>Professional Experience</h1>
            <p>20+ years building teams, products, and AI-powered platforms</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <div class="experience-timeline">
                ${bioData.experience.map(exp => `
                    <div class="experience-item">
                        <div class="experience-header">
                            <div>
                                <h3>${exp.position}</h3>
                                <h4>${exp.companyUrl ? `<a href="${exp.companyUrl}" target="_blank" class="company-link">${exp.company}</a>` : exp.company} <span class="company-desc">// ${exp.companyDescription}</span></h4>
                            </div>
                            <div class="experience-meta">
                                <span class="date">${formatDate(exp.startDate)} - ${formatDate(exp.endDate)}</span>
                                <span class="location">${exp.location}</span>
                            </div>
                        </div>
                        <p class="description">${exp.description}</p>
                        <ul class="achievements">
                            ${exp.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                        </ul>
                    </div>
                `).join('')}
            </div>

            <div class="education-section">
                <h2>Education</h2>
                ${bioData.education.map(edu => `
                    <div class="education-item">
                        <h3>${edu.degree} in ${edu.field}${edu.credits ? ` (${edu.credits})` : ''}</h3>
                        <h4>${edu.institutionUrl ? `<a href="${edu.institutionUrl}" target="_blank" class="company-link">${edu.institution}</a>` : edu.institution}${edu.location ? ' // ' + edu.location : ''}</h4>
                        <span class="date">${formatDate(edu.startDate)} - ${formatDate(edu.endDate)}</span>
                        ${edu.achievements && edu.achievements.length > 0 ? `
                            <ul>
                                ${edu.achievements.map(achievement => `<li>${achievement}</li>`).join('')}
                            </ul>
                        ` : ''}
                    </div>
                `).join('')}
            </div>

            ${bioData.awards && bioData.awards.length > 0 ? `
                <div class="awards-section">
                    <h2>Awards & Recognition</h2>
                    <div class="certifications-grid">
                        ${bioData.awards.map(award => `
                            <div class="certification-item award-item">
                                <h4>${award.title}</h4>
                                <p>${award.issuer} // ${award.year}</p>
                                <p class="award-category">Category: ${award.category}</p>
                                <p class="award-desc">${award.description}</p>
                            </div>
                        `).join('')}
                    </div>
                </div>
            ` : ''}

            <div class="languages-section">
                <h2>Languages Spoken</h2>
                <div class="languages-grid">
                    ${Object.entries(bioData.spokenLanguages).map(([lang, level]) => `
                        <div class="language-card">
                            <h4>${lang}</h4>
                            <p>${level}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="hobbies-section">
                <h2>Beyond Work</h2>
                <div class="hobbies-grid">
                    ${bioData.hobbies.map(hobby => `
                        <div class="hobby-card">
                            <h4>${hobby.name}</h4>
                            <p>${hobby.description}</p>
                        </div>
                    `).join('')}
                </div>

                <h3 class="subsection-title">Mentorship</h3>
                <div class="mentorship-grid">
                    ${bioData.mentorship.map(m => `
                        <div class="mentorship-card">
                            <h4>${m.organizationUrl ? `<a href="${m.organizationUrl}" target="_blank" class="institution-link">${m.organization}</a>` : m.organization}</h4>
                            <p class="mentorship-role">${m.role} (${m.period})</p>
                            <p>${m.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>`;

  return layout('Experience', content, 'experience', basePath, useHtmlExt);
}

export function projectsPage(basePath = '', useHtmlExt = false): string {
  const content = `
    <section class="page-header">
        <div class="container">
            <h1>Projects</h1>
            <p>From Apache Foundation incubators to acquired startups — building at the intersection of AI and scale</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <div class="projects-grid">
                ${bioData.projects.map(project => `
                    <div class="project-card">
                        <div class="project-header">
                            <h3>${project.name}</h3>
                            <span class="project-company">${project.company}</span>
                        </div>
                        <p>${project.description}</p>
                        <div class="tech-tags">
                            ${project.technologies.map(tech => `<span class="tag">${tech}</span>`).join('')}
                        </div>
                        <ul class="highlights">
                            ${project.highlights.map(highlight => `<li>${highlight}</li>`).join('')}
                        </ul>
                        <div class="project-links">
                            ${project.githubUrl ? `<a href="${project.githubUrl}" target="_blank" class="btn btn-small">GitHub</a>` : ''}
                            ${project.liveUrl ? `<a href="${project.liveUrl}" target="_blank" class="btn btn-small btn-secondary">Live Demo</a>` : ''}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>
    </section>`;

  return layout('Projects', content, 'projects', basePath, useHtmlExt);
}

export function publicationsPage(basePath = '', useHtmlExt = false): string {
  const content = `
    <section class="page-header">
        <div class="container">
            <h1>Publications & Speaking</h1>
            <p>Research papers, conference talks, and community contributions</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <div class="publications-section">
                <h2>Research Publications</h2>
                <div class="publications-list">
                    ${bioData.publications.map(pub => `
                        <div class="publication-card">
                            <div class="pub-type">${pub.type}</div>
                            <h3>${pub.title}</h3>
                            <div class="pub-meta">
                                <span class="pub-venue">${pub.venue}</span>
                                <span class="pub-date">${formatDate(pub.date)}</span>
                            </div>
                            <p class="pub-authors">${pub.authors}</p>
                            <p>${pub.description}</p>
                            ${pub.url ? `<a href="${pub.url}" target="_blank" class="btn btn-small">Read Paper</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="speaking-full-section">
                <h2>Speaking Engagements</h2>
                <div class="speaking-timeline">
                    ${bioData.speaking.map(speak => `
                        <div class="speaking-item">
                            <div class="speaking-header">
                                <div>
                                    <h3>${speak.eventUrl ? `<a href="${speak.eventUrl}" target="_blank" class="institution-link">${speak.event}</a>` : speak.event}</h3>
                                    <p class="speaking-topic">"${speak.topic}"</p>
                                </div>
                                <span class="date">${speak.year}</span>
                            </div>
                            <p>${speak.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="mentorship-full-section">
                <h2>Mentorship & Community</h2>
                <div class="mentorship-grid">
                    ${bioData.mentorship.map(m => `
                        <div class="mentorship-card">
                            <h3>${m.organizationUrl ? `<a href="${m.organizationUrl}" target="_blank" class="institution-link">${m.organization}</a>` : m.organization}</h3>
                            <p class="mentorship-role">${m.role} (${m.period})</p>
                            <p>${m.description}</p>
                        </div>
                    `).join('')}
                </div>
            </div>

            <div class="podcast-section">
                <h2>Podcast</h2>
                <div class="podcast-intro">
                    <h3>${bioData.podcast.name} <span class="podcast-lang">// ${bioData.podcast.language}</span></h3>
                    <p>${bioData.podcast.description}</p>
                    <p class="podcast-cohost">Co-hosted with ${bioData.podcast.cohost}</p>
                    <div class="podcast-platforms">
                        <a href="${bioData.podcast.links.spotify}" target="_blank" class="btn btn-small">Spotify</a>
                        <a href="${bioData.podcast.links.youtube}" target="_blank" class="btn btn-small">YouTube</a>
                    </div>
                </div>
                <div class="podcast-episodes">
                    ${bioData.podcast.episodes.map(ep => `
                        <div class="podcast-episode-card">
                            <div class="podcast-episode-header">
                                <div>
                                    <h4>${ep.title}</h4>
                                    <p class="podcast-guest">${ep.guest} — ${ep.guestRole}</p>
                                </div>
                                <div class="podcast-episode-meta">
                                    <span class="date">${formatDate(ep.date)}</span>
                                    <span class="podcast-duration">${ep.duration}</span>
                                </div>
                            </div>
                            <p>${ep.description}</p>
                            ${ep.url ? `<a href="${ep.url}" target="_blank" class="btn btn-small">Listen on Spotify</a>` : ''}
                        </div>
                    `).join('')}
                </div>
            </div>
        </div>
    </section>`;

  return layout('Publications & Speaking', content, 'publications', basePath, useHtmlExt);
}

export function certificationsPage(basePath = '', useHtmlExt = false): string {
  const certsByIssuer: Record<string, typeof bioData.certifications> = {};
  for (const cert of bioData.certifications) {
    if (!certsByIssuer[cert.issuer]) certsByIssuer[cert.issuer] = [];
    certsByIssuer[cert.issuer].push(cert);
  }

  const content = `
    <section class="page-header">
        <div class="container">
            <h1>Certifications</h1>
            <p>Professional certifications spanning data streaming, enterprise architecture, and cloud platforms</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            ${Object.entries(certsByIssuer).map(([issuer, certs]) => `
                <div class="cert-issuer-section">
                    <h2>${issuer} <span class="cert-count">(${certs.length})</span></h2>
                    <div class="certs-grid">
                        ${certs.map(cert => `
                            <div class="cert-card">
                                <span class="cert-category">${cert.category}</span>
                                <h4>${cert.name}</h4>
                                <span class="cert-date">${formatDate(cert.date)}</span>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    </section>`;

  return layout('Certifications', content, 'certifications', basePath, useHtmlExt);
}

export function contactPage(basePath = '', useHtmlExt = false): string {

  const content = `
    <section class="page-header">
        <div class="container">
            <h1>Let's Connect</h1>
            <p>Always happy to talk about AI architecture, streaming systems, or the next big thing</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2>What I'm Open To</h2>
                    <div class="contact-interests">
                        <div class="contact-interest-item">
                            <h4>Enterprise AI & Streaming</h4>
                            <p>Architecture consulting, PoCs, and technical strategy for event-driven AI systems</p>
                        </div>
                        <div class="contact-interest-item">
                            <h4>Speaking & Conferences</h4>
                            <p>Talks on multi-agent systems, streaming AI, and lessons from building ML platforms at scale</p>
                        </div>
                        <div class="contact-interest-item">
                            <h4>Mentorship</h4>
                            <p>Guiding founders and engineering leaders on AI product development and team building</p>
                        </div>
                        <div class="contact-interest-item">
                            <h4>Open Source & Community</h4>
                            <p>Collaborations on AI tooling, MCP servers, and developer education</p>
                        </div>
                    </div>
                </div>

                <div class="contact-details">
                    <h2>Reach Out</h2>
                    <p class="contact-note">I typically respond within 24 hours. LinkedIn is usually the fastest way to reach me.</p>
                    <div class="contact-items">
                        <div class="contact-item">
                            <strong>Email</strong>
                            <a href="mailto:${bioData.email}?subject=Hey%20Taka">${bioData.email}</a>
                        </div>
                        <div class="contact-item">
                            <strong>Location</strong>
                            <span>${bioData.location}</span>
                        </div>
                    </div>

                    <div class="social-section">
                        <h3>Find Me Online</h3>
                        <div class="social-grid">
                            ${bioData.social.linkedin ? `
                            <a href="https://linkedin.com/in/${bioData.social.linkedin}" target="_blank" class="social-link">
                                <span>LinkedIn</span>
                            </a>
                            ` : ''}
                            ${bioData.social.github ? `
                            <a href="https://github.com/${bioData.social.github}" target="_blank" class="social-link">
                                <span>GitHub</span>
                            </a>
                            ` : ''}
                        </div>
                    </div>

                    <div class="languages-compact">
                        <h3>I speak</h3>
                        <ul>
                            ${Object.entries(bioData.spokenLanguages).map(([lang, level]) => `
                                <li><strong>${lang}</strong>: ${level}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </section>`;

  return layout('Contact', content, 'contact', basePath, useHtmlExt);
}
