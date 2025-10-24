const practiceAreas = [
  {
    title: 'Corporate Law',
    description:
      'Strategic counsel for mergers, acquisitions, compliance, and corporate governance that protects every stage of your business.',
  },
  {
    title: 'Litigation & Dispute Resolution',
    description:
      'Seasoned litigators who resolve complex disputes in and out of the courtroom with clear strategies and relentless advocacy.',
  },
  {
    title: 'Estate Planning',
    description:
      'Thoughtful estate and trust planning tailored to preserve your legacy and provide peace of mind for the next generation.',
  },
  {
    title: 'Real Estate',
    description:
      'Guidance for commercial and residential transactions, zoning, and development backed by decades of market insight.',
  },
]

const testimonials = [
  {
    quote: 'Their team navigated a complicated acquisition with clarity and confidence. We always felt one step ahead.',
    name: 'Alex Martinez',
    role: 'COO, NorthBridge Holdings',
  },
  {
    quote: 'From our first meeting we knew we were in the right hands. Their attention to detail saved our family business.',
    name: 'Priya Desai',
    role: 'Founder, Desai Hospitality Group',
  },
]

const stats = [
  { label: 'Years of combined experience', value: '85+' },
  { label: 'Successful case resolutions', value: '1,200' },
  { label: 'Client satisfaction rating', value: '98%' },
]

export default function Home() {
  return (
    <div className="page">
      <header className="top-bar">
        <div className="brand">
          <span className="brand-mark">P</span>
          <div>
            <p className="brand-name">Ponthieu Legal Group</p>
            <p className="brand-tagline">Trusted Counsel. Proven Results.</p>
          </div>
        </div>
        <nav className="nav-links" aria-label="Primary">
          <a href="#practice-areas">Practice Areas</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="cta-button" href="#contact">
          Schedule Consultation
        </a>
      </header>

      <main>
        <section className="hero" id="top">
          <div className="hero-text">
            <p className="eyebrow">Boutique representation for complex matters</p>
            <h1>Guiding businesses and families through pivotal decisions with unwavering expertise.</h1>
            <p className="intro">
              At Ponthieu Legal Group, our attorneys pair deep industry knowledge with attentive partnership. From proactive
              counseling to high-stakes litigation, we deliver strategies that safeguard what matters most.
            </p>
            <div className="hero-actions">
              <a className="cta-button primary" href="#contact">
                Book a Strategy Call
              </a>
              <a className="cta-button ghost" href="#practice-areas">
                Explore Services
              </a>
            </div>
            <div className="hero-highlights">
              <div>
                <strong>24-hour response</strong>
                <span>Dedicated partner on every case</span>
              </div>
              <div>
                <strong>Multi-jurisdictional team</strong>
                <span>Licensed across the Southeast</span>
              </div>
            </div>
          </div>
          <aside className="consult-card" id="contact">
            <h2>Schedule a Consultation</h2>
            <p>Share your goals and we will tailor a legal roadmap within one business day.</p>
            <form className="consult-form">
              <label>
                Name
                <input type="text" name="name" placeholder="Your full name" />
              </label>
              <label>
                Email
                <input type="email" name="email" placeholder="you@example.com" />
              </label>
              <label>
                Matter Type
                <select name="service">
                  <option value="">Select an area</option>
                  {practiceAreas.map((area) => (
                    <option key={area.title} value={area.title}>
                      {area.title}
                    </option>
                  ))}
                </select>
              </label>
              <label>
                Brief Summary
                <textarea name="summary" rows="3" placeholder="How can we help?" />
              </label>
              <button type="submit">Request Consultation</button>
            </form>
            <p className="disclaimer">No attorney-client relationship is formed by submitting this form.</p>
          </aside>
        </section>

        <section className="stats" aria-label="Firm statistics">
          {stats.map((item) => (
            <div key={item.label}>
              <p className="stat-value">{item.value}</p>
              <p className="stat-label">{item.label}</p>
            </div>
          ))}
        </section>

        <section className="practice" id="practice-areas">
          <header className="section-heading">
            <p className="eyebrow">Practice Areas</p>
            <h2>Comprehensive counsel tailored to your goals</h2>
            <p>
              Our attorneys collaborate across disciplines to offer proactive guidance and swift responses when stakes are
              highest.
            </p>
          </header>
          <div className="card-grid">
            {practiceAreas.map((area) => (
              <article key={area.title} className="info-card">
                <h3>{area.title}</h3>
                <p>{area.description}</p>
                <a href="#contact" className="text-link">
                  Talk to an attorney
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="about" id="about">
          <div className="section-heading">
            <p className="eyebrow">Why clients choose us</p>
            <h2>An agile firm with the depth of a national practice</h2>
          </div>
          <div className="about-content">
            <p>
              Ponthieu Legal Group is a collective of former big-law partners and in-house counsel united by a belief in
              human-centered advocacy. We stay close to your business, anticipate risk, and craft legal strategies that
              accelerate momentum.
            </p>
            <ul>
              <li>Client dashboards that keep matters transparent and on track.</li>
              <li>Cross-functional teams fluent in finance, technology, and regulatory landscapes.</li>
              <li>Alternative fee structures designed for predictability without compromising excellence.</li>
            </ul>
          </div>
        </section>

        <section className="testimonials" id="testimonials">
          <header className="section-heading">
            <p className="eyebrow">Client Testimonials</p>
            <h2>What our partners say</h2>
          </header>
          <div className="card-grid testimonials-grid">
            {testimonials.map((entry) => (
              <figure key={entry.name} className="testimonial-card">
                <blockquote>“{entry.quote}”</blockquote>
                <figcaption>
                  <span className="name">{entry.name}</span>
                  <span className="role">{entry.role}</span>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>

        <section className="cta">
          <div className="cta-content">
            <h2>Ready to move forward with confidence?</h2>
            <p>
              We partner with leaders who demand clarity, precision, and responsive counsel. Let’s discuss how our team can
              advance your objectives.
            </p>
            <a className="cta-button primary" href="mailto:hello@ponthieulegal.com">
              Email hello@ponthieulegal.com
            </a>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div>
          <p className="brand-name">Ponthieu Legal Group</p>
          <p>1200 Canal Street, Suite 500 • New Orleans, LA 70112</p>
          <p>Tel: (504) 555-0199</p>
        </div>
        <div className="footer-links">
          <a href="#practice-areas">Practice Areas</a>
          <a href="#about">About</a>
          <a href="#testimonials">Testimonials</a>
          <a href="#contact">Contact</a>
        </div>
        <p className="copyright">© {new Date().getFullYear()} Ponthieu Legal Group. All rights reserved.</p>
      </footer>
    </div>
  )
}
