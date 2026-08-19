import { useEffect, useState } from 'react'
import ProjectCard from './components/ProjectCard.jsx'
import { GolfVisual, HiberVisual, WadVisual, MinesweeperVisual, SudokuVisual } from './components/ProjectVisuals.jsx'
import { ArrowUpRight, GithubIcon, LinkedinIcon, MailIcon, MenuIcon, MoonIcon, SunIcon } from './components/Icons.jsx'
import profilePhoto from './images/profile-photo.jpg'

const featuredProjects = [
  {
    title: 'Golf Mullet',
    kicker: 'Client · Full-Stack',
    description: 'A production e-commerce platform built for a client, covering the full path from business requirements to deployed software.',
    bullets: [
      'Built product browsing, search, favorites, cart management, user accounts, and authentication.',
      'Engineered REST endpoints and MongoDB data models with JWT authentication and password hashing.',
      'Deployed the React frontend on Vercel and the Node/Express backend on Render.',
    ],
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Vercel', 'Render'],
    links: [
      { label: 'Live site', href: 'https://golfmullet-frontend.vercel.app' },
      { label: 'Frontend', href: 'https://github.com/conradevans/golfmullet-frontend', github: true },
      { label: 'Backend', href: 'https://github.com/conradevans/golfmullet-backend', github: true },
    ],
    visual: <GolfVisual />,
  },
  {
    title: 'HiberGator',
    kicker: 'Team · Technical Leadership',
    description: 'A team-built sleep management application where I led technical development and helped coordinate implementation across the stack.',
    bullets: [
      'Coordinated integration across frontend, backend, and database components.',
      'Diagnosed implementation and integration issues across teammates’ code.',
      'Provided technical guidance and debugging support to keep development moving.',
    ],
    tech: ['React', 'Python', 'Django', 'MongoDB'],
    links: [
      { label: 'GitHub', href: 'https://github.com/OliverG776/HiberGator', github: true },
    ],
    visual: <HiberVisual />,
  },
  {
    title: 'WAD File System',
    kicker: 'Systems · C++',
    description: 'A Linux userspace filesystem project that parses WAD archives into a navigable directory structure and exposes them through FUSE.',
    bullets: [
      'Built a C++ library to parse WAD headers, descriptors, namespaces, map markers, and file data.',
      'Implemented path lookup, directory/file creation, reads, writes, and on-disk descriptor updates using POSIX I/O.',
      'Constructed an in-memory directory tree and validated the library against 35 automated tests.',
    ],
    tech: ['C++', 'FUSE', 'Linux', 'POSIX I/O', 'Data Structures'],
    links: [],
    visual: <WadVisual />,
  },
]

const additionalProjects = [
  {
    title: 'Minesweeper',
    kicker: 'C++ · Desktop',
    description: 'A graphical Minesweeper implementation with randomized boards, recursive zero-tile revealing, flags, win/loss handling, test boards, and debug tooling.',
    tech: ['C++', 'SFML', 'Recursion', 'File I/O'],
    visual: <MinesweeperVisual />,
  },
  {
    title: 'Sudoku',
    kicker: 'Python · Algorithms',
    description: 'An interactive Sudoku application built with Python and Pygame, including multiple difficulty levels and algorithmic generation of solvable grids.',
    tech: ['Python', 'Pygame', 'Algorithms'],
    visual: <SudokuVisual />,
  },
]

const skillGroups = [
  { label: 'Languages', values: ['C++', 'Python', 'JavaScript', 'TypeScript', 'RISC-V Assembly'] },
  { label: 'Application', values: ['React', 'Node.js', 'Express', 'Django', 'Tailwind CSS'] },
  { label: 'Systems & Tools', values: ['Linux', 'Git', 'GitHub', 'MongoDB', 'Jira'] },
]

function SectionHeading({ eyebrow, title, copy }) {
  return <div className="section-heading"><span className="section-eyebrow">{eyebrow}</span><div><h2>{title}</h2>{copy && <p>{copy}</p>}</div></div>
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [theme, setTheme] = useState(() => localStorage.getItem('theme') || 'dark')

  useEffect(() => {
    document.documentElement.dataset.theme = theme
    localStorage.setItem('theme', theme)
  }, [theme])

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const closeMenu = () => setMenuOpen(false)

  return <>
    <header className="site-header">
      <a className="brand" href="#top" onClick={closeMenu} aria-label="Conrad Evans home"><span>CE</span><strong>Conrad Evans</strong></a>
      <nav className={`nav-links ${menuOpen ? 'open' : ''}`} aria-label="Primary navigation">
        <a href="#work" onClick={closeMenu}>Work</a>
        <a href="#about" onClick={closeMenu}>About</a>
        <a href="#experience" onClick={closeMenu}>Experience</a>
        <a href="#contact" onClick={closeMenu}>Contact</a>
        <a className="nav-resume" href="./Conrad-Evans-Resume.pdf" target="_blank" rel="noreferrer">Resume <ArrowUpRight size={15}/></a>
      </nav>
      <div className="header-actions">
        <button className="icon-button" onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`} title="Toggle theme">{theme === 'dark' ? <SunIcon/> : <MoonIcon/>}</button>
        <button className="icon-button menu-button" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle navigation" aria-expanded={menuOpen}><MenuIcon open={menuOpen}/></button>
      </div>
    </header>

    <main>
      <section className="hero" id="top">
        <div className="hero-copy">
          <div className="availability"><span className="status-dot"/>Open to Summer 2027 SWE internships</div>
          <p className="hero-kicker">SOFTWARE ENGINEERING · FULL-STACK · SYSTEMS</p>
          <h1>I build software<br/><span>that solves real problems.</span></h1>
          <p className="hero-lede">I’m Conrad, a software engineer looking to contribute, learn, and build with a great team.</p>
          <div className="hero-actions">
            <a className="primary-button" href="#work">View selected work <ArrowUpRight/></a>
            <a className="text-link" href="mailto:conradbevans01@gmail.com">conradbevans01@gmail.com <ArrowUpRight size={16}/></a>
          </div>
          <div className="hero-socials">
            <a href="https://github.com/conradevans" target="_blank" rel="noreferrer"><GithubIcon/>GitHub</a>
            <a href="https://www.linkedin.com/in/conradbevans/" target="_blank" rel="noreferrer"><LinkedinIcon/>LinkedIn</a>
            <a href="./Conrad-Evans-Resume.pdf" target="_blank" rel="noreferrer">Resume<ArrowUpRight size={16}/></a>
          </div>
        </div>
        <div className="hero-panel" aria-label="Current profile information">
  <div className="profile-card">
    <div className="profile-row">
      <span className="profile-label">University</span>
      <span className="profile-value">University of Florida</span>
    </div>

    <div className="profile-row">
      <span className="profile-label">Degree</span>
      <span className="profile-value">B.S. Computer Science</span>
    </div>

    <div className="profile-row">
      <span className="profile-label">Focus</span>
      <span className="profile-value">
      Backend Development · Systems Programming · Technical Leadership
      </span>
    </div>

    <div className="profile-row">
      <span className="profile-label">Graduation</span>
      <span className="profile-value">May 2028</span>
    </div>
  </div>
</div>
      </section>

      <section className="section" id="work">
        <SectionHeading eyebrow="01 / Selected work" title="Projects with range." copy="Full-stack product work, collaborative engineering, and systems programming — selected to show different sides of how I build." />
        <div className="featured-projects">
          {featuredProjects.map((p, i) => <ProjectCard key={p.title} index={i+1} {...p} />)}
        </div>

        <div className="more-work-header"><h3>Additional projects</h3><p>Earlier work that still demonstrates useful fundamentals.</p></div>
        <div className="additional-grid">
          {additionalProjects.map((p, i) => <ProjectCard key={p.title} index={i+4} {...p} featured={false} />)}
        </div>
      </section>

      <section className="section split-section" id="about">
  <SectionHeading
    eyebrow="02 / About"
    title="Who I am and how I work."
  />

  <div className="about-grid">
    <div className="about-copy">
      <p className="large-copy">
        I'm an Australian now based in the United States, where I've developed a strong interest in software engineering. Outside of coding, I enjoy keeping my body and mind sharp through golf, basketball, and swimming. I've always been competitive and enjoy anything that gives me an opportunity to improve.
      </p>

      <p>
        I build software across full-stack and systems development, with a focus on creating practical, reliable applications.
      </p>

      <p>
        I approach problems by listening to the people around me, understanding different perspectives, and helping the team work toward a clear solution together.
      </p>

      <p>
        I'm drawn to software engineering because I enjoy solving difficult problems, learning how systems work, and turning ideas into software people can actually use.
      </p>
    </div>

    <div className="about-right">
      <div className="about-photo-wrap">
        <img
          src={profilePhoto}
          alt="Conrad Evans"
          className="about-photo"
        />
      </div>

      <div className="skill-panel">
        {skillGroups.map(group => (
          <div className="skill-group" key={group.label}>
            <h4>{group.label}</h4>

            <div className="skill-chips">
              {group.values.map(v => (
                <span key={v}>{v}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
</section>

      <section className="section" id="experience">
        <SectionHeading eyebrow="03 / Experience & education" title="The foundation." copy="A concise view of where I’ve studied, worked, and built the technical base behind the projects above." />
        <div className="timeline-grid">
          <article className="timeline-card education-card">
            <div className="timeline-date">2024 — 2028</div>
            <div><span className="timeline-type">Education</span><h3>University of Florida</h3><p className="timeline-subtitle">B.S. Computer Science · Expected May 2028 · GPA 3.59</p><div className="coursework"><span>Data Structures & Algorithms</span><span>Operating Systems</span><span>Computer Organization</span><span>Introduction to Software Engineering</span><span>Discrete Structures</span></div></div>
          </article>
          <article className="timeline-card">
            <div className="timeline-date">Aug 2026 — Present</div>
            <div><span className="timeline-type">Experience</span><h3>Senior Developer</h3><p className="timeline-subtitle">UF Software Engineering Club · Software Development</p><p>Contribute to technical planning, implementation, and engineering decisions
      across a collaborative development team. Review code, troubleshoot technical
      issues, and provide guidance to teammates to help resolve blockers and keep
      development moving.</p></div>
          </article>
        </div>
      </section>

      <section className="contact-section" id="contact">
        <div className="contact-copy">
          <span className="section-eyebrow">04 / Contact</span>
          <h2>Let’s build something useful.</h2>
          <p>I’m currently looking for Summer 2027 software engineering internship opportunities and always open to talking about interesting software problems.</p>
        </div>
        <div className="contact-links">
          <a href="mailto:conradbevans01@gmail.com"><span><MailIcon/>Email</span><ArrowUpRight/></a>
          <a href="https://github.com/conradevans" target="_blank" rel="noreferrer"><span><GithubIcon/>GitHub</span><ArrowUpRight/></a>
          <a href="https://www.linkedin.com/in/conradbevans/" target="_blank" rel="noreferrer"><span><LinkedinIcon/>LinkedIn</span><ArrowUpRight/></a>
          <a href="./Conrad-Evans-Resume.pdf" target="_blank" rel="noreferrer"><span>Resume</span><ArrowUpRight/></a>
        </div>
      </section>
    </main>

    <footer><span>© {new Date().getFullYear()} Conrad Evans</span><span>Built with React.</span></footer>
  </>
}
