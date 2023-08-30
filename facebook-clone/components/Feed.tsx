import React from 'react'
import { CreatePost } from './CreatePost'
import { Posts } from './Posts'

export const Feed = () => {
  return (
    <div className="flex-grow h-screen pt-6 mr-6 overflow-y-auto no-scrollbar"> {/*flex grow to use maximum information, maximum space available, hscreen for take all screen all place available*/}
    <div className="mx-auto max-w-md md:max-w-xl lg:max-w-2xl">
      {/* Create Box */}
      <CreatePost />
        {/* Posts */}
        <Posts />
    </div>
  </div> 
  )
}
