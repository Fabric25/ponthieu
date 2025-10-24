import './globals.css'
import { Libre_Baskerville } from 'next/font/google'

const baskerville = Libre_Baskerville({
  subsets: ['latin'],
  weight: ['400', '700'],
  display: 'swap',
})

export const metadata = {
  title: 'Ponthieu Avocats — Cabinet d’excellence en droit économique et propriété intellectuelle',
  description:
    'Cabinet Ponthieu Avocats : conseil premium en droit économique, propriété intellectuelle, RGPD et contentieux, avec une équipe engagée et réactive.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={baskerville.className}>{children}</body>
    </html>
  )
}
