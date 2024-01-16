import React, { useState, useEffect } from 'react';
import { SiCoop } from "react-icons/si";
import Header from '../Componets/Header';
import { FaUser, FaPhone, FaEnvelope, FaKey, FaSignOutAlt, FaMapMarkerAlt } from 'react-icons/fa';
const Profile = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading by setting a timeout
    const intervalId = setInterval(() => {
      setLoading(false); // Set loading to false after the interval
      clearInterval(intervalId); // Clear the interval to stop it from running continuously
    }, 2000);

    // Clean up the interval to avoid memory leaks
    return () => clearInterval(intervalId);
  }, []); // The empty dependency array ensures that this effect runs once on mount

  return (
    <>
      {loading ? (
        // Show loader while loading is true
        <div className='bg-slate-900  items-center flex justify-center h-dvh'>

<div className="logo flex pt-[1rem] animate-bounce" >
  <SiCoop className="text-[2rem] text-orange-600" />
  <h2 className="text-[1.2rem] text-white font-bold">u-hir</h2>
</div>

        </div>
      ) : (
        // Show profile content once loading is false
        <>
<Header />
          {/* <h2 className='pt-[4rem]'>Profile</h2> */}







      



        


<div className="bg-gradient-to-r from-gray-900 via-slate-900 to-gray-800 min-h-[100vh] mb-[2rem] flex 
lg:items-center justify-center">
  <div className="bg-white px-[1rem] rounded-lg shadow-lg w-full sm:w-96 border border-gray-300">
    <div className="flex  mb-6  pt-[5rem] ">
      <img
        src="https://via.placeholder.com/150"
        alt="Profile"
        className="w-16 h-16 rounded-full mr-4 border-2 border-gray-400"
      />
      <div>
        <h1 className="text-3xl font-bold text-gray-800">John Doe</h1>
        <p className="text-gray-600">Web Developer</p>
      </div>
    </div>

    <div className="mb-6 ">
      <div className="flex items-center mb-4 border py-3 rounded-[5px] px-2">
        <FaUser className="text-gray-600 text-xl mr-2" />
        <div className='flex justify-between w-full'>
          <label className="block text-gray-600 font-semibold">First Name</label>
          <p className="text-gray-800 ml-2 text-sm">Script dev</p>
        </div>
      </div>

      <div className="flex items-center mb-4 border py-3 rounded-[5px] px-2">
        <FaUser className="text-gray-600 text-xl mr-2" />
        <div className='flex justify-between w-full'>
          <label className="block text-gray-600 font-semibold">Last Name</label>
          <p className="text-gray-800 ml-2 text-sm">Dev.io</p>
        </div>
      </div>

      <div className="flex items-center mb-4 border py-3 rounded-[5px] px-2">
      <FaPhone className="text-gray-600 text-xl mr-2" />
        <div className='flex justify-between w-full'>
          <label className="block text-gray-600 font-semibold">Phone Number</label>
          <p className="text-gray-800 ml-2 text-sm">08158772715</p>
        </div>
      </div>

      <div className="flex items-center mb-4 border py-3 rounded-[5px] px-2">
      <FaEnvelope className="text-gray-600 text-xl mr-2" />
        <div className='flex justify-between w-full'>
          <label className="block text-gray-600 font-semibold">Email Address</label>
          <p className="text-gray-800 ml-2 text-sm">aulex500@gmail.com</p>
        </div>
      </div>

      <div className="flex items-center mb-4 border py-3 rounded-[5px] px-2">
      <FaKey className="text-gray-600 text-xl mr-2" />
        <div className='flex justify-between w-full'>
          <label className="block text-gray-600 font-semibold">Password</label>
          <p className="text-gray-800 ml-2 text-sm">Script dev</p>
        </div>
      </div>


      <div className="flex items-center mb-4 border py-3 rounded-[5px] px-2">
        <FaMapMarkerAlt className="text-gray-600 text-xl mr-2" />
        <div className="flex justify-between w-full">
          <label className="block text-gray-600 font-semibold">Address</label>
          <p className="text-gray-800 ml-2 text-sm">123 Main St, City, Country</p>
        </div>
      </div>

   </div>
    
<div className='flex justify-between pb-[4rem] '>

<div className='w-full'>

    <button className="bg-gradient-to-r from-orange-500 to-yellow-500 rounded-[8px]
     text-white py-3 px-4  border-2
     ">
      Edit Profile
    </button>
       </div>
    <div className="flex items-center mb-4 border bg-red-500 text-white py-3 rounded-[8px] px-2">
        <FaSignOutAlt className=" text-xl mr-2" />
        <div className="flex justify-between w-full">
          <label className="block  font-semibold">Logout</label>
          {/* <p className="text-gray-800 ml-2 text-sm">Logout</p> */}
        </div>
      </div>

      </div>
  </div>
</div>





          {/* Add the rest of your profile content here */}
        </>
      )}
    </>
  );
};

export default Profile;
