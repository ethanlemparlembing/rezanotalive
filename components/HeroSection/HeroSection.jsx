import Image from "next/image"
import photoProfile from "../../public/assets/img/20221030-IMG_5673.jpg"
import Marquee from "../Animating/Maruqee"
import VerticalMarquee from "../Animating/Maruqee"
import VerticalPauseAnimation from "../Animating/Maruqee"
import Crossfade from "../Animating/Maruqee"

export default function HeroSection() {
  return (
    <div className='mx-auto max-w-6xl'>
      <div className='h-[calc(100vh-4rem)] p-5'>
        <div className='relative h-full w-full border-[1.5px] border-black p-5'>
          <div className='absolute inset-0 h-full w-full'>
            <Image
              height={700}
              width={500}
              src={photoProfile}
              alt=''
              className='h-full w-full  object-cover'
            />
          </div>
          <div className='absolute inset-0 flex h-full w-full items-center'>
            <div className='p-10'>
              <p className='text-2xl font-bold text-white'>Hi, I&apos;m a</p>
              <Crossfade />
              <p className='max-w-sm text-2xl font-bold leading-7 tracking-normal text-white'>
                Based In Indonesian
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
