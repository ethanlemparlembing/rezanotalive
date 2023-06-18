import AppLayout from "../../components/AppLayout"
import cloudinary from "../../utils/cloudinary"
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder"
import Images from "./services/Images"

export default function Index({ images }) {
  return (
    <AppLayout>
      <div className='mx-auto flex min-h-screen max-w-6xl flex-wrap items-center gap-10 p-0 lg:p-5'>
        <div className='container mx-auto flex min-h-screen flex-col gap-5 sm:gap-10 lg:flex-row'>
          <div className='container flex w-full flex-col justify-center py-10 lg:w-1/2 lg:py-0'>
            <div className='px-5 py-5 lg:px-10'>
              <h2 className='font-sans text-4xl font-bold'>The Heading</h2>
            </div>
            <div className='px-5 py-2 text-base sm:text-lg lg:px-10'>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Adipisci doloremque, maiores sit dolor, aliquid totam omnis
                amet, tempora eveniet explicabo obcaecati nostrum voluptatum
                quas enim est ut sunt rerum expedita.
              </p>
            </div>
            <div className='px-5 py-2 text-base sm:text-lg lg:px-10'>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Maxime
                laboriosam laborum, illo non tenetur dicta doloribus praesentium
                officia nesciunt velit voluptas eum, cum quasi aperiam cumque
                autem odio ipsa voluptatem!.
              </p>
            </div>
            <div className='px-5 py-5 lg:px-10'>
              <button className='flex items-center justify-center rounded-full border-2 border-black bg-white px-4 py-3 text-sm font-medium capitalize  hover:bg-black hover:text-white'>
                get in touch
              </button>
            </div>
          </div>
          <div className='container h-full w-full self-center lg:w-1/2'>
            <div className='grid h-full grid-flow-row place-items-baseline gap-5 sm:grid-flow-col'>
              <div className='overflow-hidden rounded-lg'>
                <img
                  src='https://images.unsplash.com/photo-1686731207846-67503b8bb60d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=464&q=80'
                  alt=''
                  className='h-full w-full'
                />
              </div>
              <div className='flex flex-col gap-5'>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    src='https://images.unsplash.com/photo-1686719277776-93484f0de0f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                    alt=''
                    className='h-full w-full'
                  />
                </div>
                <div className='overflow-hidden rounded-lg'>
                  <img
                    src='https://images.unsplash.com/photo-1686534859068-b7706af46002?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
                    alt=''
                    className='h-full w-full'
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='container mx-auto flex min-h-screen flex-col items-center gap-5  sm:gap-10 lg:flex-row-reverse'>
          <div className='container flex w-full flex-col justify-center py-10 lg:w-1/2 lg:py-0'>
            <div className='p-5'>
              <h2 className='font-sans text-4xl font-bold'>
                Frequently Asked Question
              </h2>
            </div>
            <div className='px-5 py-10'>
              <div className='flex flex-col divide-y-2 divide-black border-y-2 border-black'>
                <div className='py-5'>
                  <div className='flex w-full items-center justify-between'>
                    <div className='text-lg font-semibold uppercase'>
                      Question 1
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='py-5'>
                  <div className='flex w-full items-center justify-between'>
                    <div className='text-lg font-semibold uppercase'>
                      Question 1
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='py-5'>
                  <div className='flex w-full items-center justify-between'>
                    <div className='text-lg font-semibold uppercase'>
                      Question 1
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
                <div className='py-5'>
                  <div className='flex w-full items-center justify-between'>
                    <div className='text-lg font-semibold uppercase'>
                      Question 1
                    </div>
                    <div>
                      <svg
                        xmlns='http://www.w3.org/2000/svg'
                        fill='none'
                        viewBox='0 0 24 24'
                        strokeWidth='1.5'
                        stroke='currentColor'
                        className='h-6 w-6'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='M19.5 8.25l-7.5 7.5-7.5-7.5'
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className='container flex w-full items-center lg:w-1/2'>
            <div className='overflow-hidden rounded-lg'>
              <img
                src='https://images.unsplash.com/photo-1684860755127-1a0d4c928f6c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80'
                alt=''
                className='h-full w-full'
              />
            </div>
          </div>
        </div>
      </div>

      {/* <div className='px-0 sm:px-5'>
        <Images images={images} />
      </div> */}
    </AppLayout>
  )
}

export const getStaticProps = async () => {
  const { resources } = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(500)
    .next_cursor()
    .execute()

  const reducedResults = resources.map((result, i) => ({
    id: i,
    height: result.height,
    width: result.width,
    public_id: result.public_id,
    format: result.format,
  }))

  const blurImagePromises = resources.map((image) => getBase64ImageUrl(image))
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  const images = reducedResults.map((result, i) => ({
    ...result,
    blurDataUrl: imagesWithBlurDataUrls[i],
  }))

  return {
    props: {
      images,
    },
  }
}
