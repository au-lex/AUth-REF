import React, { useState, useEffect } from 'react';
import { SiCoop } from "react-icons/si";
import Header from '../Componets/Header';
const Upload = () => {
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
          <h2 className='pt-[4rem]'>upload</h2>

          {/* Add the rest of your profile content here */}
        </>
      )}
    </>
  );
};

export default Upload;
