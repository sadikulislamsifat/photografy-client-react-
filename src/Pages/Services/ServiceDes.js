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
            {service_name}
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>
            <h1>hi</h1>


            <Reviwes service={service}></Reviwes>
        </div>
    );
};

export default ServiceDes;