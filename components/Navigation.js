import { useEffect, useState } from "react"
import NavbarLink from "./ui/NavbarLink"
import MobilePopup from "./Navbar/MobilePopup"
import Navbar from "./Navbar/Navbar"

export default function Navigation() {
  const [openCanvaMenu, setOpenCanvaMenu] = useState(false)

  const toggleOpenCanvaMenu = () => {
    setOpenCanvaMenu((prevOpenCanvaMenu) => !prevOpenCanvaMenu)
  }

  useEffect(() => {
    const handleOverflowHidden = () => {
      if (openCanvaMenu) {
        document.body.classList.add("overflow-hidden")
      } else {
        document.body.classList.remove("overflow-hidden")
      }
    }

    handleOverflowHidden()

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [openCanvaMenu])

  return (
    <>
      <Navbar onClose={toggleOpenCanvaMenu}>
        <NavbarLink>Photos</NavbarLink>
        <NavbarLink>TodosApp</NavbarLink>
      </Navbar>

      <MobilePopup open={openCanvaMenu} onClose={toggleOpenCanvaMenu}>
        <div className='border-b-2 py-5 text-5xl font-semibold uppercase text-white first:border-y-2'>
          About
        </div>
        <div className='border-b-2 py-5 text-5xl font-semibold uppercase text-white first:border-y-2'>
          Blog
        </div>
        <div className='border-b-2 py-5 text-5xl font-semibold uppercase text-white first:border-y-2'>
          Photos
        </div>
        <div className='border-b-2 py-5 text-5xl font-semibold uppercase text-white first:border-y-2'>
          Contact
        </div>
      </MobilePopup>
    </>
  )
}
