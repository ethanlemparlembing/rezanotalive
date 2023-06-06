export default function Footer() {
  return (
    <div className=' bg-black text-white '>
      <div className='mx-auto flex min-h-[calc(100vh-4rem)] w-screen max-w-6xl flex-col justify-around px-6 py-5 sm:min-h-fit sm:flex-row sm:justify-between sm:py-10 '>
        <div className='max-w-sm'>
          <div className='divide-y'>
            <div className='space-y-3 pb-4'>
              <h2 className='text-base font-bold'>Rezanotalive</h2>
              <p className='text-sm font-normal'>
                Hello, my name is Petrus Reza Prasetya W and I am a passionate
                photographer and web developer. I have always been fascinated by
                the power of visual storytelling and love capturing moments that
                tell a unique story.
              </p>
            </div>
            <h3 className='pt-3 text-base font-normal'>
              Created with 💙 by{" "}
              <a href=''>
                <b>Rezanotalive</b>
              </a>
            </h3>
          </div>
        </div>
        <div className=' flex flex-col gap-3'>
          <h2 className='text-base font-bold'>Sitemap</h2>
          <ul className='space-y-1'>
            <li>
              <a href='' className='text-base font-semibold hover:underline'>
                About
              </a>
            </li>
            <li>
              <a href='' className='text-base font-semibold hover:underline'>
                Photos
              </a>
            </li>
            <li>
              <a href='' className='text-base font-semibold hover:underline'>
                Projects
              </a>
            </li>
          </ul>
        </div>
        <div className='space-y-3'>
          <h2 className='font-bold'>Contact</h2>
          <div className='flex flex-col gap-1'>
            <div className='text-base font-semibold'>
              Email:{" "}
              <a href='mailto:hai.rezaprasetya@gmail.com'>
                hai.rezaprasetya@gmail.com
              </a>
            </div>
            <div className='text-base font-semibold'>
              Phone: <a href=''>+62 6969 6969</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
