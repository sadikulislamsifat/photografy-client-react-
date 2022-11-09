import React from 'react';
import logo from '../../images/images.jpg'

const Photography = () => {
    return (
        <div className='md:flex my-9 '>
            <div className='md:w-1/2'>
                <img className='w-full h-full' src={logo} alt=""/>
            </div>
            <div className='md:w-1/2 bg-base-200 p-4 md:p-9'>
                <h1 className='text-xl md:text-4xl'>Photography</h1>
                <p className='mt-1'>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor.</p>
                <br/>
                <h4 className='font-semibold'>What defines a good photograph?</h4>
                <p>There are many elements in photography that come together to make an image be considered “good”. Some of these elements include, but are not limited to lighting, the rule of thirds, lines, shapes, texture, patterns, and color. All of these things play an important role when it comes to photography.</p>
                <br/>
                <h4 className='font-semibold'>What are the 7 principles of photography?</h4>
                <p>There are 7 principles of Photography i.e. Pattern, Balance, Negative Space, Grouping, Closure, Colour and Light/Shadow. By applying these 7 principles, Photographers can create a complete image in the foundation of art theory. Patterns makes sense of the visual world through regularity.</p>
            </div>
        </div>
    );
};

export default Photography;