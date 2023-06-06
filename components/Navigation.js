import { useEffect, useState } from "react"
import NavbarLink from "./ui/NavbarLink"

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
      <nav className='fixed left-0 top-0 z-10 h-16 w-full bg-white'>
        <div className='mx-auto flex h-full max-w-6xl items-center px-6 sm:px-10'>
          <div className='flex h-full w-full flex-row items-center justify-between'>
            <div>
              <a href='' className='text-lg font-bold'>
                Rezanotalive
              </a>
            </div>
            <div className='hidden gap-3 sm:flex'>
              <NavbarLink>Project</NavbarLink>
              <NavbarLink>TodosApp</NavbarLink>
            </div>
            <div className='sm:hidden'>
              <button
                onClick={toggleOpenCanvaMenu}
                className='text-base font-semibold'
              >
                Menu
              </button>
            </div>
          </div>
        </div>
      </nav>
      {openCanvaMenu && (
        <nav className='fixed top-0 z-50 h-screen w-full bg-black sm:hidden'>
          <div className='mx-auto flex h-16 max-w-6xl justify-end bg-white px-6'>
            <button
              onClick={toggleOpenCanvaMenu}
              className='text-base font-semibold'
            >
              Close
            </button>
          </div>
        </nav>
      )}
    </>
  )
}
