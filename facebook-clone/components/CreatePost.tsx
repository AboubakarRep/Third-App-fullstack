
import { signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React, { useRef, useState } from 'react'
import {MdOutlineVideoCall}  from 'react-icons/md'
import {HiPhoto}  from 'react-icons/hi2'
import {BsEmojiSmile}  from 'react-icons/bs'
import {AiFillDelete}  from 'react-icons/ai'
import axios from 'axios'
import { error } from 'console'
import { useDispatch } from 'react-redux'
import { addPost } from '@/app/features/postSlice'


export const CreatePost = () => {
  //to put data for post
  //we need to dispatch the data with the actions, dispatch data with reducer addpost
  const dispatch = useDispatch() 
   //url
    const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post"
    const {data: session, status} = useSession();
    const inputRef = useRef(null) //for whatever you post (textà
    const hiddenFileInput = useRef(null) //for whatever you post (photos ...)
    const [imageToPost, setImageToPost] = useState(null)
    const handleClick = () => {
      hiddenFileInput.current.click();
    }
    const addImageToPost = (e) => {
      const reader = new FileReader();
      //whatever the file that we have selected that particular file is there in my image to post
      if(e.target.files[0]){
        reader.readAsDataURL(e.target.files[0])
        reader.onload = (e) => {
          setImageToPost(e.target?.result) 
        }
      }
    }

    //remove Image
    const removeImage = () => {
      setImageToPost(null)
    }

    //for submit and post
    const handleSubmit = (e) => {
      e.preventDefault() //we don't want to refresh the page
      if (!inputRef.current.value) return //we don't want to do anything
      const formData = new FormData()
      //adding all fields in this formdata
      formData.append("file", imageToPost); //jey is file and value is imageToPost
      //get file in backend as a request parameter
      formData.append("post", inputRef.current.value)
      formData.append("name", session?.user?.name)
      formData.append("email", session?.user?.email)
      formData.append("profilePic", session?.user?.image)
      
      //we use axios library and do dot post
      axios.post(FACEBOOK_CLONE_ENDPOINT, formData,{ //POST TO THIS ENDPOINT WE WILL PASSING THE FORMDATA
        headers: {Accept: "application/json"}
      })
      //returning the promise 
      //when we get the response 
      .then((response) => { //when we get the promise back, we can do
        inputRef.current.value = ""
        //dispatch data
        dispatch(addPost(response.data)) //response dot data is our action
        //then reme the image
        removeImage()
      })
      //and if there is the erro we can catch this error
      .catch((error) => {
        console.log(error)
      })
    }
  return (
    <div className='bg-white rounded-md shadow-md text-gray-500 p-2'>
        <div className='flex p-4 space-x-2 items-center'>
        {/**we want images and inputs fields */}
          {/* src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/800px-2021_Facebook_icon.svg.png" */}
        <Image
                  className='rounded-full cursor-pointer'
                  src={session?.user?.image} //if session is there the get user and image
                  alt="Facebook Logo"   
                  width={50}  
                  height={50}      
                  />
                  <form className='flex flex-1'>
                    <input type="text" placeholder={`What's on your mind, ${session?.user?.name}`}
                    className='rounded-full h-12 flex-grow focus:outline-none font-medium bg-gray-100 px-4'  
                    ref={inputRef}
                    />
                    <button 
                    onClick={handleSubmit}
                    className='hidden'></button> {/**hidden because we don't want to display this button whenever we hit enter we should be able to submit the data  */}
                  </form>
        </div>
        {imageToPost && //when there is image to post, whenever the image is set at the time we want to have one div which displays the image
        <div 
        onClick={removeImage}
        className='flex items-center px-4 py-2 space-x-4 filter
        hover:brightness-110
        transition duration-150 cursor-pointer  
        '>
          <img src={imageToPost} alt='Image To Post' 
          className='h-10 object-contain' 
          />
        {/*buuton for delete*/}
        < AiFillDelete size={22} className='h-8 hover:text-red-500'/>
        </div>
        }
        <div className='flex justify-evenly py-2'>
            <div className='flex item  p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                {/**we need to have somes icons */}
                <MdOutlineVideoCall size={22} className='text-red-500'/>
                <p className='font-semibold text-gray-600'>Live Video</p>
            </div>
            <div
             onClick={handleClick}
             className='flex item  p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                {/**we need to have somes icons */}
                <HiPhoto size={22} className='text-green-500'/>
                <p className='font-semibold text-gray-600'>Photo/Video</p>
                <input 
                onChange={addImageToPost} //whenever there is change in this input field that particular image will be stored on state
                ref={hiddenFileInput} type="file" accept="image/*" hidden/> {/**this input allow all images */}
            </div>
            <div className='flex item  p-1 space-x-1 flex-grow justify-center hover:bg-gray-100 rounded-md hover:cursor-pointer'>
                {/**we need to have somes icons */}
                <BsEmojiSmile size={22} className='text-yellow-500'/>
                <p className='font-semibold text-gray-600'>Feeling/Activity</p>
            </div>
        </div>
    </div>
  )
}





