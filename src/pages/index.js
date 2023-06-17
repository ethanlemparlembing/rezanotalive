import AppLayout from "../../components/AppLayout"
import cloudinary from "../../utils/cloudinary"
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder"
import Images from "./services/Images"

export default function Index({ images }) {
  return (
    <AppLayout>
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
