import React from 'react'
import {RiVideoAddFill}  from 'react-icons/ri'
import {BsSearch}  from 'react-icons/bs'
import {TfiMoreAlt}  from 'react-icons/tfi'
import { Contacts } from './Contacts'
import { useSession } from 'next-auth/react'
export const RightSideBar = () => {
  return (
    <div className='hidden md:inline-flex flex-col pt-4 max-w-xl md:min-w-[200px] lg:min-w-[250px]'>
        <div className='flex items-center text-gray-500'>
            <p className='flex text-lg font-semibold flex-grow'>Contacts</p>
            <div className='flex space-x-1 px-2'>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    {/**contains icons */}
                    <RiVideoAddFill/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    {/**contains icons */}
                    <BsSearch/>
                </div>
                <div className='rounded-full p-2 hover:bg-gray-200 cursor-pointer'>
                    {/**contains icons */}
                    <TfiMoreAlt/>
                </div>
            </div>
        </div>
        <Contacts status="Online" src="https://images.pexels.com/photos/12499887/pexels-photo-12499887.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Aboubakar Diaby" /> 

        <Contacts status="Offline" src="https://images.pexels.com/photos/12548443/pexels-photo-12548443.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Amadou Fofana"/>

        <Contacts status="Online" src="https://images.pexels.com/photos/9983638/pexels-photo-9983638.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Ange Agnero"/> 

        <Contacts status="Offline" src="https://images.pexels.com/photos/10181182/pexels-photo-10181182.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" name="Issa Coulibaly"/> 
    </div>
  )
}
