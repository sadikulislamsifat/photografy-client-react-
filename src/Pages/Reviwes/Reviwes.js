import React, {useContext, useState} from 'react';
import { AuthContext } from './../../context/AuthProvider/AuthProvide';


const btn = [1,2,3,4,5]

const Reviwes = ({service}) => {
    const {_id, title, price} = service;
    console.log(service)
    const {user} = useContext(AuthContext);
    const [rating, setRating] = useState(5)
    

    const btnValue = event => {
        setRating(event)
    }

    const handlePlaceReview = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const message = form.message.value;

        const reviweDetails = {
            service : _id,
            serviceName: title,
             name,
            message,
            rating

        }


    }
    return (
        <div>
          <div style={{height: '30vh', width: '100%'}} className=" bg-base-200 flex justify-center items-center">
           <div className=' text-center'>
            <p className='mb-4 text-5xl'>Experience</p>
            <p className='text-xl '>Please share your experience with us.</p>
           </div>
           </div>

           <form onSubmit={handlePlaceReview} className='mt-5 md:my-9 flex justify-center  w-full'>
            <div>
                
           <div className=' ms-auto flex'>
            <div>
            <input type="text" name='name' placeholder="Name" className="input input-bordered w-full " />
            </div>
            <div>
            <input type="email" name='email' defaultValue={user?.email} readOnly placeholder="Email" className="input input-bordered ml-5 w-full " />
            </div>
            </div>
            <textarea name='message' className="textarea h-56 mt-5 w-full textarea-bordered" placeholder="Messages"></textarea>
            <div className='my-8 '>
                <span className='text-xl font-semibold'>Rating</span>
            {
                btn.map(r => <button onClick={() => btnValue(r)} className='btn ml-1 btn-outline'>{r}</button>)
            }
             <span className='text-xl ml-3 font-semibold'>Star</span>
            </div>
            <div>
                <input className='btn' type="submit" name="" value="Place Your Reviwe"/>
            </div>
            </div>
            
           </form>
           
           
          
        </div>
    );
};

export default Reviwes;