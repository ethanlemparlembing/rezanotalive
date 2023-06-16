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
        <div className='mx-auto flex h-full max-w-6xl items-center px-5'>
          <div className='flex h-full w-full flex-row items-center justify-between'>
            <div className='container px-0 sm:px-5'>
              <a href='' className='text-lg font-bold'>
                Rezanotalive
              </a>
            </div>
            <div className='hidden gap-3 px-0 sm:flex sm:px-5'>
              <NavbarLink>Project</NavbarLink>
              <NavbarLink>TodosApp</NavbarLink>
            </div>
            <div className='px-0 sm:hidden sm:px-5'>
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
        <nav className='fixed inset-0 z-50 h-screen w-full overflow-hidden bg-black sm:hidden '>
          <div className='container flex h-16 items-center justify-end  px-5'>
            <div className=' border-b-2 py-2'>
              <button
                onClick={toggleOpenCanvaMenu}
                className='font-semibold text-white'
              >
                Close
              </button>
            </div>
          </div>
          <div className='container h-[calc(100vh-4rem)]  '>
            <div className='flex h-full items-center'>
              <div className=' container p-5'>
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
              </div>
            </div>
          </div>
        </nav>
      )}
    </>
  )
}
