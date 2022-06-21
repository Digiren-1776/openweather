import React from 'react';
import '../index.css';

const Header = () => {
  return (
    <div description='header container' className='h-1/6'>
      <h1 
      description='title' 
      className='w-full h-full flex justify-center items-center leading-10 tracking-wide text-4xl
      bg-clip-text text-transparent bg-gradient-to-r from-gray-300 to-teal-600'>Weather Central</h1>    
    </div>
  ); 
}

export default Header;