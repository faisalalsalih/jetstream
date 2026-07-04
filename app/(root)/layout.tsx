import React from 'react'

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>

        Navbar


        <section className="flex bg-green-500 min-h-screen flex-1 flex-col px-6 sm:px-14 pb-6 max-md:pb-12 pt-28 ">

          <div className="w-full">
            {children}
          </div>

        </section>


      </main>
    </>
  )
}

export default layout
