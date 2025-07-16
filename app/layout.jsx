import { Montserrat_Alternates, Poppins } from 'next/font/google'
import './globals.css'
import { AppContextProvider } from '@/context/appContext'
import { Providers } from '@/context/HeroUIProvider'

const montserrat = Montserrat_Alternates({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
})

export const metadata = {
  title: 'Shopysam',
  description: 'Ecommerce app Create by Saman Karimi',
}

export default function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={`${montserrat.variable} ${poppins.variable}`}>
        <Providers>
          <AppContextProvider>
            <main>{children}</main>
            <Toaster position="top-center" richColors />
          </AppContextProvider>
        </Providers>
      </body>
    </html>
  )
}
