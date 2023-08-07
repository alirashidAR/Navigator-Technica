// src/App.js
import React, { useState,useEffect} from 'react';
import './index.css';
import images from './images.js' /* This is to export the images object the image object which contains event pic and image descrption */
import backgrounds from './backgrounds.js'


  const App=()=>{
    return(
      <div>
      <ImageSlider/>
      </div>
    )
  }

  const ImageSlider = () => {
  const [slideIndex, setSlideIndex] = useState(0);
    useEffect(() => {
    // Automatically move to the next slide every 3 seconds (adjust as needed)
    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };

  const nextSlide = () => {
    setSlideIndex((prevIndex) => (prevIndex + 1+ images.length) % images.length);
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen relative min-h-screen bg-cover bg-center "style={{'backgroundImage':`url(${backgrounds.backgroundwebsite})`}}>
      <p className='text-center mb-8'><span className="heading heading1">ENGA</span><span className='heading heading2'>GEMENTS</span></p>
      <div className="caro slider max-md:w-48 max-md:h-60 relative overflow-hidden">
        {images.map((event, index) => (
          <img
            key={index}
            src={event.post}
            alt={`Post${index + 1}`}
            // Rendering of the image using opacity
            className={`object-cover rounded-3xl absolute top-0 left-0 w-full h-full transition-opacity duration-500 p-4  ${
              index === slideIndex ? 'opacity-100' : 'opacity-0'
            }` }
          />
        ))}
      </div>
      <div className='m-6'>
          <div>
            {images.map((event, index) => (
              // Conditional rendering to display event.name only when its image is active
              index === slideIndex &&(
                <h1 className='text-white caption' key={index}>
                  {event.name}
                </h1>
              )
            ))}
          </div>
          <div>
            <p className='text-white small-caption'>12:00PM - 01:00PM</p>
          </div>
      </div>
      <div className="flex flex-wrap gap-14">
        <button className="px-8 md:px-16 py-2 text-black bg-blue-100 border-blue-500 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded " onClick={prevSlide}>
          <div class="w-0 h-0 
            border-t-[0.4rem] border-t-transparent
            border-r-[0.6rem] border-r-blue-500
            border-b-[0.4rem] border-b-transparent">
          </div>
        </button>
        
        <button className="px-8 md:px-16 py-2 text-black bg-blue-100 border-blue-500 border-b-4 hover:border-b-2 hover:border-t-2 border-blue-dark hover:border-blue rounded " onClick={nextSlide}>
          <div class="w-0 h-0 
            border-t-[0.4rem] border-t-transparent
            border-l-[0.6rem] border-l-blue-500
            border-b-[0.4rem] border-b-transparent">
          </div>
        </button>
      </div>
    </div>
  );
};


export default App;
