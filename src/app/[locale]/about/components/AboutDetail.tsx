'use client'

// Next.js Imports
import Image from 'next/image';

const AboutDetail = () => {

    return (
        <>
            <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center">
                <div className="bg-white rounded-lg p-8 w-1/2">
                    <Image src={`https://picsum.photos/400/400?random=${Date.now()}`} alt="dynamic image" className="w-40 h-40 rounded-full mb-4" width={400} height={400} />
                    <h1 className="text-4xl font-bold mb-4">About Me</h1>
                    <p className="text-lg text-gray-600">
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aliquid cumque consectetur ratione. Blanditiis nulla eaque, delectus voluptate fugiat dolor consectetur nisi, adipisci, nesciunt facilis sequi cupiditate quisquam esse laborum aliquid.
                    </p>
                    <p className="text-lg text-gray-600">
                        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Id debitis sed eveniet facilis corporis alias tempora, beatae rerum labore soluta magnam officiis quam autem, delectus fuga quod a, modi distinctio ex consequuntur dolorum. Itaque laborum eius, voluptatibus at, minima quo fugit nemo, error voluptas rem commodi tempore? Maiores, qui at!
                    </p>
                </div>
            </div>
        </>
    )
}

export default AboutDetail
