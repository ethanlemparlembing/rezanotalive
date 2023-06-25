import { useState, useEffect, useRef, useCallback } from "react"
import { gsap } from "gsap"
import Link from "next/link"

const Accordion = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(null)
  const contentRefs = useRef([])

  useEffect(() => {
    const contentElements = contentRefs.current
    const contentElement = contentElements[activeIndex]

    if (contentElement && activeIndex !== null) {
      gsap.from(contentElement, {
        duration: 1,
        ease: "power3.out",
        height: 0,
        overflow: "hidden",
      })
    }

    return () => {
      gsap.killTweensOf(contentElement)
    }
  }, [activeIndex])

  const handleClick = useCallback((index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index))
  }, [])

  return (
    <div className='flex flex-col divide-y-2 border-b-2'>
      {items?.map((item, index) => {
        const isActive = activeIndex === index

        return (
          <div key={index} className='py-5'>
            <button
              onClick={() => handleClick(index)}
              className='flex w-full justify-between py-2 text-left font-medium focus:outline-none'
            >
              {item.title}
              <span
                className={`transform transition-transform duration-300 ${
                  isActive ? "rotate-180" : ""
                }`}
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                  strokeWidth={1.5}
                  stroke='currentColor'
                  className='h-6 w-6'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    d='M4.5 15.75l7.5-7.5 7.5 7.5'
                  />
                </svg>
              </span>
            </button>
            {isActive && (
              <div
                ref={(el) => (contentRefs.current[index] = el)}
                className={`transition-height flex flex-col gap-3 overflow-hidden py-3  ${
                  isActive ? "h-auto" : "h-0"
                }`}
              >
                {item.content.map((content, contentIndex) => (
                  <Link
                    href='/'
                    className='text-base font-semibold hover:underline'
                    key={contentIndex}
                  >
                    {content}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      })}
    </div>
  )
}

export default Accordion
