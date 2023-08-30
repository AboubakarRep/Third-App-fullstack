
import Image from 'next/image'
import React from 'react'
import {BsSearch} from "react-icons/bs"
import {BsFlagFill} from "react-icons/bs"
import {MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md"
import {AiOutlineShoppingCart, AiFillMessage, AiFillBell } from "react-icons/ai"
import {IoGameControllerOutline} from "react-icons/io5"
import {AiFillHome} from "react-icons/ai"
import {CgMenuGridR} from "react-icons/cg"
import { signOut, useSession } from 'next-auth/react'


export const Header = () => {
      //use useSession for get image and user for session of facebook
      const {data: session, status} = useSession();
  return (
    <div className='bg-white flex items-center p-2 shadow-md top-0 sticky z-50 h-16'>
        {/**we have to create in this div the left, right and center side */}
        {/**left side */}
        <div className='flex min-w-fit'>
            <Image
                  src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"
                  height={40}
                  width={40} 
                  alt="Facebook Logo"            
                  />
                  <div className='flex items-center space-x-2 px-2
                  ml-2 rounded-full bg-gray-100 text-gray-500 
                  '>
                    <BsSearch size={20} />
                    <input className='hidden lg:inline-flex bg-transparent focus:outline-none' type="text" placeholder='search Facebook' /> {/**tailwind css is mobile first */}
                  </div>
        </div>
            {/**center part */}
                <div className='flex flex-grow justify-center mx-2'> {/**flex grow because we need the center part to take as much space as possible*/}
                  <div className='flex items-center'>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <AiFillHome className="mx-auto" size={25}/>
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <BsFlagFill className="mx-auto" size={25}/>
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <MdOutlineOndemandVideo className="mx-auto" size={25}/>
                    </div>
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <AiOutlineShoppingCart className="mx-auto" size={25}/>
                    </div> 
                    <div className='flex items-center h-14 px-4 md:px-10 rounded-md md:hover:bg-gray-100 cursor-pointer'>
                        <IoGameControllerOutline className="mx-auto" size={25}/>
                    </div>  
                  </div>
                </div>
                {/**right side */}
                <div className='flex items-center justify-end min-w-fit space-x-2'>
                 {/* src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" */}
                <Image
                  onClick={signOut}
                  className='rounded-full cursor-pointer'
                  src={session?.user?.image} //if session is there the get user and image
                  width={50} 
                  height={50} 
                  alt="Facebook Logo"            
                  />
                  <p className='hidden xl:inline-flex font-semibold text-sm whitespace-nowrap p-3 max-w-xs'>{session?.user?.name?.split(" ") [0]}</p> {/**we added split for take firstname only */}
                  <CgMenuGridR className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/> {/**screen is small in the mobile we don't want thoses icons, hidden is use for that;  lg is when it is large screen , inline flex because we need all icons*/}
                  <AiFillMessage className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/> {/**screen is small in the mobile we don't want thoses icons, hidden is use for that;  lg is when it is large screen , inline flex because we need all icons*/}
                  <AiFillBell className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/> {/**screen is small in the mobile we don't want thoses icons, hidden is use for that;  lg is when it is large screen , inline flex because we need all icons*/}
                  <MdOutlineExpandMore className="hidden lg:inline-flex h-10 w-10 bg-gray-200 text-gray-600 rounded-full p-2 cursor-pointer hover:bg-gray-300" size={20}/> {/**screen is small in the mobile we don't want thoses icons, hidden is use for that;  lg is when it is large screen , inline flex because we need all icons*/}
                </div>
    </div>
  )
}
