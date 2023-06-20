import { useEffect, useRef } from "react"
import gsap from "gsap"

const AnimatedElement = ({ children }) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const element = elementRef.current
    const timeline = gsap.timeline({ paused: true })

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            timeline.fromTo(
              element,
              {
                y: 100,
                opacity: 0,
              },
              {
                y: 0,
                opacity: 1,
                duration: 1,
                ease: "power2.out",
              },
              index * 0.5
            )

            observer.unobserve(element)
            timeline.play()
          }
        })
      },
      { threshold: 1, rootMargin: "0px 0px 20px 0px" }
    )

    observer.observe(element)

    return () => {
      observer.disconnect()
    }
  }, [])

  return (
    <div
      ref={elementRef}
      className='opacity-0 transition-opacity duration-1000 ease-out'
    >
      {children}
    </div>
  )
}

export default AnimatedElement
