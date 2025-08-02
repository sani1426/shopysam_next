import Image from 'next/image'
import React from 'react'
import { IoClose } from 'react-icons/io5'

const ViewImage = ({url,close}) => {
  return (
    <div className='fixed w-full max-h-screen top-0 bottom-0 right-0 left-0 bg-neutral-900 bg-opacity-70 flex justify-center items-center z-50 p-4'>
        <div className='relative w-full max-w-md max-h-[80vh] p-4 bg-white'>
            <button onClick={close} className='w-fit ml-auto block'>
                <IoClose size={25}/>
            </button>
            <Image
                src={url}
                alt='full screen'
                fill
                priority
                className=' object-scale-down'
            />
        </div>
    </div>
  )
}

export default ViewImage
