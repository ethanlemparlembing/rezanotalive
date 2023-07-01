import { gsap } from "gsap"
import { useEffect, useRef } from "react"

export default function MobileMenu({ open, onClose }) {
  const el = useRef(null)
  const ctx = gsap.context(() => {})

  useEffect(() => {
    ctx.add(() => {
      gsap.to(el.current, {
        y: open ? 0 : "-100vh",
        duration: 1,
        ease: "power3.out",
      })
    })
    // Add or remove the class based on the modal's open/close state
    if (open) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    // Cleanup: remove the class when the component unmounts
    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [open, ctx])

  return (
    <div
      ref={el}
      className='fixed inset-0 z-[60] h-screen w-full translate-y-[-100vh] transform bg-white sm:hidden'
    >
      <div className='absolute inset-0 flex h-full w-full items-center p-5'>
        <div className='w-full divide-y-2 divide-black border-b-2 border-black '>
          <a
            href=''
            className='group flex items-center justify-between p-5 hover:bg-black hover:text-white'
          >
            <span className='text-lg font-semibold'>Link 1</span>
            <div className='transform transition-transform duration-300 ease-in-out group-hover:-rotate-90'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 stroke-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
          </a>
          <a
            href=''
            className='sm: group flex items-center justify-between p-5 hover:bg-black hover:text-white'
          >
            <span className='text-lg font-semibold'>Link 1</span>
            <div className='transform transition-transform duration-300 ease-in-out group-hover:-rotate-90'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 stroke-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
          </a>
          <a
            href=''
            className='group flex items-center justify-between p-5 hover:bg-black hover:text-white'
          >
            <span className='text-lg font-semibold'>Link 1</span>
            <div className='transform transition-transform duration-300 ease-in-out group-hover:-rotate-90'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                strokeWidth='1.5'
                stroke='currentColor'
                className='h-6 w-6 stroke-2'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                />
              </svg>
            </div>
          </a>
        </div>
      </div>
      <div className='absolute flex w-full items-center justify-end p-5'>
        <button onClick={onClose} href='' className='text-base font-semibold'>
          Close
        </button>
      </div>
    </div>
  )
}
