import React from 'react';
import logo from '../../public/assets/logo.png'
import logos from '../../public/assets/logos.jpg'
import Image from 'next/image';
const Footer = () => {
    return <>
    <footer className="footer sm:footer-horizontal sm:justify-center lg:justify-between 
    bg-green-950 ¥ p-10">
  <aside>
   <Image
   src={logos}
   height={100}
   width={100}
   alt='logo'
   className='rounded-full text-black'
   >

   </Image>
    <p>
      <span className='text-2xl font-bold text-white'>AL INSAF GROUP</span>
      <br />
     <span className='text-white font-semibold'> Providing reliable service since 2021</span>
    </p>
  </aside>
  <nav className='text-white'>
    <h6 className="footer-title text-white">Services</h6>
    <a className="link link-hover text-white">Agro business</a>
    <a className="link link-hover text-white">Property business</a>
    <a className="link link-hover text-white">Advertisement</a>
  </nav>
  <nav>
    <h6 className="footer-title text-white">Company</h6>
    <a className="link link-hover text-white">About us</a>
    <a className="link link-hover text-white">Contact</a>
   
  </nav>
  <nav>
    <h6 className="footer-title text-white">Legal</h6>
    <a className="link link-hover text-white">Privacy policy</a>
    <a className="link link-hover text-white">Cookie policy</a>
  </nav>
  
</footer>
<div>
  <h1 className='text-center bg-green-950 text-white pb-8 lg:pb-4'> <p>Copyright © {new Date().getFullYear()} - Developed By MD.MAHEDI HASAN</p></h1>
 </div>
    </>
};

export default Footer;