'use client'

// React Imports
import Image from 'next/image'

const HomeDetail = () => {
  return (
    <>
      <div className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-50 z-10">
        <div className="bg-white w-1/2 mx-auto mt-20 rounded-md p-4">
          <h2 className="text-2xl font-bold text-center">Welcome to my Boilerplate</h2>
          <p className="mt-4 text-center">
            This is a Next.js boilerplate for scalable apps with Tailwind CSS,
            TypeScript, and localization.
          </p>
          <Image
            className="mt-4 mx-auto"
            src={`https://picsum.photos/400/400?random=${Date.now()}`}
            alt="Next.js"
            width={300}
            height={300}
          />
        </div>
      </div>
    </>
  )
}

export default HomeDetail
