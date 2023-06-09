import Image from "next/image"
import Masonry from "react-masonry-css"

export default function Images({ images }) {
  const columnsObj = {
    default: 4,
    1100: 3,
    700: 2,
    500: 1,
  }

  return (
    <>
      {/* {console.log(Object.keys(usersDomNodes))} */}
      <Masonry
        breakpointCols={columnsObj}
        className='-ml-5 flex w-auto '
        columnClassName='pl-5 bg-clip-padding'
      >
        {images?.map(({ id, public_id }) => (
          <div
            key={id}
            className='  mb-5 h-auto max-w-full break-before-avoid will-change-auto'
          >
            <Image
              src={`https://res.cloudinary.com/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload/c_scale,w_720/${public_id}.jpg`}
              width={720}
              height={480}
              // fill
              priority
              sizes='(max-width: 640px) 100vw,
          (max-width: 1280px) 50vw,
          (max-width: 1536px) 33vw,
          25vw'
              alt='eek'
              className=' transform rounded-lg object-cover object-center brightness-90 transition will-change-auto hover:brightness-110'
            />
          </div>
        ))}
      </Masonry>
    </>
  )
}
