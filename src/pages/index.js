import Image from "next/image"
import ButtonUpPage from "../../components/Button/ButtonUpPage"
import HeroSection from "../../components/HeroSection/HeroSection"
import Layouts from "../../components/Layouts/Layouts"

export default function Index() {
  return (
    <Layouts>
      <ButtonUpPage />
      <HeroSection />
      <div className='mx-auto max-w-6xl space-y-20 px-5 py-20'>
        <div className='grid min-h-screen place-items-center'>
          <div className='flex w-full flex-col gap-10 lg:flex-row-reverse'>
            <div className='container mx-auto flex max-w-xl items-center'>
              <div className='space-y-5 p-0 sm:p-10'>
                <h2 className='text-2xl font-bold'>The Header</h2>
                <p className='max-w-lg text-base font-normal leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi sint nam temporibus, nostrum repudiandae hic ad
                  inventore illum dolorum iure veniam officiis consequuntur a
                  quidem aliquid beatae porro fugiat suscipit?
                </p>
                <button className='flex w-24 items-center justify-center border-[1.5px] border-black px-5 py-2 text-sm font-semibold capitalize hover:bg-black hover:text-white'>
                  submit
                </button>
              </div>
            </div>
            <div className='container mx-auto flex max-w-xl flex-col items-baseline gap-5 self-center  sm:flex-row '>
              <div>
                <Image
                  className='h-full w-full border-[1.5px] border-black'
                  src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627054/Photos/image-64_td030c.jpg'
                  alt=''
                  height={700}
                  width={500}
                />
              </div>
              <div className='flex flex-col gap-5'>
                <Image
                  height={500}
                  width={700}
                  className='h-auto max-w-full border-[1.5px] border-black'
                  src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627054/Photos/image-66_wudcqb.jpg'
                  alt=''
                />
                <Image
                  height={500}
                  width={700}
                  className='h-auto max-w-full border-[1.5px] border-black'
                  src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627055/Photos/image-70_bndcsf.jpg'
                  alt=''
                />
              </div>
            </div>
          </div>
        </div>
        <div className='grid min-h-screen place-items-center'>
          <div className='flex w-full flex-col gap-10 lg:flex-row'>
            <div className='container mx-auto flex max-w-xl items-center'>
              <div className='space-y-5 p-0 sm:p-10'>
                <h2 className='text-2xl font-bold'>The Header</h2>
                <p className='max-w-lg text-base font-normal leading-relaxed'>
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Eligendi sint nam temporibus, nostrum repudiandae hic ad
                  inventore illum dolorum iure veniam officiis consequuntur a
                  quidem aliquid beatae porro fugiat suscipit?
                </p>
                <button className='flex w-24 items-center justify-center border-[1.5px] border-black px-5 py-2 text-sm font-semibold capitalize hover:bg-black hover:text-white'>
                  submit
                </button>
              </div>
            </div>
            <div className='container mx-auto flex max-w-xl flex-col items-baseline gap-5 self-center sm:flex-row '>
              <Image
                height={500}
                width={700}
                className='h-auto max-w-full border-[1.5px] border-black'
                src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627054/Photos/image-66_wudcqb.jpg'
                alt=''
              />
            </div>
          </div>
        </div>
      </div>
    </Layouts>
  )
}
