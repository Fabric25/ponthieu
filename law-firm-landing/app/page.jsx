const activities = [
  {
    title: 'Droit Économique',
    description:
      'Structuration de vos opérations commerciales, compliance concurrentielle et accompagnement stratégique en France et à l’international.',
  },
  {
    title: 'Data Protection Officer (DPO)',
    description:
      'Pilotage de votre conformité RGPD, cartographie des risques, audits de protection des données et gouvernance digitale.',
  },
  {
    title: 'Droit des contrats',
    description:
      'Négociation, rédaction et sécurisation de vos contrats complexes pour protéger durablement vos engagements.',
  },
  {
    title: 'Contentieux',
    description:
      'Représentation incisive devant toutes juridictions, stratégie de règlement des litiges et procédures d’urgence.',
  },
  {
    title: 'Droit du sport',
    description:
      'Accompagnement des acteurs du sport sur les transferts, partenariats, contrats d’image et gouvernance des clubs.',
  },
  {
    title: 'Propriété intellectuelle',
    description:
      'Protection de vos créations, portefeuilles de marques, brevets et droits d’auteur dans les secteurs innovants.',
  },
  {
    title: 'Droit de l’informatique',
    description:
      'Sécurisation de vos projets technologiques, contrats IT, cloud et logiciels critiques.',
  },
]

const publications = [
  {
    title: 'Cartographier les risques RGPD dans un groupe international',
    excerpt:
      'Nos équipes déploient un dispositif de gouvernance des données pour sécuriser les échanges transfrontaliers et renforcer la confiance des utilisateurs.',
    date: 'Mars 2024',
    link: '#',
  },
  {
    title: 'Les clauses essentielles d’un contrat SaaS premium',
    excerpt:
      'Checklist des stipulations à fort enjeu pour préserver votre propriété intellectuelle et vos engagements de disponibilité.',
    date: 'Février 2024',
    link: '#',
  },
  {
    title: 'Contentieux économique : anticiper pour mieux défendre',
    excerpt:
      'Analyse des leviers pré-contentieux pour sécuriser vos relations commerciales et optimiser vos chances de succès.',
    date: 'Janvier 2024',
    link: '#',
  },
]

const team = [
  {
    name: 'Benjamin Ponthieu',
    role: 'Avocat à la cour',
    email: 'benjamin@ponthieuavocats.com',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
  {
    name: 'Salomé Larcher',
    role: 'Avocat à la cour',
    email: 'salome@ponthieuavocats.com',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
  {
    name: 'François Ponthieu',
    role: 'Avocat à la cour',
    email: 'francois@ponthieuavocats.com',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
  {
    name: 'Diane Rattalino',
    role: 'Avocat à la cour',
    email: 'diane@ponthieuavocats.com',
    image:
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
]

export default function Home() {
  return (
    <div className="page">
      <header className="site-header" aria-label="En-tête principal">
        <a className="brand" href="#accueil">
          <span className="brand-mark">P</span>
          <span className="brand-text">
            <span className="brand-name">Ponthieu Avocats</span>
            <span className="brand-baseline">Cabinet d’excellence</span>
          </span>
        </a>
        <nav className="site-nav" aria-label="Navigation principale">
          <a href="#activites">Activités</a>
          <a href="#publications">Publications</a>
          <a href="#equipe">Nos avocats</a>
          <a href="#vision">Notre vision</a>
          <a href="#contact">Contact</a>
        </nav>
        <a className="header-cta" href="#contact">
          Prendre rendez-vous
        </a>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-overlay" />
          <div className="hero-content">
            <p className="hero-eyebrow">Cabinet à taille humaine, impact international</p>
            <h1>Votre partenaire juridique pour les décisions qui engagent l’avenir.</h1>
            <p className="hero-intro">
              Notre équipe conjugue expertise de haut niveau, sens stratégique et culture de la performance pour sécuriser vos
              opérations les plus sensibles, du droit économique au numérique.
            </p>
            <div className="hero-actions">
              <a className="cta primary" href="#contact">
                Organiser une consultation
              </a>
              <a className="cta secondary" href="mailto:contact@ponthieuavocats.com">
                contact@ponthieuavocats.com
              </a>
            </div>
            <dl className="hero-highlights">
              <div>
                <dt>Réactivité</dt>
                <dd>Un interlocuteur dédié et disponible 24h/24</dd>
              </div>
              <div>
                <dt>Accompagnement sur-mesure</dt>
                <dd>Interventions en France et à l’international</dd>
              </div>
              <div>
                <dt>Excellence sectorielle</dt>
                <dd>Aéronautique, luxe, énergie, mobilités</dd>
              </div>
            </dl>
          </div>
        </section>

        <section className="section activities" id="activites">
          <div className="section-header">
            <p className="section-eyebrow">Activités</p>
            <h2>Des compétences transverses pour sécuriser vos enjeux</h2>
            <p>
              Chaque mission est pilotée par un associé afin de garantir une relation de confiance et une maîtrise totale de vos
              dossiers sensibles.
            </p>
          </div>
          <div className="card-list">
            {activities.map((activity) => (
              <article key={activity.title} className="card">
                <h3>{activity.title}</h3>
                <p>{activity.description}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="section publications" id="publications">
          <div className="section-header">
            <p className="section-eyebrow">Publications</p>
            <h2>Analyses & retours d’expérience</h2>
            <p>Une sélection d’articles issus de notre blog pour éclairer vos décisions stratégiques.</p>
          </div>
          <div className="card-list">
            {publications.map((article) => (
              <article key={article.title} className="card">
                <p className="card-date">{article.date}</p>
                <h3>{article.title}</h3>
                <p>{article.excerpt}</p>
                <a className="text-link" href={article.link}>
                  Lire l’article
                </a>
              </article>
            ))}
          </div>
        </section>

        <section className="section team" id="equipe">
          <div className="section-header">
            <p className="section-eyebrow">Nos avocats</p>
            <h2>Une équipe engagée à vos côtés</h2>
            <p>Des profils complémentaires réunis par l’exigence, la créativité et la défense de vos intérêts.</p>
          </div>
          <div className="team-grid">
            {team.map((member) => (
              <article key={member.email} className="team-card">
                <div className="team-image" role="img" aria-label={member.imageAlt} style={{ backgroundImage: `url(${member.image})` }} />
                <div className="team-content">
                  <h3>{member.name}</h3>
                  <p className="team-role">{member.role}</p>
                  <a href={`mailto:${member.email}`} className="text-link">
                    {member.email}
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="section vision" id="vision">
          <div className="section-header">
            <p className="section-eyebrow">Notre vision du métier d’avocat</p>
            <h2>Allier expérience, dynamisme et proximité</h2>
          </div>
          <div className="vision-content">
            <p>
              J’ai souhaité créer un cabinet à taille humaine, qui, par la composition même de son équipe, dispose d’une solide
              expérience alliée à un fort dynamisme, un engagement et une disponibilité sans faille pour ses clients.
            </p>
            <p>
              Nous connaissons notre métier, ce qui nous permet d’être très réactifs et de satisfaire vos besoins spécifiques.
              Forts de notre expertise, nous vous conseillons et vous défendons dans différents domaines du droit, avec une
              orientation particulière en droit de la propriété intellectuelle et en droit économique, dans des secteurs divers
              (aéronautique, cosmétique, alimentation, énergies renouvelables, entreprises de transport), tant en France qu’à
              l’étranger (Royaume-Uni, Israël, États-Unis).
            </p>
            <p>
              Notre Cabinet apporte une écoute quotidienne aux entreprises, les aide à franchir des étapes importantes de la vie
              des affaires, et les assiste dans leur prise de décisions en vue d’une meilleure protection de leurs intérêts.
            </p>
            <p>
              Nous avons récemment développé une activité de DPO (Data Protection Officer) dans le cadre du règlement RGPD sur la
              protection des données personnelles.
            </p>
          </div>
        </section>

        <section className="section contact" id="contact">
          <div className="section-header">
            <p className="section-eyebrow">Contact</p>
            <h2>Construisons ensemble votre stratégie juridique</h2>
            <p>Confiez-nous les détails de votre projet : nous revenons vers vous sous 24 heures ouvrées.</p>
          </div>
          <form className="contact-form">
            <div className="form-row">
              <label>
                Nom complet
                <input type="text" name="nom" placeholder="Votre nom et prénom" required />
              </label>
              <label>
                Adresse e-mail
                <input type="email" name="email" placeholder="vous@entreprise.com" required />
              </label>
            </div>
            <div className="form-row">
              <label>
                Organisation
                <input type="text" name="organisation" placeholder="Nom de votre société" />
              </label>
              <label>
                Domaine d’intervention
                <select name="domaine" defaultValue="">
                  <option value="" disabled>
                    Sélectionnez une activité
                  </option>
                  {activities.map((activity) => (
                    <option key={activity.title} value={activity.title}>
                      {activity.title}
                    </option>
                  ))}
                </select>
              </label>
            </div>
            <label>
              Message
              <textarea name="message" rows="5" placeholder="Présentez votre dossier en quelques lignes" required />
            </label>
            <button type="submit">Envoyer ma demande</button>
            <p className="form-disclaimer">
              Les informations fournies sont strictement confidentielles. Aucun engagement n’est conclu avant la signature d’une
              lettre de mission.
            </p>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ponthieu Avocats. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
