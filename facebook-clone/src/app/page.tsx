"use client"
import Head from 'next/head'
import Image from 'next/image'
import { Header } from '../../components/Header'
import { getServerSession } from 'next-auth'
import { authOptions } from '../../pages/api/auth/[...nextauth]';
import { Login } from '../../components/Login'
import { useSession } from 'next-auth/react'
import { Feed } from '../../components/Feed'
import { SideBar } from '../../components/SideBar'
import { RightSideBar } from '../../components/RightSideBar'


export default function Home() {
  const {status, data: session} = useSession()
  //if we have session, if we are logged in
  //if there is no session, return login page
  if (status !== "authenticated") return <Login/>
  return (
    <main >
      <div>
        <Head>
          <title>Facebook clone made by Aboubakar</title>
          <meta name='Facebook clone ' content='Facebook Clone Make by Aboubakar '/>
        </Head>
        <Header/>
        <main className='flex bg-gray-100'>
          {/**left SideBar */}
          <SideBar/>
          {/**Feed:("in french is 'flux' ") which will contain your (Create Posts and all the Posts) */}
          <Feed/>
          {/**Right SideBar */}
          <RightSideBar/>
        </main>
      </div>
    </main>
    
  )
}

//we define server side rendering for session provider
//when we start our application if we have session available then we can go to the application
//but if you don't have session available then redirect back to the authentication page where we will do the facebook
//authentication and from the facebook authentication once we get session back directly inject yhe session

//we want to get the session directly when the page loads itself we want the session directly from the server
//when the page is loading, we don't want that page is loaded and then the session is loaded

//server side rendering


async function getServerSideProps(context:any) {
  //we have to use getsession
  const session = await getServerSession(context.req, context.res, authOptions)
  // const session = await getSession(context)
  //once we get the session we will return the props
  // return {
  //   props: {session}
  // }


  // if (!session) {
  //   return {
  //     redirect: {
  //       destination: '/',
  //       permanent: false,
  //     },
  //   }
  // }

  return {
    props: {
      session,
    },
  }
}
