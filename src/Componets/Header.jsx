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
            <CiBellOn  className='text-[1.5rem]'  />
            </span>
        </main>
        <main className='fixed w-full z-50 py-2 bg-white shadow-md border bottom-0' >
            <div className="flex justify-between px-[1rem] capitalize">
                <span>
<span className='flex justify-center'>

            < RiHome2Line className='text-[1.5rem] ' />
</span>
            <h2 >home</h2>
                </span>

                <span>
<span className='flex justify-center'>

<BsPatchPlus   className='text-[1.5rem]'  />
</span>
            <h2 >upload item</h2>
                </span>


                <span>
<span className='flex justify-center'>

<PiChatCircleTextLight  className='text-[1.5rem]'  />
</span>
            <h2 >message</h2>
                </span>

                <span>
<span className='flex justify-center'>

< HiOutlineUser  className='text-[1.5rem]'  />
</span>
            <h2 >profile</h2>
                </span>
         
           
            </div>
        </main>
    </>
  )
}

export default Header