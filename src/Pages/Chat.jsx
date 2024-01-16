import React, { useState, useEffect } from 'react';
import { SiCoop } from "react-icons/si";
import Header from '../Componets/Header';


const Chat = () => {
     
  const [messages, setMessages] = useState([
    { id: 1, text: "Hi aulex...", type: 'bot' },
  ]);

  const [newMessage, setNewMessage] = useState('');

  const sendMessage = () => {
    if (newMessage.trim() === '') return;

    setMessages([...messages, { id: messages.length + 1, text: newMessage, type: 'user' }]);
    setNewMessage('');
  };
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
          <h2 className='pt-[4rem]'>chat</h2>

   


    <div className=" w-full ">
      <div className="flex-1 overflow-y-scroll p-4">
        {messages.map((message) => (
          <div
            key={message.id}
            className={`mb-4 ${message.type === 'bot' ? 'text-gray-600' : 'text-white'} ${
              message.type === 'bot' ? 'bg-blue-500 rounded-tl-md rounded-br-md text-white' :
               'bg-green-500 rounded-tr-md rounded-bl-md mt-[2rem]  ml-[8rem]'
            } p-2 max-w-[70%]`}
          >
            {message.text}
          </div>
        ))}
      </div>
      <div className="bg-white p-4 border-t-2 fixed w-full bottom-[4rem] border-gray-300 flex items-center">
        <input
          type="text"
          className="flex-1 mr-2 p-2 border bg-white border-gray-300 rounded"
          placeholder="Type your message..."
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
        />
        <button
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          onClick={sendMessage}
        >
          Send
        </button>
      </div>
    </div>
  

        </>
      )}
    </>
  );
};

export default Chat;
