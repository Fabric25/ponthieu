import './globals.css'
import { Cormorant_Garamond, Libre_Baskerville } from 'next/font/google'

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
  variable: '--font-baskerville',
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-cormorant',
})

export const metadata = {
  title: 'Ponthieu Avocats — Cabinet d’excellence en droit économique et propriété intellectuelle',
  description:
    'Cabinet Ponthieu Avocats : conseil premium en droit économique, propriété intellectuelle, RGPD et contentieux, avec une équipe engagée et réactive.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${baskerville.variable} ${cormorant.variable} ${baskerville.className}`}>
        {children}
      </body>
    </html>
  )
}
