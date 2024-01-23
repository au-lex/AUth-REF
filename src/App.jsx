import React, { useState } from 'react';
import './App.css';
import Onboarding from './Componets/Onboarding';
import Home from './Componets/Home';
import Header from './Componets/Header';
import Footer from './Componets/Footer';
import Signup from './Pages/Signup';
// import Signup from './Componets/Signup';
// import Login from './Componets/Login';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Function to handle user authentication (login or signup)
  const handleAuthentication = () => {
    // Replace this with your actual authentication logic
    // For example, you can use a state management library or context for authentication
    setIsAuthenticated(true);
  };

  return (
    <>
    
        {isAuthenticated ? (
          <>
            <Header />
            <Home />
            <Footer />
          </>
        ) : (
          <>
          <div className='w-full bg-red-500'>

            <Onboarding />
           
           
          </div>
          </>
        )}
      
    </>
  );
}

export default App;
