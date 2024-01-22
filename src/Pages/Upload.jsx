// Upload.js

import React, { useState, useEffect } from 'react';
import { SiCoop } from 'react-icons/si';
import { AiOutlineCloudUpload } from 'react-icons/ai';

import Header from '../Componets/Header';

const Upload = () => {
  const [loading, setLoading] = useState(true);
  const [imageDetails, setImageDetails] = useState({ name: '', height: '', width: '', capacity: '' });
  const [selectedFile, setSelectedFile] = useState(null);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setImageDetails({ ...imageDetails, [name]: value });
  };

  const handleFileChange = (event) => {
    const { files } = event.target;
    setSelectedFile(files[0]);
  };

  const handleUpload = () => {
    // Add your image upload logic here
    console.log(imageDetails);
    console.log(selectedFile);

    // Reset selected file and image details after upload
    setSelectedFile(null);
    setImageDetails({ name: '', height: '', width: '', capacity: '' });
  };

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
        <div className='bg-slate-900 items-center flex justify-center h-screen'>
          <div className="logo flex pt-[1rem] animate-pulse">
            <SiCoop className="text-[2rem] text-orange-500" />
            <h2 className="text-[1.2rem] text-white font-bold">u-hir</h2>
          </div>
        </div>
      ) : (
        <>
          <Header />

          <div className="container mx-auto pt-[4rem] pb-[6rem]">
            <h1 className="text-2xl font-extrabold mb-8 text-center text-slate-600"> Upload Your Product</h1>

            <form className="file-upload-form flex justify-center
             items-center flex-col space-y-4">
              <label htmlFor="file" className="file-upload-label border-dotted border-4
               border-slate-700 w-[10rem] h-[10rem]   pt-[3rem]
              rounded-full cursor-pointer  
              transition duration-300">
                <AiOutlineCloudUpload className="text-6xl text-slate-500 mb-2" />
                <input
                  type="file"
                  id="file"
                  className="file-input hidden"
                  onChange={handleFileChange}
                />
                {/* <span className="file-upload-text ">Choose a file</span> */}
              </label>

              <div className=" p-8 rounded-md w-96 space-y-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border bg-gray-100 p-2 rounded-md"
                  name="name"
                  value={imageDetails.name}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  placeholder="Height"
                  className="w-full border bg-gray-100 p-2 rounded-md"
                  name="height"
                  value={imageDetails.height}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  placeholder="Width"
                  className="w-full border bg-gray-100 p-2 rounded-md"
                  name="width"
                  value={imageDetails.width}
                  onChange={handleInputChange}
                />

                <input
                  type="text"
                  placeholder="Capacity"
                  className="w-full border bg-gray-100 p-2 rounded-md"
                  name="capacity"
                  value={imageDetails.capacity}
                  onChange={handleInputChange}
                />

                <textarea
                  type="text"
                  placeholder="Item Description"
                  className='border p-2 border-slate-800 rounded-md bg-gray-100 w-full'
                  name="description"
                  value={imageDetails.description}
                  onChange={handleInputChange}
                  rows="4"
                />
              </div>

            </form>
            
            <div className='  px-[2rem]'>

            <button
                className="bg-gradient-to-r from-orange-500 to-yellow-500
                text-white px-8 py-4 rounded-[10px]  w-[100%]
                transition duration-300 t"
                onClick={handleUpload}
                disabled={!selectedFile}
                >
                Post
              </button>
                </div>
          </div>
        </>
      )}
    </>
  );
};

export default Upload;
