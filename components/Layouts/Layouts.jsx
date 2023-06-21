import Head from "next/head"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"
import ButtonUpPage from "../Button/ButtonUpPage"

export default function Layouts({ children }) {
  return (
    <div className='antialiased'>
      <Head>
        <title>Rezanotalive</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Rezanotalive' key='title' />
      </Head>
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}
