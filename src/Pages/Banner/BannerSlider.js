import React from 'react';
import './BannerSlider.css'

const BannerSlider = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
       
             <div   id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img style={{height: '100vh',}} src={image} alt='' className="w-full " />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-3 text-xl md:left-24 top-1/4">
     <h1 className='md:text-6xl font-bold text-white'>
     </h1>
    </div>
    <div className="absolute flex justify-end  transform -translate-y-1/2 md:w-2/5 left-3 mt-4 md:mt-0 md:left-24 top-1/2">
     <p className='text-white md:text-xl'></p>
    </div>
    <div className="absolute flex justify-start  transform -translate-y-1/2 w-2/5 left-3 mt-6 md:mt-0 md:left-24 top-3/4">
    <button className="btn btn-secondary mr-6">Button</button>
    
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-circle mr-6">❮</a> 
      <a href={`#slide${next}`} className="btn btn-circle ">❯</a>
    </div>
  </div> 
       
    );
};

export default BannerSlider;