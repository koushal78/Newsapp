import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div className='h-[calc(100vh-60px)] w-screen flex flex-col justify-center items-center bg-slate-900'>
        <div className='text-center '>
        <h1 className='text-3xl font-bold  text-center  bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 bg-clip-text text-transparent  md:text-5xl  '>
            Stay Informed, Stay Ahead
        </h1>
           <p className='text-gray-400 py-8 text-2xl px-12' >Experience news like never before with personalized feeds, real-time updates</p>
        </div>
        <Link to="/News">
        
        <button className='text-xl  rounded-full px-6 py-3 border-2 font-semibold text-blue-600 border-blue-600 shadow-[0_0_15px_rgba(34,211,238,0.5)] cursor-pointer hover:scale-105 duration-500 '>Get Started</button>
        </Link>
    </div>
  )
}

export default Home