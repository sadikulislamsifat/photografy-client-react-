import React from 'react';
import './BannerSlider.css'

const BannerSlider = ({slide}) => {
    const {image, id, prev, next} = slide;
    return (
       
             <div   id={`slide${id}`} className="carousel-item relative w-full">
    <div className='carousel-img'>
    <img style={{height: '100vh',}} src={image} alt='' className="w-full " />
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-3 text-xl md:left-24 top-1/3">
    <div className='hidden md:block'>
     <h1 className='md:text-6xl banner-title font-bold text-white'>
      Photography
     </h1>
     <p className='text-white md:text-xl mt-4 w-3/5'>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor.</p>
     </div>
    </div>
    <div className="absolute flex justify-end  transform -translate-y-1/2 md:w-2/5 left-3 mt-4 md:mt-0 md:left-24 top-1/3">
   
    </div>
    <div className="absolute flex justify-start  transform -translate-y-1/2 w-2/5 left-3 mt-6 md:mt-0 md:left-24 top-3/4">
    
    </div>
    <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href={`#slide${prev}`} className="btn btn-secondary btn-outline btn-circle mr-6">❮</a> 
      <a href={`#slide${next}`} className="btn  btn-circle btn-outline btn-secondary">❯</a>
    </div>
  </div> 
       
    );
};

export default BannerSlider;