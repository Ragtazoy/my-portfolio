import Head from 'next/head'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import '@/styles/globals.css'
import { Roboto, Monoton } from 'next/font/google'


const roboto = Roboto({
   subsets: ["latin"],
   variable: "--font-roboto",
   weight: "400"
})
const monoton = Monoton({
   subsets: ["latin"],
   variable: "--font-monoton",
   weight: "400"
})

export default function App({ Component, pageProps }) {
   return (<>
      <Head>
         <meta name='viewport' content='width=device-width, initial-scale=1' />
         <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={`${monoton.variable} font-monoton bg-light w-full min-h-screen cursor-default scroll-smooth`}>
         <Navbar/>
         <Component {...pageProps} />
         <Footer/>
      </main>
   </>)
}
