import React from 'react';
import { BsTwitter, BsInstagram } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";


const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content">
  <div>
        <BsTwitter></BsTwitter>
    <p>ACME Industries Ltd.<br/>Providing reliable tech since 1992</p>
  </div> 
  <div>
    <span className="footer-title">Social</span> 
    <div className="grid grid-flow-col gap-4">
      <a><BsTwitter className='text-2xl'></BsTwitter></a> 
      <a><BsInstagram className='text-2xl'></BsInstagram></a> 
      <a><FaFacebookF className='text-2xl'></FaFacebookF></a>
    </div>
  </div>
</footer>
        </div>
    );
};

export default Footer;