// import "tailwindcss/tailwind.css";
import "../../styles/global.css";

import { Plus_Jakarta_Sans } from "next/font/google"

const pageFont = Plus_Jakarta_Sans({
  weight: ["400", "600", "700"],
  subsets: ["latin"],
  display: "swap",
})

export default function App({ Component, pageProps }) {
  return (
    <main className={pageFont.className}>
      <Component {...pageProps} />
    </main>
  )
}
