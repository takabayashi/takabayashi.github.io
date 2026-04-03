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
    <meta name="description" content="${bioData.tagline}. ${bioData.title} with 20+ years of experience in AI, ML, and distributed systems.">
    <meta name="keywords" content="Daniel Takabayashi, AI Architect, Solutions Engineer, Confluent, Apache Marvin, Machine Learning, Data Streaming">
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
                        <a href="${l('/contact')}" class="btn btn-primary">Get in Touch</a>
                        <a href="${l('/projects')}" class="btn btn-secondary">View Projects</a>
                        <a href="${l('/experience')}" class="btn btn-secondary">Experience</a>
                    </div>
                </div>
                <div class="hero-stats">
                    <div class="stat-item">
                        <span class="stat-number">20+</span>
                        <span class="stat-label">Years Experience</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">50+</span>
                        <span class="stat-label">Enterprise Clients</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">13</span>
                        <span class="stat-label">Certifications</span>
                    </div>
                    <div class="stat-item">
                        <span class="stat-number">3</span>
                        <span class="stat-label">Publications</span>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section class="about-section">
        <div class="container">
            <h2>About Me</h2>
            <p>${bioData.about}</p>
        </div>
    </section>

    <section class="highlights-section">
        <div class="container">
            <h2>Career Highlights</h2>
            <div class="highlights-grid">
                ${bioData.achievements.slice(0, 6).map(achievement => `
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

    <section class="speaking-section">
        <div class="container">
            <h2>Speaking & Community</h2>
            <div class="speaking-grid">
                ${bioData.speaking.slice(0, 4).map(speak => `
                    <div class="speaking-card">
                        <span class="speaking-year">${speak.year}</span>
                        <h3>${speak.event}</h3>
                        <p class="speaking-topic">${speak.topic}</p>
                        <p>${speak.description}</p>
                    </div>
                `).join('')}
            </div>
            <div class="section-cta">
                <a href="${l('/publications')}" class="btn btn-secondary">View All Speaking & Publications</a>
            </div>
        </div>
    </section>

    <section class="mentorship-section">
        <div class="container">
            <h2>Mentorship & Volunteering</h2>
            <div class="mentorship-grid">
                ${bioData.mentorship.map(m => `
                    <div class="mentorship-card">
                        <h3>${m.organization}</h3>
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
                                <h4>${exp.company} <span class="company-desc">// ${exp.companyDescription}</span></h4>
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
                        <h4>${edu.institution}${edu.location ? ' // ' + edu.location : ''}</h4>
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
                                    <h3>${speak.event}</h3>
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
                            <h3>${m.organization}</h3>
                            <p class="mentorship-role">${m.role} (${m.period})</p>
                            <p>${m.description}</p>
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
            <p>13 professional certifications from Oracle, IBM, and Sun Microsystems</p>
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

export function contactPage(basePath = '', useHtmlExt = false, staticMode = false): string {
  const contactFormHtml = staticMode ? `
                <div class="contact-form">
                    <h2>Send a Message</h2>
                    <p class="static-contact-note">Use the email or social links to get in touch, or send a message directly:</p>
                    <a href="mailto:${bioData.email}?subject=Hello%20from%20your%20website" class="btn btn-primary" style="margin-bottom: 1rem; display: inline-block;">Email Me</a>
                    <p class="static-contact-note" style="margin-top: 1rem; color: var(--text-muted); font-size: 0.85rem;">You can also reach me on <a href="https://linkedin.com/in/${bioData.social.linkedin}" target="_blank" style="color: var(--primary-color);">LinkedIn</a> or <a href="https://github.com/${bioData.social.github}" target="_blank" style="color: var(--primary-color);">GitHub</a>.</p>
                </div>` : `
                <div class="contact-form">
                    <h2>Send a Message</h2>
                    <form id="contactForm">
                        <div class="form-group">
                            <label for="name">Name</label>
                            <input type="text" id="name" name="name" required>
                        </div>
                        <div class="form-group">
                            <label for="email">Email</label>
                            <input type="email" id="email" name="email" required>
                        </div>
                        <div class="form-group">
                            <label for="message">Message</label>
                            <textarea id="message" name="message" rows="5" required></textarea>
                        </div>
                        <button type="submit" class="btn btn-primary">Send Message</button>
                    </form>
                    <div id="formMessage" class="form-message"></div>
                </div>`;

  const content = `
    <section class="page-header">
        <div class="container">
            <h1>Get in Touch</h1>
            <p>Open to collaborations, speaking opportunities, and connecting with fellow technologists</p>
        </div>
    </section>

    <section class="content-section">
        <div class="container">
            <div class="contact-grid">
                <div class="contact-info">
                    <h2>Contact Information</h2>
                    <div class="contact-items">
                        <div class="contact-item">
                            <strong>Email</strong>
                            <a href="mailto:${bioData.email}">${bioData.email}</a>
                        </div>
                        <div class="contact-item">
                            <strong>Location</strong>
                            <span>${bioData.location}</span>
                        </div>
                        ${bioData.website ? `
                        <div class="contact-item">
                            <strong>Website</strong>
                            <a href="${bioData.website}" target="_blank">${bioData.website}</a>
                        </div>
                        ` : ''}
                    </div>

                    <div class="social-section">
                        <h3>Connect with me</h3>
                        <div class="social-grid">
                            ${bioData.social.github ? `
                            <a href="https://github.com/${bioData.social.github}" target="_blank" class="social-link">
                                <span>GitHub</span>
                            </a>
                            ` : ''}
                            ${bioData.social.linkedin ? `
                            <a href="https://linkedin.com/in/${bioData.social.linkedin}" target="_blank" class="social-link">
                                <span>LinkedIn</span>
                            </a>
                            ` : ''}
                        </div>
                    </div>

                    <div class="languages-compact">
                        <h3>Languages</h3>
                        <ul>
                            ${Object.entries(bioData.spokenLanguages).map(([lang, level]) => `
                                <li><strong>${lang}</strong> — ${level}</li>
                            `).join('')}
                        </ul>
                    </div>
                </div>

                ${contactFormHtml}
            </div>
        </div>
    </section>`;

  return layout('Contact', content, 'contact', basePath, useHtmlExt);
}
