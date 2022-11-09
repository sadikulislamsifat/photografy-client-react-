import React from 'react';
import { FaGraduationCap } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({service}) => {
    const {rent, banner, description, service_name, _id} = service;
    return (
            <div  className=" subjects-card mb-3 border rounded-xl ">
    <div className="card h-full p-2">
        <div className='flex justify-between'>
            <p>Per Picture</p>
            <p className='bg-primary flex px-3 py-1 text-white  rounded-2xl'> ${rent} </p>
        </div>
      <img className=' mt-2 rounded-sm' style={{height: '170px'}} src={banner} class="card-img-top" alt="..."/>
      <div className="card-body p-0">
        
        <p  className="card-text">{description.length > 80 ?
        <p>{description.slice(0, 80) + '...'} <Link to={`/subjects/${_id}`}>Explore more</Link> </p>
        :
        <p>{description}</p>
    }</p>
      </div>
    </div>
  </div>
     
    );
};

export default Service;