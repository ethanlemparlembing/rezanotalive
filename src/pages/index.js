import dynamic from "next/dynamic"
import AppLayout from "../../components/AppLayout"
import cloudinary from "../../utils/cloudinary"
import getBase64ImageUrl from "../../utils/generateBlurPlaceholder"
import { useCallback, useEffect, useState } from "react"
import InfiniteScroll from "react-infinite-scroll-component"

const WithCustomLoading = dynamic(() => import("./services/Images"), {
  loading: () => <p>Loading..{console.log("loading")} </p>,
})

export default function Index({ images }) {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [hasMore, setHasMore] = useState(true)
  const [page, setPage] = useState(0)

  const fetchData = useCallback(async () => {
    setIsLoading(true)
    setError(null)

    if (items.length >= 71) {
      setHasMore(false)
      return
    }

    const groupedArray = []
    for (let i = 0; i < images.length; i += 12) {
      groupedArray.push(images.slice(i, i + 12))
    }

    try {
      setItems((prevItems) => [...prevItems, ...groupedArray[page]])
      setPage((prevPage) => prevPage + 1)
    } catch (error) {
      setError(error)
    } finally {
      setIsLoading(false)
    }
  }, [images, items.length, page])

  const handleScroll = useCallback(() => {
    if (
      window.innerHeight + document.documentElement.scrollTop !==
        document.documentElement.offsetHeight ||
      isLoading
    ) {
      return
    }
    fetchData()
  }, [fetchData, isLoading])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [handleScroll, isLoading])

  // Rest of your code...

  return (
    <AppLayout>
      <InfiniteScroll
        dataLength={items.length}
        next={fetchData}
        hasMore={hasMore} // Replace with a condition based on your data source
        // loader={<p>Loading...</p>}
        // endMessage={<p>No more data to load.</p>}
      >
        <WithCustomLoading images={items} />
      </InfiniteScroll>
      {error && <p>Error: {error.message}</p>}
      {/* <Observer /> */}
    </AppLayout>
  )
}

export const getStaticProps = async () => {
  const { resources } = await cloudinary.v2.search
    .expression(`folder:${process.env.CLOUDINARY_FOLDER}/*`)
    .sort_by("public_id", "desc")
    .max_results(500)
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
