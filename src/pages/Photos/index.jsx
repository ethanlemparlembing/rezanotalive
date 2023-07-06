import Images from "../../../services/Images"
import cloudinary from "../../../utils/cloudinary"
import getBase64ImageUrl from "../../../utils/generateBlurPlaceholder"
import Layouts from "../../../components/Layouts/Layouts"
import ButtonUpPage from "../../../components/Button/ButtonUpPage"

export default function Photos({ images }) {
  return (
    <Layouts>
      <ButtonUpPage />
      <div className='mx-auto max-w-6xl p-5'>
        <div className='max-w-full py-10'>
          <div className='max-w-full space-y-3 py-5'>
            <h2 className='text-4xl font-bold'>Photos</h2>
            <p className='text-lg font-medium'>
              A collection of my pictures featuring various moments and subjects
              captured through a lens, providing a visual representation of
              diverse experiences, emotions, and scenes.
            </p>
          </div>
          <div className='max-w-full pb-10'>
            <div className='flex flex-wrap items-center gap-3'>
              <button className='inline-flex w-24 items-center justify-center border-[1.5px] border-black bg-black px-4 py-2 text-base font-semibold capitalize text-white transition-colors duration-300 ease-in-out '>
                all
              </button>
              <button className='inline-flex w-24 items-center justify-center border-[1.5px] border-black px-4 py-2 text-base font-semibold capitalize transition-colors duration-300 ease-in-out hover:bg-black hover:text-white '>
                Street
              </button>
              <button className='inline-flex w-24 items-center justify-center border-[1.5px] border-black px-4 py-2 text-base font-semibold capitalize transition-colors duration-300 ease-in-out hover:bg-black hover:text-white '>
                People
              </button>
              <button className='inline-flex w-24 items-center justify-center border-[1.5px] border-black px-4 py-2 text-base font-semibold capitalize transition-colors duration-300 ease-in-out hover:bg-black hover:text-white '>
                Nature
              </button>
            </div>
          </div>
        </div>
        <Images images={images} />
      </div>
    </Layouts>
  )
}

export async function getStaticProps() {
  const results = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "asc")
    .max_results(500)
    .execute()

  let reducedResults = []

  let i = 0
  for (let result of results.resources) {
    reducedResults.push({
      id: i,
      src: result.secure_url,
      height: result.height,
      width: result.width,
      public_id: result.public_id,
      format: result.format,
    })
    i++
  }

  const blurImagePromises = results.resources.map((image) => {
    return getBase64ImageUrl(image)
  })
  const imagesWithBlurDataUrls = await Promise.all(blurImagePromises)

  for (let i = 0; i < reducedResults.length; i++) {
    reducedResults[i].blurDataUrl = imagesWithBlurDataUrls[i]
  }

  return {
    props: {
      images: reducedResults,
    },
  }
}
