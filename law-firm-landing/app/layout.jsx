import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-inter',
})

export const metadata = {
  title: 'Ponthieu Avocats — Cabinet d’excellence en droit économique et propriété intellectuelle',
  description:
    'Cabinet Ponthieu Avocats : conseil premium en droit économique, propriété intellectuelle, RGPD et contentieux, avec une équipe engagée et réactive.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body className={`${inter.variable} ${inter.className}`}>
        {children}
      </body>
    </html>
  )
}
