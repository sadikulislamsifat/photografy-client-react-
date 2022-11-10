import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Reviwes from '../Reviwes/Reviwes';
// import Service from './Service';

const ServiceDes = () => {

    const service = useLoaderData();
    console.log(service)
    const {rent, banner, description, service_name, _id} = service; 

    console.log(rent)
    
    return (
        <div>
           <div className="card p-3 lg:card-side bg-base-100 shadow-xl w-full my-9">
            <div className='md:w-1/2 h-full'>
                
  <figure><img src={banner} className="w-full h-full" alt=""/></figure>
            </div>
  <div className="card-body md:w-1/2">
    <h2 className="card-title md:text-4xl">{service_name}</h2>
    <p>{description}</p>
    <p className='font-semibold text-red-500'>Per Picture Price ${rent}</p>
    <div className="card-actions justify-end">
      {/* <button className="btn btn-primary">Listen</button> */}
    </div>
  </div>
</div>


           <div>
           <Reviwes service={service}></Reviwes>
           </div>
        </div>
    );
};

export default ServiceDes;