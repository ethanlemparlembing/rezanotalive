import AppLayout from "../../components/AppLayout"
import Images from "./services/Images"
import cloudinary from "../../utils/cloudinary"
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder"

export default function Photos({ images }) {
  return (
    <AppLayout hero>
      <div className='flex  flex-wrap  gap-5  px-5 pb-10'>
        <button className='texr-sm flex w-24 items-center justify-center rounded-full border-[1.5px] border-solid border-black px-4 py-3 font-semibold capitalize first:bg-black first:text-white hover:bg-black hover:text-white first:hover:bg-slate-800'>
          all
        </button>
        <button className='texr-sm flex w-24 items-center justify-center rounded-full border-[1.5px] border-solid border-black px-4 py-3 font-semibold capitalize first:bg-black first:text-white hover:bg-black hover:text-white first:hover:bg-slate-800'>
          events
        </button>
        <button className='texr-sm flex w-24 items-center justify-center rounded-full border-[1.5px] border-solid border-black px-4 py-3 font-semibold capitalize first:bg-black first:text-white hover:bg-black hover:text-white first:hover:bg-slate-800'>
          human
        </button>
        <button className='texr-sm flex w-24 items-center justify-center rounded-full border-[1.5px] border-solid border-black px-4 py-3 font-semibold capitalize first:bg-black first:text-white hover:bg-black hover:text-white first:hover:bg-slate-800'>
          nature
        </button>
      </div>
      <div className='px-0 sm:px-5'>
        <Images images={images} />
      </div>
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
