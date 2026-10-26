import { useState } from 'react'
import { Header } from './components/Header'
import { Icon } from './components/Icon'
import { ProjectCard } from './components/ProjectCard'
import { interests, profile, projects } from './data/portfolio'

const filters = ['All work', 'Applied ML', 'Software'] as const
type Filter = typeof filters[number]

function SectionLabel({ number, children }: { number: string; children: React.ReactNode }) {
  return <p className="section-label"><span>{number}</span>{children}</p>
}

export default function App() {
  const [filter, setFilter] = useState<Filter>('All work')
  const visibleProjects = projects.filter(project => filter === 'All work' || project.category === filter)

  return <>
    <a href="#main-content" className="skip-link">Skip to content</a>
    <Header />
    <main id="main-content">
      <section id="home" className="hero container" aria-labelledby="intro-title">
        <div className="hero-copy">
          <p className="eyebrow hero-intro"><span className="tiny-cross" aria-hidden="true">✳</span> Hello, I’m Chuanling Yu.</p>
          <h1 id="intro-title">Writing code.<br />Testing <em>ideas.</em></h1>
          <p className="hero-description">I study Computer Science + Philosophy at UIUC, with a minor in Statistics. I’m building a foundation in applied machine learning and software—and asking good questions along the way.</p>
          <div className="hero-actions"><a className="button button-primary" href="#work">Explore my work <Icon name="arrow" /></a><a className="text-link" href={profile.resume} download="Chuanling-Yu-Resume.pdf">Download résumé <Icon name="download" /></a></div>
          <p className="availability"><span className="status-dot" />Seeking Summer 2027 internships & research</p>
        </div>
        <aside className="intro-aside" aria-label="My academic perspective">
          <div className="perspective-art" aria-hidden="true"><span className="orbit orbit-one" /><span className="orbit orbit-two" /><span className="orbit orbit-three" /><span className="art-center">&</span><span className="art-label label-code">code</span><span className="art-label label-reason">reason</span><span className="art-label label-data">data</span><span className="art-spark">✳</span></div>
          <div className="aside-bottom"><span>Different disciplines.<br />A shared curiosity.</span><span className="aside-coordinate">UIUC<br />CLASS OF 2028</span></div>
        </aside>
      </section>

      <div className="academic-strip"><div className="container flex flex-wrap items-center justify-between gap-x-8 gap-y-3"><p>University of Illinois Urbana-Champaign</p><span>Computer Science + Philosophy <i aria-hidden="true">/</i> Statistics minor</span></div></div>

      <section id="work" className="section container" aria-labelledby="work-title">
        <SectionLabel number="01">Selected work</SectionLabel>
        <div className="section-heading"><div><h2 id="work-title">Ideas, put into practice.</h2><p>Team projects, personal contributions, and things I’m still figuring out.</p></div><span className="section-aside">2025 — 2026</span></div>
        <div className="project-toolbar"><div className="filters" role="group" aria-label="Filter projects">{filters.map(item => <button key={item} type="button" aria-pressed={filter === item} onClick={() => setFilter(item)}>{item}<span>{item === 'All work' ? projects.length : projects.filter(project => project.category === item).length}</span></button>)}</div><p className="result-count" role="status" aria-live="polite">{visibleProjects.length} projects</p></div>
        <div className="project-grid">{visibleProjects.map(project => <ProjectCard key={project.id} project={project} />)}</div>
      </section>

      <section id="about" className="about-section" aria-labelledby="about-title"><div className="container about-grid">
        <div><SectionLabel number="02">A little about me</SectionLabel><h2 id="about-title">The code matters.<br /><em>So do the questions.</em></h2><div className="about-note"><span aria-hidden="true">↳</span><p>Computer science, philosophy,<br />and the space in between.</p></div></div>
        <div className="about-copy"><p>I enjoy both building things and thinking carefully about why they work. Philosophy gives me a way to examine assumptions; computer science gives me a way to turn ideas into something useful.</p><p>My strongest project experience is in applied ML and data-driven software. I’m now broadening that foundation through C++, frontend and backend development, APIs, and computer vision.</p><p>I’m looking for opportunities to contribute, learn from experienced engineers and researchers, and understand how thoughtful software gets built.</p><dl className="education-facts"><div><dt>Studying</dt><dd>B.S. Computer Science + Philosophy<br />Minor in Statistics</dd></div><div><dt>Graduating</dt><dd>May 2028</dd></div></dl><div className="skills-row"><div><h3>My foundation</h3><p>Python · pandas · scikit-learn<br />Data preparation · Model evaluation</p></div><div><h3>Currently developing</h3><p>C++ · React · TypeScript · FastAPI<br />Computer vision · ONNX Runtime</p></div></div></div>
      </div></section>

      <section id="interests" className="section container interests-section" aria-labelledby="interests-title"><SectionLabel number="03">Research interests</SectionLabel><div className="section-heading"><div><h2 id="interests-title">Questions I want to explore.</h2><p>I’m seeking undergraduate research opportunities to learn the full process,<br className="desktop-break" /> from reading papers and framing questions to experiments and findings.</p></div></div><div className="interest-grid">{interests.map(interest => <article key={interest.number}><span className="interest-number">{interest.number}<span aria-hidden="true">↗</span></span><h3>{interest.title}</h3><p>{interest.text}</p></article>)}</div></section>

      <section id="contact" className="contact-section container" aria-labelledby="contact-title"><div className="contact-panel"><div><SectionLabel number="04">Let’s connect</SectionLabel><h2 id="contact-title">A good conversation<br />can be a <em>great start.</em></h2><p>Have an internship, research opportunity, or an interesting<br className="desktop-break" /> problem to share? I’d love to hear about it.</p><a className="contact-email" href={`mailto:${profile.email}`}>{profile.email}<Icon name="arrow" /></a></div><div className="contact-links"><a href={profile.github} target="_blank" rel="noopener noreferrer"><Icon name="github" />GitHub <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.linkedin} target="_blank" rel="noopener noreferrer"><Icon name="linkedin" />LinkedIn <span aria-hidden="true">↗</span><span className="sr-only"> (opens in a new tab)</span></a><a href={profile.resume} download="Chuanling-Yu-Resume.pdf"><Icon name="download" />Download résumé <span aria-hidden="true">↓</span></a><p>Available mid-May – mid-August 2027<br />Open to opportunities across the U.S.</p></div></div></section>
    </main>
    <footer className="container site-footer"><a className="footer-signature" href="#home">Chuanling Yu<span>.</span></a><p>Made with curiosity and care.</p><a href="#home" className="back-to-top">Back to top <span aria-hidden="true">↑</span></a></footer>
  </>
}
