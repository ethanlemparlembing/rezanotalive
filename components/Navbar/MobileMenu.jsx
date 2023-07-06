import Link from "next/link"
import { useEffect, useRef } from "react"

const linkItems = [
  {
    title: "Home",
    href: "/",
  },
  {
    title: "Photos",
    href: "/Photos",
  },
]

export default function MobileMenu({ open, timeline, onClose }) {
  const el = useRef(null)
  const lineEl = useRef([])

  useEffect(() => {
    timeline &&
      timeline
        .to(el.current, {
          x: 0,
          duration: 1,
          ease: "power3.inOut",
        })
        .to(
          [
            lineEl.current[0],
            lineEl.current[1],
            lineEl.current[2],
            lineEl.current[3],
          ],
          {
            opacity: 1,
            duration: 0.5,
            ease: "expo.inOut",
            stagger: { amount: 0.2 },
          }
        )
  }, [timeline])

  useEffect(() => {
    if (open) {
      document.body.classList.add("overflow-hidden")
    } else {
      document.body.classList.remove("overflow-hidden")
    }

    return () => {
      document.body.classList.remove("overflow-hidden")
    }
  }, [open])

  return (
    <div
      ref={el}
      className='fixed inset-0 z-[60] h-screen w-full translate-x-[-100%] bg-white sm:hidden'
    >
      <div className='absolute inset-0 flex h-full w-full items-center p-5'>
        <div className='flex w-full flex-col '>
          {linkItems?.map((item, index) => (
            <Link
              key={index}
              href={item.href}
              ref={(el) => (lineEl.current[index] = el)}
              className='group flex items-center justify-between border-b-2 border-black p-5 opacity-0 hover:bg-black hover:text-white '
            >
              <span className='text-lg font-semibold'>{item.title}</span>
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
            </Link>
          ))}
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
