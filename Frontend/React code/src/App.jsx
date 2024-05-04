import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Components/Navbar';

const App = () => {
  return (
    <>
      <Navbar />
      <div className='container mx-auto my-32 px-4 flex flex-col items-center justify-center'>
        <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mb-8 text-center'>
          Welcome to Apipedia
        </h1>
        <p className='text-lg md:text-xl lg:text-2xl mb-8 text-center'>
          Your Ultimate Data Companion!
        </p>
        <p className='text-lg md:text-xl lg:text-2xl mb-8 text-center'>
          Discover a wealth of information with ease, from books to recipes, currencies to countries, and beyond. With Apipedia, access diverse datasets via free, user-friendly APIs. Empower your projects, research, and exploration with our revolutionary platform. Unlock the power of data today with Apipedia!
        </p>
        <Link to="/content">
          <button className='bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-lg font-semibold transition duration-300'>
            Start Here...
          </button>
        </Link>
      </div>
    </>
  );
}

export default App;
