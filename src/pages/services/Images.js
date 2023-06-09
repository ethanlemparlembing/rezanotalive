import { gsap } from "gsap"
import Image from "next/image"
import { useEffect, useRef, useState } from "react"
import Masonry from "react-masonry-css"

export default function Images({ images }) {
  const usersDomNodes = useRef([])
  const columnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  const observer = useRef(null)
  const targetsRef = useRef([])

  useEffect(() => {
    const options = {
      root: null, // The root element to use as the viewport for checking visibility
      rootMargin: "0px", // Margin around the root element
      threshold: 1, // The percentage of the target element's visibility needed to trigger the callback
    }
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateElement(entry.target)
        } else {
          noanimateElement(entry.target)
        }
      })
    }, options)

    targetsRef.current.forEach((target) => {
      if (target) {
        observer.current.observe(target)
      }
    })

    return () => {
      if (observer.current) {
        observer.current.disconnect()
      }
    }
  }, [])

  const addTargetRef = (target) => {
    if (target && !targetsRef.current.includes(target)) {
      targetsRef.current.push(target)
    }
  }

  const animateElement = (element) => {
    gsap.to(element, {
      duration: 0.3,
      stagger: 0.3,
      y: 0,
      ease: "power2.out",
      opacity: 1,
    })
  }
  const noanimateElement = (element) => {
    gsap.to(element, {
      duration: 0.3,
      stagger: 0.5,
      y: 0,
      opacity: 0,
    })
  }

  return (
    <>
      {/* {console.log(Object.keys(usersDomNodes))} */}
      <Masonry
        breakpointCols={columnsObj}
        className='-ml-5 flex w-auto '
        columnClassName='pl-5 bg-clip-padding'
      >
        {images.map(({ id, public_id }) => (
          <div
            key={id}
            ref={addTargetRef}
            className='  mb-5 h-auto max-w-full break-before-avoid will-change-auto'
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.jpg`}
              width={720}
              height={480}
              // fill
              priority
              sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
              alt='eek'
              className=' transform rounded-lg object-cover object-center brightness-90 transition will-change-auto hover:brightness-110'
            />
          </div>
        ))}
      </Masonry>
    </>
  )
}
