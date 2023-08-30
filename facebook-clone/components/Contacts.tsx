import { useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export const Contacts: React.FC<any> = ({name, src, status}) => { //injected as properties(pros) : name and src from RightSideBar.tsx
 //status as a input property
  return (
    <div className='flex items-center space-x-2 py-2 pl-1 hover:bg-gray-200 rounded-l-xl
    cursor-pointer relative
    '>
        <Image
        alt='Image'
        src={src}
        height={50}
        width={50}  
        className='rounded-full cursor-pointer'
        />
        <p className='hidden sm:inline-flex text-sm'>{name}</p>
        {status === "Online" && (
        <div className='bg-green-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2'></div>
  )}
          {status === "Offline" && (
        <div className='bg-gray-500 h-4 w-4 rounded-full absolute left-5 bottom-2 border-2'></div>
  )}
        </div>
  )
}
