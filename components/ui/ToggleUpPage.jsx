import { useEffect, useState } from "react"

export default function ToggleUpPage() {
  const [showButton, setShowButton] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.screenY || document.documentElement.scrollTop
      const heroSectionHeight = 586

      setShowButton(scrollTop > heroSectionHeight)
    }

    window.addEventListener("scroll", handleScroll)

    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }
  return (
    <div
      className={`fixed bottom-0 right-0 p-3 sm:p-5 ${
        showButton ? "block" : "hidden"
      }`}
    >
      <button
        onClick={handleScrollToTop}
        className='flex h-10 w-10 items-center justify-center rounded-full bg-black'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth='1.5'
          stroke='currentColor'
          className='h-6 w-6 stroke-2 text-white'
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M4.5 10.5L12 3m0 0l7.5 7.5M12 3v18'
          />
        </svg>
      </button>
    </div>
  )
}
