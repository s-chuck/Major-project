import React from 'react';
import Navbar from './Navbar';

const ContentPage = () => {
  return (
    <div className='container mx-auto'>
      <Navbar />
      <h1 className='text-3xl mt-12 mb-8 font-bold text-center'>Explore Our APIs</h1>
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
        <button className='bg-blue-500 hover:bg-blue-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Books
        </button>
        <button className='bg-green-500 hover:bg-green-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Recipes
        </button>
        <button className='bg-yellow-500 hover:bg-yellow-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Currencies
        </button>
        <button className='bg-red-500 hover:bg-red-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Countries
        </button>
        <button className='bg-purple-500 hover:bg-purple-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Phones
        </button>
        <button className='bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Phones
        </button>
        <button className='bg-gray-500 hover:bg-gray-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Laptops
        </button>
        <button className='bg-orange-500 hover:bg-orange-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
          Camera
        </button>
        <button className='bg-lime-500 hover:bg-lime-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            Phones
        </button>
        <button className='bg-indigo-500 hover:bg-indigo-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            Phones
        </button>
        <button className='bg-teal-500 hover:bg-teal-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            Phones
        </button>
        <button className='bg-emerald-500 hover:bg-emerald-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            Phones
        </button>
        <button className='bg-fuchsia-500 hover:bg-fuchsia-600 text-white py-4 px-6 rounded-lg shadow-md hover:shadow-lg transition duration-300'>
            Phones
        </button>
      </div>
    </div>
  );
}

export default ContentPage;
