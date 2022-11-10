import React from 'react';
import { BiTrash } from "react-icons/bi";
import { FaUserCircle } from "react-icons/fa";

const Review = ({review}) => {
    const {rating, message, name, photo} = review;
    return (
        <div style={{minHeight: '250px'}} className='border p-7'>
            <div className='flex justify-between relative'>
                <div>
                    <h5 className='text-xl'>{rating}Star</h5>
                </div>
                <div>
                    <BiTrash className='text-3xl text-red-600'></BiTrash>
                </div>
            </div>
            <div className='my-5'>
                <p>{message}</p>
            </div>
                <div className='flex items-center  bottom-0'>
                    
                    {
                        photo ?
                        <img className='rounded-full h-14 w-14' src={photo} alt=""/>
                        :
                        <FaUserCircle className='text-4xl'></FaUserCircle>
                    }
                    <p className='ml-3 '>{name}</p>
                </div>
            
        </div>
    );
};

export default Review;