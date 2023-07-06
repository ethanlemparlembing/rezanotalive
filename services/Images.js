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
    let mounted = true

    const observerOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    }

    const handleIntersect = (entries, index) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          gsap.to(entry.target, {
            autoAlpha: 1,
            y: 0,
            duration: 1,
            delay: index * 0.5,
          })
        }
      })
    }

    observerRef.current = new IntersectionObserver(
      handleIntersect,
      observerOptions
    )

    if (mounted) {
      elementsToObserveRef.current.forEach((element) => {
        if (element instanceof Element) {
          observerRef.current.observe(element)
        }
      })
    }

    return () => {
      mounted = false
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const addElementToObserve = (element) => {
    if (element instanceof Element) {
      elementsToObserveRef.current.push(element)
      if (observerRef.current) {
        observerRef.current.observe(element)
      }
    }
  }

  return (
    <div className='w-full'>
      <Masonry
        breakpointCols={columnsObj}
        className='-ml-5 flex w-auto '
        columnClassName='pl-5 bg-clip-padding '
      >
        {images?.map(({ id, public_id, blurDataUrl, height, width }) => (
          <div
            key={id}
            ref={(element) => addElementToObserve(element)}
            className=' mb-5 h-auto max-w-full  break-before-avoid overflow-hidden border-[1.5px] border-black opacity-0 will-change-auto '
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/q_auto:best/${public_id}.jpg`}
              width={width}
              height={height}
              priority
              blurDataURL={blurDataUrl}
              placeholder='blur'
              sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
              alt={public_id}
              className='transform  object-cover object-center  brightness-100 transition will-change-auto hover:brightness-90'
            />
          </div>
        ))}
      </Masonry>
    </div>
  )
}
