import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Service from './Service';

const Services = () => {
    const allData = useLoaderData();
    return (
        <div>
            <div style={{height: '35vh', width: '100%'}} className= "flex bg-base-200 justify-center items-center ">
           <div >
                <div className='text-center w-100 container'>
                    <p className='md:text-4xl'>Photography</p>
                    <p className='md:text-xl'>Photography is the art, application, and practice of creating durable images by recording light, either electronically by means of an image sensor.</p>
                </div>
            </div>
           </div>

        <div className='my-8'>
            <h3 className='text-2xl '>My Services</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    allData.map(service => <Service
                    key={service._id}
                    service={service}
                    ></Service>)
                }
            </div>
        </div>

        </div>
    );
};

export default Services;