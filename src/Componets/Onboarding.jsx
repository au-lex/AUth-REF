import React from 'react';
import {Link} from 'react-router-dom'
// import { SiDassaultsystemes } from "react-icons/si";
import { GrAssistListening } from "react-icons/gr";
const Onboarding = () => {
  return (
    <>
      <section className='bg-gray-900 h-[100vh] animated-bg relative flex items-center justify-center'>
        <section className="login z-50">
      <div className='flex justify-center my-[4rem]'>
        <span  className='text-yellow-500 text-center  text-[40px] '>
            <GrAssistListening  className='text-[6rem] text-center block'/></span>
        <h1 className='text-white text-center text-[40px]  rello'></h1>
      </div>
      <div className="btn">
<Link to='/signup'>
            
            <button className='text-gray-900 bg-slate-200 w-[20rem] py-3 mb-[2.5rem] text-[20px] font-medium rounded-[35px]  hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
              Register
            </button>
            </Link>
          </div>
          <div className="btn">
<Link to='/login'>
            
            <button className='text-gray-900 bg-slate-200 w-[20rem] py-3 text-[20px] font-medium rounded-[35px]  hover:bg-blue-700 focus:outline-none focus:shadow-outline-blue active:bg-blue-800'>
              Login
            </button>
            </Link>
          </div>
        </section>
      </section>
    </>
  );
};

export default Onboarding;
