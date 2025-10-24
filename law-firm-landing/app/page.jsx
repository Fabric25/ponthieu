import { Button } from '@/components/ui/button'
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import {
  Item,
  ItemContent,
  ItemDescription,
  ItemTitle,
} from '@/components/ui/item'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'

const navLinks = [
  { href: '#activites', label: 'Activités' },
  { href: '#publications', label: 'Publications' },
  { href: '#equipe', label: 'Nos avocats' },
  { href: '#vision', label: 'Notre vision' },
  { href: '#contact', label: 'Contact' },
]

const activities = [
  {
    title: 'Droit Économique',
    description:
      'Structuration des opérations commerciales, conformité concurrentielle et défense de vos intérêts stratégiques.',
  },
  {
    title: 'Data Protection Officer (DPO)',
    description:
      'Pilotage de votre conformité RGPD, gouvernance des données, cartographies des risques et audits ciblés.',
  },
  {
    title: 'Droit des contrats',
    description:
      'Négociation, rédaction et sécurisation de vos contrats pour protéger durablement vos engagements clés.',
  },
  {
    title: 'Contentieux',
    description:
      'Stratégie pré-contentieuse, représentation incisive devant toutes juridictions et procédures d’urgence.',
  },
  {
    title: 'Droit du sport',
    description:
      'Accompagnement des acteurs du sport sur les partenariats, contrats d’image et gouvernance des clubs.',
  },
  {
    title: 'Propriété intellectuelle',
    description:
      'Protection de vos créations, portefeuilles de marques, brevets et droits d’auteur dans les secteurs innovants.',
  },
  {
    title: 'Droit de l’informatique',
    description: 'Sécurisation de vos projets technologiques, contrats IT, cloud et logiciels critiques.',
  },
]

const publications = [
  {
    title: 'Cartographier les risques RGPD dans un groupe international',
    excerpt:
      'Nos équipes mettent en place un dispositif de gouvernance pour fluidifier les transferts de données transfrontaliers.',
    date: 'Insights — Mars 2024',
    link: '#',
  },
  {
    title: 'Les clauses déterminantes d’un contrat SaaS premium',
    excerpt:
      'Check-list des stipulations à fort enjeu pour préserver votre propriété intellectuelle et vos engagements de service.',
    date: 'Tech & Médias — Février 2024',
    link: '#',
  },
  {
    title: 'Contentieux économique : anticiper pour mieux défendre',
    excerpt:
      'Analyse des leviers pré-contentieux pour sécuriser vos relations commerciales et optimiser vos positions.',
    date: 'Économie — Janvier 2024',
    link: '#',
  },
]

const team = [
  {
    name: 'Benjamin Ponthieu',
    role: 'Avocat à la cour',
    email: 'benjamin@ponthieuavocats.com',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80&sat=-100',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
  {
    name: 'Salomé Larcher',
    role: 'Avocat à la cour',
    email: 'salome@ponthieuavocats.com',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80&sat=-100',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
  {
    name: 'François Ponthieu',
    role: 'Avocat à la cour',
    email: 'francois@ponthieuavocats.com',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80&sat=-100',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
  {
    name: 'Diane Rattalino',
    role: 'Avocat à la cour',
    email: 'diane@ponthieuavocats.com',
    image: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&fit=crop&w=640&q=80&sat=-100',
    imageAlt: 'Young woman with long red hair against teal backdrop',
  },
]

const heroHighlights = [
  {
    eyebrow: 'International',
    title: 'France, Europe & États-Unis',
    description: 'Coordination sur-mesure pour les groupes internationaux, dans votre fuseau horaire.',
  },
  {
    eyebrow: 'Réactivité',
    title: '24h pour un premier retour',
    description: 'Un associé référent reste disponible et orchestre l’équipe projet dédiée.',
  },
  {
    eyebrow: 'Secteurs',
    title: 'Innovation & croissance',
    description: 'Aéronautique, luxe, énergie, mobilités, tech et nouveaux modèles économiques.',
  },
]

export default function Home() {
  return (
    <div className="page">
      <header className="site-header" aria-label="En-tête principal">
        <div className="header-inner">
          <a className="brand" href="#accueil">
            <span className="brand-mark">P</span>
            <span className="brand-text">
              <span className="brand-name">Ponthieu Avocats</span>
              <span className="brand-baseline">Cabinet d’excellence</span>
            </span>
          </a>
          <nav className="site-nav" aria-label="Navigation principale">
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} className="nav-link">
                {link.label}
              </a>
            ))}
          </nav>
          <Button as="a" href="#contact" variant="secondary" size="sm">
            Consultation
          </Button>
        </div>
      </header>

      <main>
        <section className="hero" id="accueil">
          <div className="hero-inner">
            <p className="hero-eyebrow">Cabinet à taille humaine — Impact global</p>
            <h1>Nous sécurisons vos décisions structurantes et vos innovations stratégiques.</h1>
            <p className="hero-intro">
              Ponthieu Avocats associe expertise juridique de haut niveau et culture du résultat pour accompagner vos projets en
              droit économique, numérique et propriété intellectuelle.
            </p>
            <div className="hero-actions">
              <Button href="#contact" as="a" variant="primary" size="lg">
                Organiser une consultation
              </Button>
              <Button href="mailto:contact@ponthieuavocats.com" as="a" variant="ghost" size="lg">
                contact@ponthieuavocats.com
              </Button>
            </div>
            <div className="hero-highlight-list" role="list">
              {heroHighlights.map((highlight) => (
                <Item key={highlight.title} variant="outline" size="sm" className="hero-highlight">
                  <ItemContent>
                    <span className="hero-highlight-eyebrow">{highlight.eyebrow}</span>
                    <ItemTitle as="h3">{highlight.title}</ItemTitle>
                    <ItemDescription>{highlight.description}</ItemDescription>
                  </ItemContent>
                </Item>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light activities" id="activites">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-eyebrow">Activités</p>
              <h2>Protéger, structurer et défendre vos enjeux clés</h2>
              <p>
                Chaque dossier est orchestré par un associé qui mobilise des experts dédiés pour des solutions juridiques
                incisives et adaptables.
              </p>
            </div>
            <div className="activities-grid">
              {activities.map((activity) => (
                <Card key={activity.title} className="activity-card">
                  <CardHeader>
                    <CardTitle>{activity.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{activity.description}</CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--contrast publications" id="publications">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-eyebrow">Publications</p>
              <h2>Regards croisés sur l’actualité juridique</h2>
              <p>Une sélection d’analyses issues de notre blog pour éclairer vos décisions.</p>
            </div>
            <div className="publications-grid">
              {publications.map((article) => (
                <Card key={article.title} className="publication-card">
                  <CardHeader>
                    <CardAction>{article.date}</CardAction>
                    <CardTitle>{article.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{article.excerpt}</CardDescription>
                  </CardContent>
                  <CardFooter>
                    <Button as="a" href={article.link} variant="ghost" size="sm">
                      Lire l’article
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--light team" id="equipe">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-eyebrow">Nos avocats</p>
              <h2>Une équipe engagée et accessible</h2>
              <p>Des profils complémentaires réunis par l’exigence, la créativité et la défense de vos intérêts.</p>
            </div>
            <div className="team-grid">
              {team.map((member) => (
                <Card key={member.email} className="team-card">
                  <CardHeader>
                    <div
                      className="team-image"
                      role="img"
                      aria-label={member.imageAlt}
                      style={{ backgroundImage: `url(${member.image})` }}
                    />
                  </CardHeader>
                  <CardContent>
                    <CardTitle>{member.name}</CardTitle>
                    <p className="team-role">{member.role}</p>
                    <a href={`mailto:${member.email}`} className="text-link">
                      {member.email}
                    </a>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="section section--contrast vision" id="vision">
          <div className="section-inner">
            <div className="vision-shell">
              <div className="section-header">
                <p className="section-eyebrow">Notre vision du métier d’avocat</p>
                <h2>Allier expérience, dynamisme et proximité</h2>
              </div>
              <div className="vision-content">
                <p>
                  J’ai souhaité créer un cabinet à taille humaine, qui, par la composition même de son équipe, dispose d’une
                  solide expérience alliée à un fort dynamisme, un engagement et une disponibilité sans faille pour ses clients.
                </p>
                <p>
                  Nous connaissons notre métier, ce qui nous permet d’être très réactifs et de satisfaire vos besoins spécifiques.
                  Forts de notre expertise, nous vous conseillons et vous défendons dans différents domaines du droit, avec une
                  orientation particulière en droit de la propriété intellectuelle et en droit économique, dans des secteurs
                  divers (aéronautique, cosmétique, alimentation, énergies renouvelables, entreprises de transport), tant en
                  France qu’à l’étranger (Royaume-Uni, Israël, États-Unis).
                </p>
                <p>
                  Notre Cabinet apporte une écoute quotidienne aux entreprises, les aide à franchir des étapes importantes de la
                  vie des affaires, et les assiste dans leur prise de décisions en vue d’une meilleure protection de leurs
                  intérêts.
                </p>
                <p>
                  Nous avons récemment développé une activité de DPO (Data Protection Officer) dans le cadre du règlement RGPD sur
                  la protection des données personnelles.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section section--light contact" id="contact">
          <div className="section-inner">
            <div className="section-header">
              <p className="section-eyebrow">Contact</p>
              <h2>Construisons ensemble votre stratégie juridique</h2>
              <p>Confiez-nous les détails de votre projet : nous revenons vers vous sous 24 heures ouvrées.</p>
            </div>
            <Card className="contact-card">
              <CardContent>
                <form className="contact-form">
                  <div className="form-row">
                    <Label htmlFor="nom">Nom complet</Label>
                    <Input id="nom" name="nom" placeholder="Votre nom et prénom" required />
                  </div>
                  <div className="form-row">
                    <Label htmlFor="email">Adresse e-mail</Label>
                    <Input id="email" name="email" type="email" placeholder="vous@entreprise.com" required />
                  </div>
                  <div className="form-row">
                    <Label htmlFor="organisation">Organisation</Label>
                    <Input id="organisation" name="organisation" placeholder="Nom de votre société" />
                  </div>
                  <div className="form-row">
                    <Label htmlFor="domaine">Domaine d’intervention</Label>
                    <select id="domaine" name="domaine" defaultValue="" className="ui-select">
                      <option value="" disabled>
                        Sélectionnez une activité
                      </option>
                      {activities.map((activity) => (
                        <option key={activity.title} value={activity.title}>
                          {activity.title}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="form-row">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      rows={6}
                      placeholder="Présentez votre dossier en quelques lignes"
                      required
                    />
                  </div>
                  <Button type="submit" size="lg">
                    Envoyer ma demande
                  </Button>
                  <p className="form-disclaimer">
                    Les informations fournies sont strictement confidentielles. Aucun engagement n’est conclu avant la signature
                    d’une lettre de mission.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <p>© {new Date().getFullYear()} Ponthieu Avocats. Tous droits réservés.</p>
      </footer>
    </div>
  )
}
