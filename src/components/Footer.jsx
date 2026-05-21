import React from 'react';
import logo from '../../public/assets/logo.png'
import Image from 'next/image';
const Footer = () => {
    return <>
    <footer className="footer sm:footer-horizontal sm:justify-center lg:justify-between 
    bg-base-200 text-base-content p-10">
  <aside>
   <Image
   src={logo}
   height={100}
   width={100}
   alt='logo'
   className='rounded-full text-black'
   >

   </Image>
    <p>
      <span className='text-2xl font-bold text-green-950'>AL INSAF GROUP</span>
      <br />
     <span className='text-gray-700 font-semibold'> Providing reliable service since 2021</span>
    </p>
  </aside>
  <nav>
    <h6 className="footer-title">Services</h6>
    <a className="link link-hover">Agro business</a>
    <a className="link link-hover">Property business</a>
    <a className="link link-hover">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title">Company</h6>
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
   
  </nav>
  <nav>
    <h6 className="footer-title">Legal</h6>
    <a className="link link-hover">Privacy policy</a>
    <a className="link link-hover">Cookie policy</a>
  </nav>
</footer>
    </>
};

export default Footer;