import React, { useState } from 'react'
import { IoReorderThreeOutline } from "react-icons/io5";



const navItems = ["Home", "Business", "Politics", "Sports"]

const Nav = () => {
    const [isvisible,setIsvisible] = useState(false)
    console.log(isvisible)
    
  return (
    <div >
        <div className='py-4 bg-blue-900  '>
            <div className='flex justify-between px-4 md:max-w-[80%] mx-auto'>

            <h1 className=' text-xl font-semibold text-white '>Daily News</h1>
            <IoReorderThreeOutline className='text-white text-4xl cursor-pointer md:hidden'
            onClick={()=>setIsvisible(!isvisible)}
            />

               <div className='hidden  md:block'>
                 <ul className='flex gap-8 text-md font-semibold text-blue-300 cursor-pointer '>
                     {
                         navItems.map((e,idx)=>(
                           <li key={idx} >{e}</li>
                         ))
                     }
                 </ul>
               </div>
            </div>
        </div>

        {/* navbar for the mobile device */}
        <div className={`w-full bg-blue-900 ${isvisible ? 'translate-x-[0%]  h-full duration-200': 'translate-x-[100%] h-0  duration-200'}  md:hidden `}>
           <ul className={`flex flex-col gap-4 items-center py-4  `} >
           { navItems.map((items,idx)=>(
              <li key={idx} 
              className='text-white text-xl hover:bg-blue-400 duration-300 py-2 w-full text-center cursor-pointer hover:scale-105'
              >
                {items}
              </li>
           ))
        }
           </ul>
        </div>

          {/* 
          navbar for big device 
          
          */}

    </div>
  )
}

export default Nav