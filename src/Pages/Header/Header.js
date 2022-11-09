import React, {useContext} from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider/AuthProvide';
// import Login from './../Login/Login';
import { FaUserCircle } from "react-icons/fa";
import logo from '../../images/logo/logo.jpg';
import Service from './../Services/Service';

const Header = () => {

  const {user, logOut} = useContext(AuthContext);


 console.log(user)

  const handleLogOut = () => {
    logOut()
    .then(() => {})
    .catch(e => console.error(e))
  }

  const menuItems = <>
  <li className='font-semibold'><Link to='/'>Home</Link></li>
  <li className='font-semibold'><Link to='/services'>Service</Link></li>
  <li className='font-semibold'><Link to='/blog'>Blog</Link></li>
  {
    user?.uid ? 
    <li onClick={handleLogOut} className='font-semibold'><Link to=''>Sing Out</Link></li>
    : 
    <li className='font-semibold'><Link to='/login'>Login</Link></li>
    
  }
 
  </>

  
    return (
        <div>
            <div className="navbar bg-sky-900 py-4 mb-4">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
      {menuItems}
      </ul>
    </div>
    {/* <img className='h-14 w-32 rounded-2xl ' src={logo}alt=""/> */}
    <Link to='/' className="btn btn-ghost normal-case text-xl text-rose-500">Photography</Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal p-0 text-white">
    {menuItems}
    </ul>
  </div>
  <div className="navbar-end">
  <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          {
            user?.photoURL ?
            <img src={user?.photoURL} alt='' />
            :
            <FaUserCircle className='text-4xl'></FaUserCircle>
          }
        </div>
      </label>
      <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        
        {
          user?.uid ? 
          <li onClick={handleLogOut} className='font-semibold'><Link to='/'>Sing Out</Link></li>
          :
          <li className='font-semibold'><Link to='/login'>Login</Link></li>
        }
      </ul>
    </div>
  </div>
</div>
        </div>
    );
};

export default Header;