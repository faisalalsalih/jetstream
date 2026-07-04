import Navbar from '@/components/shared/Navbar'
import Sidebar from '@/components/shared/Sidebar'
import React from 'react'

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <main>

        <Navbar />


        <section className="flex min-h-screen flex-1 flex-col px-6 sm:px-14 pb-6 max-md:pb-12 pt-28 ">

          <Sidebar />

          <div className="w-full">
            {children}
          </div>

        </section>


      </main>
    </>
  )
}

export default RootLayout
