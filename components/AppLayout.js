import Footer from "./ui/Footer"
import Head from "next/head"
import ToggleUpPage from "./ui/ToggleUpPage"
import Navigation from "./Navigation"
import HeroBody from "./ui/HeroBody"

const AppLayout = ({ children, hero }) => {
  const classes = {
    1: "mt-16 py-10",
    0: " pb-8",
  }
  return (
    <div className='antialiased'>
      <Head>
        <title>Rezanotalive</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Rezanotalive' key='title' />
      </Head>
      <Navigation />
      {hero ?? <HeroBody />}
      <div
        className={`mx-auto max-w-6xl px-5 sm:px-0 ${
          hero ? classes[1] : classes[0]
        }`}
      >
        {children}
      </div>
      <Footer />
      <ToggleUpPage />
    </div>
  )
}

export default AppLayout
