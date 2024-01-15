import React from 'react'
import { SiCoop } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { IoLogoTwitter } from "react-icons/io5";
import { FaInstagramSquare } from "react-icons/fa";
const Footer = () => {
  return (
    <div>
        <main className='bg-slate-800 px-[1rem]  min-h-[50vh] w-full'>

        

            
    <footer>
    <div className="logo flex pt-[1rem]">
            <SiCoop  className='text-[2rem] text-orange-600'/>
            <h2 className='text-[1.2rem] text-white font-bold'>u-hir</h2>
            </div>



    <div class="footer-container">
        <div class="footer-menu">
            <ul className='text-slate-300 mt-[2rem]'>
                <li className='mb-2'>Home</li>
                <li className='mb-2'>Upload iem</li>
                <li className='mb-2'> Message</li>
                <li className='mb-2'>Profile</li>
            </ul>
        </div>

    </div>
        <div className="contacts mt-[2rem]">
        <div class="footer-contacts text-slate-300 text-[15px]">
            <p className=' py-2 b mb-4'>1717 Harrison St, San Francisco, CA 941, United States</p>
            <p>Email: quickeat@mail.net</p>
            <p>Phone: +1 425 326 16 27</p>

            <span className='flex py-[1rem] b pb-[2rem]'>
            < FaFacebook  className=' text-[30px] text-slate-400 mr-4'/>
            < IoLogoTwitter  className=' text-[30px] mr-4 text-slate-400' />
            <FaInstagramSquare  className=' text-[30px] mr-4 text-slate-400' />
            </span>
        </div>
   
    <div class="footer-policy text-slate-300 pb-[6rem] mt-4">
        <p><a href="#">Privacy Policy</a> | <a href="#">Terms & Services</a></p>
      
        <p>&copy; 2022. Quickeat. All rights reserved.</p>
 
    </div>
   
    </div>
</footer>


        </main>
    </div>
  )
}

export default Footer

