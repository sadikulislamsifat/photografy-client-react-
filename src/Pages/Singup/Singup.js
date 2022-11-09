import React, { useContext } from 'react';
import img from '../../images/login.webp';
import { IoEyeOutline } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvide';
import { Result } from 'postcss';
import GoogleLogin from './GoogleLogin/GoogleLogin';


const Singup = () => {
  const {createUser} = useContext(AuthContext);

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, password, email)

    createUser(email, password)
    .then(result => {
      const user = result.user;
      console.log(user)
      form.reset();

    })
    .catch(e => {
      console.error(e)
    })
  }

    return (
        <div className=" min-h-screen flex items-center justify-center">
  
        <div className="bg-gray-100 flex rounded-2xl shadow-lg max-w-3xl p-5 items-center">
         
          <div className="md:w-1/2 px-8 md:px-16">
            <h2 className="font-bold text-2xl text-[#002D74]">Sing Up</h2>
      
            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
              <input className="p-2 mt-8 rounded-xl border" type="text" name="name" placeholder="Name"/>
              <input className="p-2  rounded-xl border" type="email" name="email" placeholder="Email"/>
              <div className="relative">
                <input className="p-2 rounded-xl border w-full" type="password" name="password" placeholder="Password"/>
                  <IoEyeOutline className="bi bi-eye absolute top-1/2 right-3 -translate-y-1/2"></IoEyeOutline>
      
               
              </div>
              <button type='submit' className="bg-[#002D74] rounded-xl text-white py-2 hover:scale-105 duration-300">Login</button>
            </form>
      
            <div className="mt-6 grid grid-cols-3 items-center text-gray-400">
              <hr className="border-gray-400"/>
              <p className="text-center text-sm">OR</p>
              <hr className="border-gray-400"/>
            </div>
      
            <button className="bg-white border py-2 w-full rounded-xl mt-5 flex justify-center items-center text-sm hover:scale-105 duration-300 text-[#002D74]">
              <GoogleLogin></GoogleLogin>
            </button>
            
      
            <div className="mt-5 text-xs border-b border-[#002D74] py-4 text-[#002D74]">
              <a href="#">Forgot your password?</a>
            </div>
      
            <div className="mt-3 text-xs flex justify-between items-center text-[#002D74]">
              <p>Already have an account?</p>
              <button className="py-2 px-5 bg-white border rounded-xl hover:scale-110 duration-300"><Link to='/login'>Login</Link></button>
            </div>
          </div>
      
         
          <div className="md:block hidden  w-1/2">
            <img style={{height: '490px'}} className="rounded-2xl  h-full" src={img}/>
          </div>
        </div>
      </div>
    );
};

export default Singup;