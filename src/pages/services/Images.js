import { gsap } from "gsap"
import Image from "next/image"
import { useEffect, useRef } from "react"
import Masonry from "react-masonry-css"

export default function Images({ images }) {
  const columnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  const observerRef = useRef(null)
  const elementsToObserveRef = useRef([])

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "0px 0px -40px 0px",
      threshold: 0.5, // Adjust this threshold as needed
    }

    const handleIntersect = (entries, index) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Element is intersecting, apply animation
          gsap.to(entry.target, {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: index * 0.5,
          })
        } else {
          // Element is not intersecting, do something else
          // (e.g., reset the animation or handle exit animation)
        }
      })
    }

    observerRef.current = new IntersectionObserver(
      handleIntersect,
      observerOptions
    )

    // Start observing multiple elements
    elementsToObserveRef.current.forEach((element) => {
      observerRef.current.observe(element)
    })

    // Stop observing when component unmounts
    return () => {
      observerRef.current.disconnect()
    }
  }, [])

  const addElementToObserve = (element) => {
    elementsToObserveRef.current.push(element)
    if (observerRef.current) {
      observerRef.current.observe(element)
    }
  }
  return (
    <>
      {/* {console.log(Object.keys(usersDomNodes))} */}
      <Masonry
        breakpointCols={columnsObj}
        className='-ml-5 flex w-auto'
        columnClassName='pl-5 bg-clip-padding'
      >
        {images?.map(({ id, public_id }) => (
          <div
            key={id}
            className='  mb-5 h-auto max-w-full break-before-avoid will-change-auto'
          >
            <Image
              ref={(element) => addElementToObserve(element)}
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
              className='transform rounded-lg object-cover object-center opacity-0 brightness-90 transition will-change-auto hover:brightness-110'
            />
          </div>
        ))}
      </Masonry>
    </>
  )
}
