import AppLayout from "../../components/AppLayout"

export default function Test() {
  return (
    <AppLayout hero>
      <div className='space-y-3'>
        <div className='space-y-3'>
          <div className='flex max-w-full justify-between overflow-hidden rounded-lg border shadow'>
            <div className='w-1/3 px-10 py-5'>
              <h2 className='font-mono text-2xl font-semibold uppercase'>01</h2>
            </div>
            <div className='w-2/3 p-5'>
              <h2 className='font-mono text-2xl font-semibold uppercase'>
                Heading
              </h2>
            </div>
          </div>
          <div className='flex max-w-full justify-end overflow-hidden rounded-lg border shadow'>
            <div className='w-full p-5 sm:w-2/3'>
              <p className='font-sans text-base font-normal leading-relaxed'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
                omnis natus debitis exercitationem officiis blanditiis saepe
                nobis pariatur quia et nesciunt praesentium dolorum accusamus,
                ipsa voluptatum iusto explicabo modi maxime?
              </p>
            </div>
          </div>
        </div>
        <div className='space-y-3'>
          <div className='flex max-w-full justify-between overflow-hidden rounded-lg border shadow'>
            <div className='w-1/3 px-10 py-5'>
              <h2 className='font-mono text-2xl font-semibold uppercase'>02</h2>
            </div>
            <div className='w-2/3 p-5'>
              <h2 className='font-mono text-2xl font-semibold uppercase'>
                Heading
              </h2>
            </div>
          </div>
          <div className='flex max-w-full justify-end overflow-hidden rounded-lg border shadow'>
            <div className='w-full p-5 sm:w-2/3'>
              <div className='flex flex-col divide-y-2 border-b-2'>
                <div className='flex flex-col py-5'>
                  <div className='flex w-full justify-between'>
                    <h2 className='font-sans text-lg font-semibold uppercase'>
                      events
                    </h2>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 15.75l7.5-7.5 7.5 7.5'
                      />
                    </svg>
                  </div>
                  <div className='mt-3'>
                    <p className='font-sans text-base font-normal leading-relaxed'>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Voluptate illum quasi dolores sint, maiores in deserunt,
                      nisi ipsum maxime reprehenderit quia, tempora qui ullam
                      distinctio ea vitae temporibus beatae ipsam.
                    </p>
                    <button className='mt-3 hover:underline'>
                      See more...
                    </button>
                  </div>
                </div>
                <div className='flex flex-col py-5'>
                  <div className='flex w-full justify-between'>
                    <h2 className='font-sans text-lg font-semibold uppercase'>
                      nature
                    </h2>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 15.75l7.5-7.5 7.5 7.5'
                      />
                    </svg>
                  </div>
                </div>
                <div className='flex flex-col py-5'>
                  <div className='flex w-full justify-between'>
                    <h2 className='font-sans text-lg font-semibold uppercase'>
                      people
                    </h2>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      strokeWidth='1.5'
                      stroke='currentColor'
                      className='h-6 w-6'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        d='M4.5 15.75l7.5-7.5 7.5 7.5'
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </AppLayout>
  )
}
