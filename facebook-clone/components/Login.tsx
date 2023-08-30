
import { signIn, signOut, useSession } from 'next-auth/react'
import Image from 'next/image'
import React from 'react'

export const Login = () => {
    const {status} = useSession();
  return (
    <div className="flex flex-col items-center mt-8">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png"
        width={50} 
        height={50} 
        alt='fb-logo'
      />

      {status ==="authenticated" ? (
      <a
        onClick={signOut}
        className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">
        LogOut with Facebook
      </a>
       ) : (
        <a
        onClick={signIn}
        className="p-4 mt-6 cursor-pointer bg-blue-500 rounded-full text-white">
        Login with Facebook
      </a>
      )}

    </div>
    // <div className="flex flex-col items-center mx-auto">
    //   <Image
    //     src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
    //     height={240}
    //     width={240}
    //     alt='FB-logo'
    //   />
    //   <a
    //     onClick={signIn}
    //     className="px-20 py-4 z-10 text-2xl cursor-pointer -mt-16 bg-blue-500 rounded-md text-white">
    //     Login
    //   </a>
    // </div>
  )
}
