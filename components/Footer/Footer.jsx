import Accordion from "../Accordion/Accordion"
import Button from "../Button/Button"

export default function Footer() {
  const accordionItems = [
    {
      title: "Item 1",
      content: [
        "Content for item 1 part 1",
        "Content for item 1 part 2",
        "Content for item 1 part 3",
      ],
    },
    {
      title: "Item 2",
      content: [
        "Content for item 2 part 1",
        "Content for item 2 part 2",
        "Content for item 2 part 3",
      ],
    },
    {
      title: "Item 3",
      content: [
        "Content for item 3 part 1",
        "Content for item 3 part 2",
        "Content for item 3 part 3",
      ],
    },
  ]
  return (
    <div className='flex min-h-[calc(100vh-4rem)] items-center bg-black text-white'>
      <div className='mx-auto flex w-full max-w-6xl flex-col gap-16 p-5 sm:gap-20'>
        <div className='flex flex-col gap-3 sm:flex-row sm:gap-10'>
          <div className='container mx-auto flex flex-col gap-5 sm:gap-10'>
            <h2 className='max-w-md text-lg  font-bold md:text-sm lg:text-2xl'>
              Let&#39;s collaborate! Send me a message, and together, we can
              create something amazing.
            </h2>
            <Button color='secondary' size='full'>
              get in touch
            </Button>
          </div>
          <div className='container flex flex-col gap-10 sm:flex-row'>
            <div className='container mx-auto flex max-w-full flex-col justify-between sm:hidden'>
              <Accordion items={accordionItems} />
            </div>
            <div className='container mx-auto flex max-w-full flex-row justify-between sm:hidden'>
              <div className='flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='h-7 w-7'
                  viewBox='0 0 16 16'
                >
                  <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
                </svg>
              </div>
              <div className='flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='h-7 w-7'
                  viewBox='0 0 16 16'
                >
                  <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
                </svg>
              </div>
              <div className='flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='h-7 w-7'
                  viewBox='0 0 16 16'
                >
                  <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
                </svg>
              </div>
              <div className='flex items-center justify-center'>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  fill='currentColor'
                  className='h-7 w-7'
                  viewBox='0 0 16 16'
                >
                  <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
                </svg>
              </div>
            </div>
            <div className=' mx-auto hidden max-w-full flex-col gap-2 sm:flex'>
              <h2 className='text-lg font-bold uppercase text-white/50 md:text-sm lg:text-xs'>
                sitemap
              </h2>
              <div className='flex flex-col gap-3'>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  About
                </a>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Photos
                </a>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Project
                </a>
              </div>
            </div>
            <div className=' mx-auto hidden max-w-full flex-col gap-2 sm:flex'>
              <h2 className='text-lg font-bold uppercase text-white/50 md:text-sm lg:text-xs'>
                Photos
              </h2>
              <div className='flex flex-col gap-3'>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Street
                </a>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  People
                </a>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Nature
                </a>
              </div>
            </div>
            <div className=' mx-auto hidden max-w-full flex-col gap-2 sm:flex'>
              <h2 className='text-lg font-bold uppercase text-white/50 md:text-sm lg:text-xs'>
                Projects
              </h2>
              <div className='flex flex-col gap-3'>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Link 1
                </a>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Link 2
                </a>
                <a
                  href=''
                  className='text-lg font-semibold  capitalize hover:underline md:text-sm lg:text-lg'
                >
                  Link 3
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className='flex items-center justify-between sm:border-y-2 sm:py-5'>
          <div className='container'>
            <h2 className='text-center text-sm font-medium capitalize sm:text-start'>
              Created with 💙 by <b> rezanotalive</b>
            </h2>
          </div>
          <div className='hidden gap-5 sm:flex'>
            <div className='text-wh flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='h-7 w-7'
                viewBox='0 0 16 16'
              >
                <path d='M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z' />
              </svg>
            </div>
            <div className='flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='h-7 w-7'
                viewBox='0 0 16 16'
              >
                <path d='M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z' />
              </svg>
            </div>
            <div className='flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='h-7 w-7'
                viewBox='0 0 16 16'
              >
                <path d='M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z' />
              </svg>
            </div>
            <div className='flex items-center justify-center'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='currentColor'
                className='h-7 w-7'
                viewBox='0 0 16 16'
              >
                <path d='M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z' />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
