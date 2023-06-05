import { forwardRef } from "react"
import Footer from "./ui/Footer"
import Header from "./ui/Header"
import Head from "next/head"

const AppLayout = forwardRef(function AppLayout({ children }, ref) {
  return (
    <div className='antialiased'>
      <Head>
        <title>Rezanotalive</title>
        <meta charSet='utf-8' />
        <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        <meta property='og:title' content='Rezanotalive' key='title' />
      </Head>
      <Header />
      <div className='mx-auto max-w-6xl px-5 pb-10' ref={ref}>
        {children}
      </div>
      <Footer />
    </div>
  )
})

export default AppLayout
