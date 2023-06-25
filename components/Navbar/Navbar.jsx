export default function Navbar() {
  return (
    <div className='sticky inset-0 z-10 h-16 w-full border-b-[1.5px] border-black bg-white'>
      <div className='mx-auto flex h-full w-full max-w-6xl flex-row items-center justify-between p-5'>
        <div className=''>
          <a href='' className='text-base font-bold'>
            Rezanotalive
          </a>
        </div>
        <div className='hidden gap-5 sm:flex'>
          <a href='' className='text-base font-semibold'>
            link 1
          </a>
          <a href='' className='text-base font-semibold'>
            link 2
          </a>
          <a href='' className='text-base font-semibold'>
            link 3
          </a>
        </div>
        <div className='flex gap-5 sm:hidden'>
          <a href='' className='text-base font-semibold'>
            Menu
          </a>
        </div>
      </div>
    </div>
  )
}
