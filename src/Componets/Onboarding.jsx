import React from 'react';
import {Link} from 'react-router-dom'
const Onboarding = () => {
  return (
    <>
      <section className='bg-gray-900 h-[100vh] animated-bg relative flex items-center justify-center'>
        <section className="login z-50">
      <div>
        <h1 className='text-white text-center text-[40px] mb-[2rem]'>cello</h1>
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
