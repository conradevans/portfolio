import { ArrowUpRight, GithubIcon } from './Icons.jsx'

export default function ProjectCard({ index, title, kicker, description, bullets = [], tech, links = [], visual }) {
  return <article className="project-card featured-project">
    <div className="project-visual">{visual}</div>
    <div className="project-copy">
      <div className="project-topline"><span>{String(index).padStart(2,'0')}</span><span>{kicker}</span></div>
      <h3>{title}</h3>
      <p>{description}</p>
      {bullets.length > 0 && <ul className="project-bullets">{bullets.map((b,i)=><li key={i}>{b}</li>)}</ul>}
      <div className="tech-list">{tech.map(t=><span key={t}>{t}</span>)}</div>
      {links.length > 0 && <div className="project-links">{links.map((link)=><a key={link.label} href={link.href} target={link.external === false ? undefined : '_blank'} rel={link.external === false ? undefined : 'noreferrer'}>{link.github ? <GithubIcon size={17}/> : null}{link.label}<ArrowUpRight size={16}/></a>)}</div>}
    </div>
  </article>
}
