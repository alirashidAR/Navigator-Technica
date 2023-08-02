// src/PlanetsContainer.js
import React from 'react';
import background from './backgrounds';

const ImageDisplay = () => {
  return (
    <div className='flex flex-row'>
      <img className='bg-black w-5 h-10' 
      src={background.leftplanet} 
      alt="Image 1" />
      <img src={background.rightplanet} alt="Image 2" />
    </div>
  );
};


export default ImageDisplay;
