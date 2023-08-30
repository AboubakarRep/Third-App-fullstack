import React from 'react'
import { FaUsers } from 'react-icons/fa'

export const SideBarItems: React.FC<any>  = ({Icon, value}) => {
  return (
    <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
     {/** FaUsers changed by icon */}
   < Icon className="h-8 w-8 text-blue-500" size={25}/>
    <p className='hidden sm:inline-flex font-medium'>{/*Users changed by value*/} {value} </p>
    </div>
  )
}
