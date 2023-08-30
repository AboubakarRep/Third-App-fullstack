import React, { useEffect } from 'react'
import { Post } from './Post'
import { useDispatch, useSelector } from 'react-redux'
import { addAllPost, selectPost } from '@/app/features/postSlice';
import axios from 'axios';

export const Posts = () => {
  const FACEBOOK_CLONE_ENDPOINT = "http://localhost:8080/api/v1/post"
  //we are using useeffect hook to get all the post for the fist time
  useEffect(() =>{
    const fetchData = () => {
      const response
      = axios.get(FACEBOOK_CLONE_ENDPOINT)
      .then((response) => {
        //response that we are getting we want to dispatch that
        dispatch(addAllPost(response.data)) //we are getting list of post, whatever data we are getting for the first time we are dispatching all those data to my state  
      })
    }
    fetchData()
  }, []) //we will added empty array, there is an empty dependency
  //for post anything
  const dispatch = useDispatch();
  const posts = useSelector(selectPost) //using useselector hook we are selecting the state that we have define in the postSlice.tsx
  // return (
  //   <Post/>
  // )

   return (
    <div>
      {posts.map((post:any) => ( //we are just mapping, we are just looping all posts available and we are creating this Post : "<Post/>"
    <Post post={post} key={post.id}/> //whatever the data is available in the posts:"posts" in the state useSelector that only we are going to get so whatever we added that only will get
    ))}
    </div>
  )
}
