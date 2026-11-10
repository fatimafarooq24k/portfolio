import { education, profile, projects, skillGroups } from '@/data/portfolio';

const htmlEscapes: Record<string, string> = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  '"': '&quot;',
  "'": '&#39;',
};

const escapeHtml = (value: string) => value.replace(/[&<>"']/g, (char) => htmlEscapes[char]);

const listItems = (items: string[]) => items.map((item) => `<li>${escapeHtml(item)}</li>`).join('');

const cvStyles = `
  @page { size: A4; margin: 16mm; }
  * { box-sizing: border-box; }
  body { font-family: Arial, Helvetica, sans-serif; color: #0F1115; font-size: 11pt; line-height: 1.5; margin: 0; }
  header { border-bottom: 2px solid #0F1115; padding-bottom: 10px; margin-bottom: 14px; }
  h1 { font-size: 24pt; margin: 0; letter-spacing: 0.5px; }
  .role { font-size: 12pt; color: #0F766E; margin: 2px 0 6px; }
  .contact { font-size: 9.5pt; color: #333; }
  h2 { font-size: 11pt; letter-spacing: 1.5px; text-transform: uppercase; margin: 16px 0 6px; border-bottom: 1px solid #ccc; padding-bottom: 3px; }
  p { margin: 4px 0; }
  ul { margin: 4px 0 8px 18px; padding: 0; }
  li { margin: 2px 0; }
  .project { margin-bottom: 10px; }
  .project h3 { font-size: 11pt; margin: 0; }
  .stack { font-size: 9.5pt; color: #555; margin: 2px 0 4px; }
`;

function buildCvHtml(): string {
  const contact = [profile.location, profile.phone, profile.email, profile.github, profile.linkedin]
    .map(escapeHtml)
    .join(' &nbsp;|&nbsp; ');

  const skills = skillGroups
    .map((group) => `<p><strong>${escapeHtml(group.label)}:</strong> ${group.items.map(escapeHtml).join(', ')}</p>`)
    .join('');

  const projectBlocks = projects
    .map(
      (project) => `
        <div class="project">
          <h3>${escapeHtml(project.title)}</h3>
          <p class="stack">${project.stack.map(escapeHtml).join(' · ')}</p>
          <ul>${listItems(project.built)}</ul>
          <p>${escapeHtml(project.outcome)}</p>
        </div>`,
    )
    .join('');

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>${escapeHtml(profile.name)} - CV</title>
  <style>${cvStyles}</style>
</head>
<body>
  <header>
    <h1>${escapeHtml(profile.name.toUpperCase())}</h1>
    <p class="role">${escapeHtml(profile.title)} | ${escapeHtml(profile.degree)}</p>
    <p class="contact">${contact}</p>
  </header>
  <h2>Profile</h2>
  <p>${escapeHtml(profile.intro)}</p>
  <p>${escapeHtml(profile.followUp)}</p>
  <h2>Education</h2>
  <p><strong>${escapeHtml(education.degree)}</strong>, ${escapeHtml(education.institution)}, ${escapeHtml(education.location)}</p>
  <h2>Technical Skills</h2>
  ${skills}
  <h2>Projects</h2>
  ${projectBlocks}
</body>
</html>`;
}

export function openCvForPrint(): boolean {
  const cvWindow = window.open('', '_blank');
  if (!cvWindow) return false;

  cvWindow.document.open();
  cvWindow.document.write(buildCvHtml());
  cvWindow.document.close();
  cvWindow.focus();
  setTimeout(() => cvWindow.print(), 300);
  return true;
}
