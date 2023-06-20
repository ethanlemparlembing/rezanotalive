import Image from "next/image"
import AnimatedElement from "../../components/AnimateMe"
import AppLayout from "../../components/AppLayout"
// import cloudinary from "../../utils/cloudinary"
// import getBase64ImageUrl from "../../utils/generateBlurPlaceholder"

export default function Index() {
  return (
    <AppLayout>
      <div className='mx-auto flex min-h-screen  max-w-6xl items-center justify-center p-0 lg:p-5'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-5 sm:gap-10 lg:flex-row'>
          <div className='container h-1/2 p-5  sm:p-10'>
            <AnimatedElement>
              <h2 className='text-2xl font-bold'>The Heading</h2>
            </AnimatedElement>
            <AnimatedElement>
              <p className='mt-5 text-base font-normal leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                error quisquam ducimus? Harum natus voluptate unde, sapiente
                autem sunt neque hic nisi facilis molestias exercitationem
                dolores molestiae nihil! Porro, reiciendis!
              </p>
            </AnimatedElement>
            <AnimatedElement>
              <button className='mt-5 rounded-full border-2 border-black px-4 py-3 text-sm font-semibold'>
                Get In Touch
              </button>
            </AnimatedElement>
          </div>
          <div className='container pb-5 sm:pb-0'>
            <div className='flex flex-col items-baseline gap-5 sm:flex-row'>
              <AnimatedElement>
                <Image
                  src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627054/Photos/image-64_td030c.jpg'
                  alt=''
                  sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
                  width={720}
                  height={480}
                  priority
                  className='h-auto max-w-full rounded-xl'
                />
              </AnimatedElement>
              <div className='hidden flex-col gap-5 sm:flex'>
                <AnimatedElement>
                  <Image
                    src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627054/Photos/image-66_wudcqb.jpg'
                    alt=''
                    className='h-auto max-w-full rounded-xl'
                    sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
                    width={720}
                    height={480}
                    priority
                  />
                </AnimatedElement>
                <AnimatedElement>
                  <Image
                    src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627055/Photos/image-70_bndcsf.jpg'
                    alt=''
                    className='h-auto max-w-full rounded-xl'
                    sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
                    width={720}
                    height={480}
                    priority
                  />
                </AnimatedElement>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='mx-auto flex min-h-screen max-w-6xl items-center justify-center p-0 lg:p-5'>
        <div className='flex h-full w-full flex-col items-center justify-center gap-5 sm:gap-10 lg:flex-row-reverse'>
          <div className='container p-5 sm:p-10'>
            <AnimatedElement>
              <h2 className='text-2xl font-bold'>The Heading</h2>
            </AnimatedElement>
            <AnimatedElement>
              <p className='mt-5 text-base font-normal leading-relaxed'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quidem
                error quisquam ducimus? Harum natus voluptate unde, sapiente
                autem sunt neque hic nisi facilis molestias exercitationem
                dolores molestiae nihil! Porro, reiciendis!
              </p>
            </AnimatedElement>

            <AnimatedElement>
              <button className='mt-5 rounded-full border-2 border-black px-4 py-3 text-sm font-semibold'>
                Get In Touch
              </button>
            </AnimatedElement>
          </div>
          <div className='container'>
            <AnimatedElement>
              <Image
                src='https://res.cloudinary.com/dxpxe6yit/image/upload/v1685627054/Photos/image-69_gvjdxh.jpg'
                alt=''
                className='container mx-auto rounded-xl object-contain'
                sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
                width={720}
                height={480}
                priority
              />
            </AnimatedElement>
          </div>
        </div>
      </div>

      {/* <div className='px-0 sm:px-5'>
        <Images images={images} />
      </div> */}
    </AppLayout>
  )
}

// export const getStaticProps = async () => {
//   const { resources } = await cloudinary.v2.search
//     .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
//     .sort_by("public_id", "desc")
//     .max_results(500)
//     .next_cursor()
//     .execute()

//   const reducedResults = resources.map((result, i) => ({
//     id: i,
//     height: result.height,
//     width: result.width,
//     public_id: result.public_id,
//     format: result.format,
//   }))

//   const blurImagePromises = resources.map((image) => getBase64ImageUrl(image))
//   const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

//   const images = reducedResults.map((result, i) => ({
//     ...result,
//     blurDataUrl: imagesWithBlurDataUrls[i],
//   }))

//   return {
//     props: {
//       images,
//     },
//   }
// }
