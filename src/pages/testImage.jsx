import { MasonryGrid } from "@egjs/react-grid"
import Image from "next/image"
import cloudinary from "../../utils/cloudinary"
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder"

export default function testImage({ images }) {
  return (
    <MasonryGrid
      className='container mx-auto max-w-6xl'
      gap={42}
      defaultDirection={"end"}
      align={"center"}
      column={4}
      columnSize={0}
      columnSizeRatio={0}
      maxStretchColumnSize={400}
      onRenderComplete={(e) => {
        console.log(e)
      }}
    >
      {images.map(({ id, src, public_id, height, width }) => (
        <div className='h-fit w-56 will-change-auto' key={id}>
          <Image
            src={src}
            height={height}
            width={width}
            alt={public_id}
            className='object-contain'
          />
        </div>
      ))}
    </MasonryGrid>
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
