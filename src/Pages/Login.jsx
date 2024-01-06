import React, { useState, useEffect } from 'react'
import { GrAssistListening } from "react-icons/gr";
import { FcGoogle } from "react-icons/fc";
const Login  = () => {

    const [Loader, setLoader] = useState(true)


    useEffect (()=> {
    const stopLoader = setInterval(() => {
            setLoader(false)
        }, 2000);
        return () => clearTimeout(stopLoader);
    }, [])
    
   
  return (
    <>
    {Loader &&<>

    <div className='bg-slate-900  absolute inset-0'>
        <h4 className='text-slate-100'>loading......</h4> 
    </div>
    </>  }
    <main className='px-[1rem] sign min-h-[100vh]'>
{/* 
<span  className='text-yellow-500 text-center  text-[40px] '>
            <GrAssistListening  className='text-[3rem] text-center block'/></span> */}

            <h2 className='text-[2rem] capitalize  text-center  text-slate-100 pt-[2rem]'>Login </h2>
            <form className='mt-[1rem]' >


            


                
             



 
                <div className="inputCon my-[1.5rem]">
                    <label className='block text-slate-300 text-[16px] mb-1 ' >  Email:</label>
                    <input type="text" 
                     className='   bg-transparent  outline-none w-full py-[.6rem] 
                     rounded-[5px] px-4' />
                </div>

                 
                
                
                <div className="inputCon">
                    <label className='block text-slate-300 text-[16px] mb-1' >Password:</label>
                    <input type="text" 
                     className='   bg-transparent  outline-none w-full py-[.6rem] 
                     rounded-[5px] px-4' />
                </div>

                <div className='mt-[2rem]'>
                    <button className='bg-gray-100 text-[18px]  font-semibold cursor-pointer w-full  rounded-md outline-none py-2'>
                        Login</button>
                </div>

                  <p className='text-center text-gray-300 py-4'>or signin  </p>
                  
                  <div className='g py-[3px] w-full flex justify-center'>
                  <span className='flex'>
                      {/* <h4>sigup</h4> */}
                    <FcGoogle className=' text-[2rem] block' /> 
                  </span>

                  </div>

                  <p className='text-slate-200 text-center pt-4' > Don't have an  account?
                   <span className='text-blue-500 font-bold cursor-pointer'>Signup</span></p>
               

            </form>

            
</main>
     </>
  )
}

export default Login 