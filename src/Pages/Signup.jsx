import React, { useState } from 'react';
import { FaFacebookF } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

const Signup = () => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const fullNameRegex = /^[a-zA-Z\s]+$/;
  const phoneNumberRegex = /^\+?\d{0,4}?\d{10}$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/;

  const handleSubmit = (e) => {
    e.preventDefault();

    const isValidFullName = fullNameRegex.test(fullName);
    const isValidPhoneNumber = phoneNumberRegex.test(phoneNumber);
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = passwordRegex.test(password);

    if (isValidFullName && isValidPhoneNumber && isValidEmail && isValidPassword) {
      // Simulate registration logic (replace with actual API call)
      console.log('Registration successful!');
      console.log('User Details:');
      console.log('Full Name:', fullName);
      console.log('Phone Number:', phoneNumber);
      console.log('Email:', email);

      // Clear form after successful registration
      setFullName('');
      setPhoneNumber('');
      setEmail('');
      setPassword('');
    }else {
      // Handle validation errors
      console.log('Registration failed. Please check your input.');
      
      if (!isValidFullName) {
        console.log('Invalid Full Name. It should consist of alphabets and spaces only.');
      }
  
      if (!isValidPhoneNumber) {
        console.log('Invalid Phone Number. Please enter a valid phone number.');
      }
  
      if (!isValidEmail) {
        console.log('Invalid Email. Please enter a valid email address.');
      }
  
      if (!isValidPassword) {
        console.log(' at least one lowercase letter, one uppercase letter, one digit, one special character, and a minimum length of 8 characters.');
      }
    }
  };

  return (
    <main className='px-[1rem] sign min-h-[100vh]'>
      <h2 className='text-[2rem] capitalize  text-center  text-slate-100 pt-[2rem]'>Register</h2>
      <form className='mt-[1rem]' onSubmit={handleSubmit}>
        <div className="inputCon">
          <label className='block text-slate-300 text-[16px] mb-1'>Full Name:</label>
          <input
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            type="text"
            className='bg-transparent outline-none w-full py-[.6rem] rounded-[5px] px-4'
          />
        </div>

        <div className="inputCon my-[1.5rem]">
          <label className='block text-slate-300 text-[16px] mb-1'>Email:</label>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            type="email"
            className='bg-transparent outline-none w-full py-[.6rem] rounded-[5px] px-4'
          />
        </div>

        <div className="inputCon my-[1.5rem]">
          <label className='block text-slate-300 text-[16px] mb-1'>Phone No:</label>
          <input
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="text"
            className='bg-transparent outline-none w-full py-[.6rem] rounded-[5px] px-4'
          />
        </div>

        <div className="inputCon">
          <label className='block text-slate-300 text-[16px] mb-1'>Password:</label>
          <input
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            type="password"
            className='bg-transparent outline-none w-full py-[.6rem] rounded-[5px] px-4'
          />
        </div>
<div className='mt-[2rem]'>

        <button
          type="submit"
          className='bg-gray-100 text-[18px] font-semibold cursor-pointer w-full rounded-md outline-none py-3'
          >
          Submit
        </button>
          </div>

        <p className='text-center text-gray-300 py-4'>or</p>

        <div className='py-[3px] w-full flex space-x-3 justify-between'>
          <span className='border w-full flex justify-center py-2 rounded-md'>
            <FaFacebookF className='text-[2rem] block text-blue-600' />
            <h2 className='text-slate-200 ml-2 text-[20px]'>Signup</h2>
          </span>
          <span className='border w-full flex justify-center py-2 rounded-md'>
            <FcGoogle className='text-[2rem] block' />
            <h2 className='text-slate-200 ml-2 text-[20px]'>Signup</h2>
          </span>
        </div>

        <p className='text-slate-200 text-center pt-4'>Already have an account? <span className='text-blue-500 font-bold cursor-pointer'>Login</span></p>
      </form>
    </main>
  );
}

export default Signup;
