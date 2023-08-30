import Image from 'next/image'
import React from 'react'
import {FaUsers} from "react-icons/fa"

import {AiOutlineShop, AiOutlineShoppingCart} from "react-icons/ai"
import {MdGroups, MdOutlineOndemandVideo, MdOutlineExpandMore} from "react-icons/md"
import {BsStopwatchFill} from "react-icons/bs"
import { useSession } from 'next-auth/react'
import { SideBarItems } from './SideBarItems'



export const SideBar = () => {
  const {data: session, status} = useSession();
  return (
    <div className='hidden lg:inline-flex flex-col py-2 pl-2 max-w-xl lg:min-w-[302px]'>
        <div className='flex items-center space-x-2 py-3 pl-4 hover:bg-gray-200 rounded-l-xl cursor-pointer'>
         {/* src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" */}
            <Image
                              src={session?.user?.image}
                              width={50} 
                              height={50} 
                              alt="Facebook Logo"    
                              className='rounded-full cursor-pointer'
            />
            <p className='hidden sm:inline-flex font-medium'>{session?.user?.name}</p>
        </div>

 {/**we are added props, this props whatever we
     *  will add here that can be used in sidebar item because what 
     * we need the this sidebar item has to be dynamic, so whatever 
     * the icon that we pass and whatever the value that we pass that 
     * has to be rendered directly we don't want a particular FaUsers icon, so
     *  these Fausers we cann pass from the sidebar.tsx as the icon
     * so two props that we are passing, Icon and value */}
    <SideBarItems Icon={FaUsers} value="Friends"/>
    <SideBarItems Icon={MdGroups} value="Groups"/>
    <SideBarItems Icon={AiOutlineShoppingCart} value="MarketPlace"/>
    <SideBarItems Icon={MdOutlineOndemandVideo} value="Watch"/>
    <SideBarItems Icon={BsStopwatchFill} value="Memories"/>
    <SideBarItems Icon={MdOutlineExpandMore} value="See More"/>
    </div>
  )
}
