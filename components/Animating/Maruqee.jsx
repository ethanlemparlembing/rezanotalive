import { useEffect, useRef } from "react"
import gsap from "gsap"

const Crossfade = () => {
  const imgContainerRef = useRef(null)

  useEffect(() => {
    const imgs = gsap.utils.toArray(".motiv")
    const next = 3 // time to change

    const crossfade = () => {
      gsap
        .timeline()
        .to(imgs, { y: "-=32", duration: 1 })
        .to(imgs[0], { y: "+=96", duration: 0 }) // the first to the end
        .eventCallback("onComplete", () => {
          imgs.push(imgs.shift()) // the first (shift) to the end (push) from the array
        })

      // start endless run
      gsap.delayedCall(next, crossfade)
    }

    // start the crossfade after next = 3 sec
    gsap.delayedCall(next, crossfade)

    // Clean up the animation when the component unmounts
    return () => {
      gsap.killTweensOf(crossfade)
    }
  }, [])

  return (
    <div
      id='imgContainer'
      ref={imgContainerRef}
      className='relative my-3 h-8 overflow-hidden'
    >
      <div className='motiv relative h-8'>
        <h1 className='text-2xl font-bold text-white'>Photographer</h1>
      </div>
      <div className='motiv relative h-8'>
        <h1 className='text-2xl font-bold text-white'>Web Developer</h1>
      </div>
      <div className='motiv relative h-8'>
        <h1 className='text-2xl font-bold text-white'>Human</h1>
      </div>
    </div>
  )
}

export default Crossfade
