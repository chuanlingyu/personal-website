import type { Project } from '../data/portfolio'
import { Icon } from './Icon'

const projectIcons = { 'grade-predictor': 'code', 'city-skyline': 'network', 'low-vision-navigation': 'scan', 'digital-diary': 'book', plantroute: 'leaf' } as const

export function ProjectCard({ project }: { project: Project }) {
  const featured = project.id === 'grade-predictor'
  return <article className={`project-card ${featured ? 'featured-card' : ''}`} aria-labelledby={`${project.id}-title`}>
    <div className="flex items-center justify-between gap-3">
      <span className="project-icon"><Icon name={projectIcons[project.id as keyof typeof projectIcons]} /></span>
      <span className={project.ongoing ? 'status status-ongoing' : 'project-period'}>{project.ongoing && <span className="status-dot" />}{project.ongoing ? 'In progress' : project.period}</span>
    </div>
    <div className="project-heading"><p className="eyebrow">{project.organization} <span aria-hidden="true">/ {project.number}</span></p><h3 id={`${project.id}-title`}>{project.title}</h3><p className="project-summary">{project.summary}</p></div>
    <div className="contribution"><p className="contribution-label">My contribution <span>· {project.role}</span></p><p>{project.contribution}</p></div>
    {featured && <dl className="project-result"><div><dt>Course-GPA model MAE</dt><dd>0.159</dd></div><div><dt>Overall dataset records</dt><dd>~76,000</dd></div><div className="metric-note"><dt>Team model evaluation</dt><dd>15,227 held-out samples</dd></div></dl>}
    <ul className="tags" aria-label={`${project.title} technologies and focus`}>{project.technologies.map(tag => <li key={tag}>{tag}</li>)}</ul>
    {project.codeUrl && <a className="text-link project-code-link" href={project.codeUrl} target="_blank" rel="noopener noreferrer">View code <Icon name="github" /><span className="sr-only"> for {project.title} (opens in a new tab)</span></a>}
    <details className="project-details"><summary aria-label={`${project.title}: project notes`}>Project notes <Icon name="plus" /></summary><div className="details-content">{project.ongoing && <p className="details-period">{project.period}</p>}{project.details.map(detail => <div key={detail.label}><h4>{detail.label}</h4><p>{detail.text}</p></div>)}</div></details>
  </article>
}
