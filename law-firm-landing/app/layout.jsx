import './globals.css'

export const metadata = {
  title: 'Ponthieu Legal Group | Trusted Counsel. Proven Results.',
  description:
    'Boutique legal representation for businesses and families featuring practice areas, testimonials, and consultation booking.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
