import React, { useEffect, useMemo, useState } from 'react'

const chips = [
  'Development', 'Type Safety', 'Minimalism', 'Productivity', 'Clean Code'
]

const skills = [
  'Typescript', 'Java', 'React', 'Astro', 'Express', 'Hono', 'Postgres', 'MongoDB',
  'Drizzle', 'Prisma', 'Mongoose', 'Other tools of web'
]

const experience = [
  
  {
    date: '2017 – Mar 2020',
    role: 'Engineer | Nava Limited',
    points: [
      'Migrated legacy plant and EMS data into databases',
      'Designed ETL pipelines for reliable data ingestion',
      'Built JavaScript dashboards for operational monitoring',
      'Implemented IMS/EMS audit workflows',
      'Reported and remediated vulnerabilities to harden security'
    ]
  },
  {
    date: 'Dec 2021 – Aug 2022',
    role: 'Software Engineer | Ganit Inc.',
    points: [
      'Collaborated on code reviews, bug fixes, and feature development',
      'Optimized codebase for performance and scalability',
      'Integrated third‑party APIs to extend functionality',
      'Troubleshot complex issues across frontend, backend, DBs, and servers',
      'Monitored performance metrics to identify improvements',
      'Supported engineering management in recruitment processes'
    ]
  },
  {
    date: 'Aug 2022 – Jan 2023',
    role: 'Senior Developer | Clicksco',
    points: [
      'Spearheaded a tool increasing company profits by ~5×',
      'Designed and implemented interactive user interfaces',
      'Created responsive designs optimized for various devices',
      'Collaborated with backend to integrate UI elements into applications'
    ]
  },
  {
    date: 'Jan 2023 - May 2025',
    role: 'Engineer | Adaptoid Labs',
    points: [
      'Implemented and maintained reusable UI component library in Storybook',
      'Introduced frontend unit tests using Vitest',
      'Built scalable Node.js multi‑tenant applications',
      'Led projects end‑to‑end across multiple initiatives'
    ]
  },
  {
    date: 'Oct 2025 – Present',
    role: 'Frontend Engineer | InitiateFirst',
    points: [
      'Building a JSON‑driven React framework and low/no‑code dashboards'
    ]
  }
]

function App() {
  const getPreferredTheme = () => {
    const saved = typeof window !== 'undefined' ? localStorage.getItem('theme') : null
    if (saved === 'dark' || saved === 'light') return saved
    const prefersDark = typeof window !== 'undefined' && window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    return prefersDark ? 'dark' : 'light'
  }

  const [theme, setTheme] = useState(getPreferredTheme())

  useEffect(() => {
    const root = document.documentElement
    root.classList.remove('theme-light', 'theme-dark')
    root.classList.add(theme === 'dark' ? 'theme-dark' : 'theme-light')
    try { localStorage.setItem('theme', theme) } catch {}
  }, [theme])

  const themeIcon = useMemo(() => (theme === 'dark' ? '☀️' : '🌙'), [theme])

  const toggleTheme = () => setTheme((t) => (t === 'dark' ? 'light' : 'dark'))

  return (
    <div className="site">
      {/* Top nav */}
      <nav className="nav">
        <div className="nav__brand">Narendra Babu</div>
        <div className="nav__links">
          <a href="#" className="nav__link">Blog</a>
          <a href="#projects" className="nav__link">Projects</a>
          <button aria-label="Toggle theme" className="nav__icon nav__toggle" onClick={toggleTheme}>
            {themeIcon}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="container hero">
        <h1 className="hero__title">Hi, I’m <span className="accent">Narendra Babu</span>.</h1>
        <p className="subtext">
          I build modern, performance‑driven web apps with the MERN stack — MongoDB, Express, React, and Node.js.
          I focus on clean architecture, scalable APIs, and minimalist interfaces that are fast, reliable, and easy to maintain.
        </p>
        <div className="actions">
          <a className="action" href="#">→ Read my blogs</a>
          <a className="action" href="mailto:contact@example.com">→ Contact me</a>
          <a className="action" href="#">→ Download Resume</a>
        </div>
      </header>

      {/* Vibes */}
      <section className="container section section--vibes">
        <h2 className="section__title">Things I vibe with</h2>
        <div className="chips">
          {chips.map((c) => (
            <span key={c} className="chip">{c}</span>
          ))}
        </div>
      </section>

      {/* Currently I am */}
      <section className="container section">
        <h2 className="section__title">Currently I am</h2>
        <ul className="bullets">
          <li>Building an animated, high‑performance site for my college fest.</li>
          <li>Shipping a fullstack project with precision and scalability.</li>
          <li>Focusing on clarity, cleaner architecture, and fewer open tabs.</li>
          <li>Touching grass soon… probably.</li>
        </ul>
      </section>

      {/* Skills */}
      <section className="container section">
        <h2 className="section__title">Skills</h2>
        <div className="chips">
          {skills.map((s) => (
            <span key={s} className="chip chip--soft">{s}</span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container section">
        <h2 className="section__title">Experience</h2>
        <div className="timeline">
          {experience.slice().reverse().map((e) => (
            <div key={`${e.date}-${e.role}`} className="timeline__item">
              <div className="timeline__dot" />
              <div className="timeline__content">
                <div className="timeline__date">{e.date}</div>
                <div className="timeline__role">{e.role}</div>
                {Array.isArray(e.points) ? (
                  <ul className="bullets bullets--compact">
                    {e.points.map((pt) => (
                      <li key={pt}>{pt}</li>
                    ))}
                  </ul>
                ) : e.desc ? (
                  <p className="subtext">{e.desc}</p>
                ) : null}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Writing */}
      <section className="container section">
        <h2 className="section__title">What I write about</h2>
        <p className="subtext">
          I’m documenting the transition from being a decent developer to a truly exceptional one — not through shortcuts,
          but through systems, patterns, and discipline.
        </p>
        <p className="subtext">
          I write about high‑performance setups, type‑safe fullstack templates, and the habits that compound into mastery.
          Some days it’s fun. Some days it’s grind. But every day is forward motion — and that’s worth sharing.
        </p>
      </section>

      {/* Footer */}
      <footer className="container footer">
        <div>© {new Date().getFullYear()} Narendra Babu</div>
        <div className="footer__icons" aria-label="social links">
          <a href="#" className="nav__icon" aria-label="X">✕</a>
          <a href="#" className="nav__icon" aria-label="Github">◎</a>
          <a href="#" className="nav__icon" aria-label="LinkedIn">in</a>
          <a href="#" className="nav__icon" aria-label="Website">≋</a>
        </div>
      </footer>
    </div>
  )
}

export default App