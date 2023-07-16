import Head from 'next/head'
import Header from './components/Header'
import Footer from './components/Footer'
import './globals.css'
import { Poppins } from 'next/font/google'

const poppins = Poppins({ subsets: ['latin'], weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'] })

export const metadata = {
  title: 'Next js Basic App',
  description: 'This is a practice app for Next.js',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        <link
          rel="icon"
          href="https://www.youtube.com/s/desktop/8d12f492/img/favicon.ico"
          type="image/png"
          sizes="32x32"
        />
      </Head>
      <body className={poppins.className}>
        <Header />
        <div className='max-w-4xl 2xl:max-w-2xl xl:max-w-xl mx-auto mt-3'>
          {children}
        </div>
        <Footer />

      </body>
    </html>
  )
}
