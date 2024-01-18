// Upload.js

import React, { useState, useEffect } from 'react';
import { SiCoop } from "react-icons/si";
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
        // Show loader while loading is true
        <div className='bg-slate-900 items-center flex justify-center h-dvh'>

          <div className="logo flex pt-[1rem] animate-bounce" >
            <SiCoop className="text-[2rem] text-orange-600" />
            <h2 className="text-[1.2rem] text-white font-bold">u-hir</h2>
          </div>

        </div>
      ) : (
        // Show profile content once loading is false
        <>
          <Header />

          <div className="container mx-auto pt-[4rem]">
            <h1 className="text-4xl font-bold mb-8 text-center"> Upload Your Product</h1>



            <form class="file-upload-form flex justify-center">
  <label for="file" class="file-upload-label">
    <div class="file-upload-design">
      <svg viewBox="0 0 640 512" height="1em">
        <path
          d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z"
        ></path>
      </svg>
      <p>Drag and Drop</p>
      <p>or</p>
      <span class="browse-button">Browse file</span>
    </div>
    <input
      type="file"
      id="fileInput"
      className="file-input"
      onChange={handleFileChange}
    />
  </label>
</form>

            <div className="mb-8 p-4 border border-gray-200 rounded-md shadow-md">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border bg-white p-2"
                  name="name"
                  value={imageDetails.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Height"
                  className="w-full border bg-white p-2"
                  name="height"
                  value={imageDetails.height}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Width"
                  className="w-full border bg-white p-2"
                  name="width"
                  value={imageDetails.width}
                  onChange={handleInputChange}
                />
              </div>
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Capacity"
                  className="w-full border  bg-white p-2"
                  name="capacity"
                  value={imageDetails.capacity}
                  onChange={handleInputChange}
                />
              </div>

              <div className="mb-4">
                <textarea   type="text"  placeholder=" Item Description" 
 name="" id="" className='border p-2 rounded-md border-slate-900 w-full' cols="30" rows="10"></textarea>
             
              </div>

            </div>




            <button
              className="bg-blue-500 text-white px-6 py-3 mb-[5rem] mt-4 rounded-md hover:bg-blue-600 transition duration-300"
              onClick={handleUpload}
              disabled={!selectedFile}
            >
              post 
            </button>
          </div>

        </>
      )}
    </>
  );
};

export default Upload;
