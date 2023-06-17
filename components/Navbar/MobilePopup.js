export default function MobilePopup({ open, onClose, children }) {
  if (!open) return null

  return (
    <nav className='fixed inset-0 z-50 h-screen w-full overflow-hidden bg-black sm:hidden '>
      <div className='container flex h-16 items-center justify-end  px-5'>
        <div className=' border-b-2 py-2'>
          <button onClick={onClose} className='font-semibold text-white'>
            Close
          </button>
        </div>
      </div>
      <div className='container h-[calc(100vh-4rem)]  '>
        <div className='flex h-full items-center'>
          <div className=' container p-5'>{children}</div>
        </div>
      </div>
    </nav>
  )
}
