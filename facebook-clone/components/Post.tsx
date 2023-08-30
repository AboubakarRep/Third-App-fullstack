import Image from 'next/image'
import React from 'react'
import {FiThumbsUp}  from 'react-icons/fi' 
import {FaRegCommentAlt}  from 'react-icons/fa'
import {RiShareForwardLine}  from 'react-icons/ri'
export const Post: React.FC<any>  = ({post}) => { //get post as a prop, post is in the Posts.tsx
  return (
<div className='flex flex-col' key={post.id}> {/*flex col because it will be in vertical way*/}
    <div className='bg-white mt-6 rounded-md p-4'>
        <div className='flex items-center space-x-2'>
             {/* src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png"  */}
             <img className='rounded-full w-10 h-10 ' 
             src={post.profilePic}
             />
             <div>
            <p className='font-medium '>{post.name}</p> 
            <p className='text-xs text-gray-500'>{/*{new Date().toLocaleString()}*/} {post.timeStamp}</p>  {/**text xs is text should be very small */}
           </div>
        </div>
        <p className='py-4'>{post.post}</p>
        <div>
            {/**if any image is there */}
            {post.image!=null && (   
            <div className='relative h-60 md:96 bg-white'>
                {/*src="https://images.pexels.com/photos/13902112/pexels-photo-13902112.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"*/}
                <Image
                src={post.image}
                alt='Image'
                layout='fill'
                objectFit='cover'
                />
            </div>
            )}
            {/**Footer of our posts */}
            <div className='flex items-center justify-center bg-white p-2'>
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <FiThumbsUp className="h-4"/>
                    <p className='text-xs sm:text-base'>Like</p>
                </div>
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <FaRegCommentAlt className="h-4"/>
                    <p className='text-xs sm:text-base'>Comment</p>
                </div>
                <div className='flex items-center space-x-1 hover:bg-gray-100 flex-grow justify-center p-2 rounded-xl cursor-pointer'>
                    <RiShareForwardLine className="h-4"/>
                    <p className='text-xs sm:text-base'>Share</p>
                </div>
            </div>
        </div>
    </div>
</div> 
  )
}
