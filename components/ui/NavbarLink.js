import Link from "next/link"

export default function NavbarLink({ children }) {
  return (
    <div className='flex h-10 flex-wrap items-center'>
      <div className='relative'>
        <Link
          href={`/${children}`}
          className='peer/link text-base font-semibold'
        >
          {children}
        </Link>
        <div className='absolute top-8 h-[.2rem] w-full rounded-full peer-hover/link:bg-black' />
      </div>
    </div>
  )
}
