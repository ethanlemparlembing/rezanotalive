import Link from "next/link"

export default function Navbar({ children, onClose }) {
  return (
    <nav className='fixed left-0 top-0 z-10 h-16 w-full bg-white'>
      <div className='mx-auto flex h-full max-w-6xl items-center px-5'>
        <div className='flex h-full w-full flex-row items-center justify-between'>
          <div className='container px-0 sm:px-5'>
            <Link href='/' className='text-lg font-bold'>
              Rezanotalive
            </Link>
          </div>
          <div className='hidden gap-3 px-0 sm:flex sm:px-5'>{children}</div>
          <div className='px-0 sm:hidden sm:px-5'>
            <button onClick={onClose} className='text-base font-semibold'>
              Menu
            </button>
          </div>
        </div>
      </div>
    </nav>
  )
}
