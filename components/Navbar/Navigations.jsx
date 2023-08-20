import Link from "next/link"

const textData = [
  {
    id: 1,
    href: "#",
    text: "blog",
  },
  {
    id: 2,
    href: "#",
    text: "photos",
  },
  {
    id: 3,
    href: "#",
    text: "projects",
  },
]

const NavItems = ({ children, href }) => {
  return (
    <div className='relative'>
      <Link
        href={href}
        className='peer text-base font-semibold capitalize'
        onClick={handleClick}
      >
        {children}
      </Link>
      <div
        className={`absolute h-[2px]   bg-black transition-all ease-in peer-hover:w-full`}
      />
    </div>
  )
}

export default function Navigations() {
  return (
    <nav className='h-fit border-b-[1.5px] border-black'>
      <div className='mx-auto max-w-6xl p-5'>
        <div className='flex items-center justify-between'>
          <div>
            <Link href='/' className='text-base font-bold'>
              Rezanotalive
            </Link>
          </div>
          <div>
            <div className='hidden gap-5 sm:flex'>
              {textData.map(({ id, href, text }) => (
                <NavItems key={id} href={href}>
                  {text}
                </NavItems>
              ))}
            </div>
            <div className='sm:hidden'>
              <div className='relative'>
                <a href='' className='peer text-base font-semibold capitalize'>
                  Menu
                </a>
                <div className='absolute h-[2px] w-0 bg-black transition-all ease-in peer-hover:w-full' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  )
}
