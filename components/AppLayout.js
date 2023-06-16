import Footer from "./ui/Footer"
import Header from "./ui/Header"
import Head from "next/head"
import ToggleUpPage from "./ui/ToggleUpPage"

const AppLayout = ({ children }) => {
  return (
    <div className='antialiased'>
      <Head>
        <title>Rezanotalive</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Rezanotalive' key='title' />
      </Head>
      <Header />
      <div className='mx-auto max-w-6xl px-5 pb-10'>{children}</div>
      <Footer />
      <ToggleUpPage />
    </div>
  )
}

export default AppLayout
