import React from 'react';
import { FaBell } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TiHome } from "react-icons/ti";
import { HiOutlineUser } from "react-icons/hi2";
import { RxDashboard } from "react-icons/rx";
import { BsPatchPlus } from "react-icons/bs";
import { SiCoop } from "react-icons/si";
import { CiBellOn } from "react-icons/ci";
import { PiChatCircleTextLight } from "react-icons/pi";
import { RiHome2Line } from "react-icons/ri";
import { Link } from 'react-router-dom';


const Header = () => {
  return (
    <>
        


        <main className='fixed w-full py-2 z-50 flex justify-between px-[1rem] bg-white border shadow-lg' >
            <div className="logo flex">
            <SiCoop  className='text-[2rem] text-orange-600'/>
            <h2 className='text-[1.2rem] font-bold'>u-hir</h2>
            </div>
            <span className='flex space-x-6'>
            <  CiSearch  className='text-[1.5rem]'  />

            <span className='relative'  >
              
            <CiBellOn  className='text-[1.8rem] 
              
               cursor-pointer'     />
            
            <span className='bg-red-500 top-0 pl-[8px] pt-[.5px] h-6 w-6 absolute rounded-full
             left-[-.8rem] text-white text-[14px]'>
             2
            </span>
            </span>
           
            </span>
        </main>
        <main className='fixed w-full z-50 py-2 bg-white shadow-md border bottom-0' >
            <div className="flex justify-between px-[1rem] capitalize">
                <span>
                    <Link to = '/'>
<span className='flex justify-center'>

            < RiHome2Line className='text-[1.5rem] ' />
</span>
            <h2 >home</h2>
            </Link>
                </span>

                <span>
                    <Link to = '/upload'>
<span className='flex justify-center'>

<BsPatchPlus   className='text-[1.5rem]'  />
</span>
            <h2 >upload item</h2>
                </Link>
                </span>

                <span>
                    <Link to ='/chat'>
<span className='flex justify-center'>
<span className='relative'  >
              
              <PiChatCircleTextLight  className='text-[1.5rem] 
                
                 cursor-pointer'     />
              
              <span className='bg-red-500 top-0 pl-[8px] pt-[.5px] h-6 w-6 absolute rounded-full
               left-[-.8rem] text-white text-[14px]'>
               4
              </span>
              </span>


</span>
            <h2 >message</h2>
                </Link>
                </span>
                <span>
    <Link to ='/profile'>
<span className='flex justify-center'>

< HiOutlineUser  className='text-[1.5rem]'  />
</span>
            <h2 >profile</h2>
            </Link>
                </span>
         
           
            </div>
        </main>
    </>
  )
}

export default Header