import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { GiCow } from 'react-icons/gi';


const Navbar = () => {
    return (
        <div>
         <div className="fixed right-0 top-0 z-50 navbar bg-base-100 shadow-sm">
      <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 py-3 w-52 p-2 shadow">
        {/* <Link href={'/'}><li>Home</li></Link> */}
        <Navlink href={'/'}>Home</Navlink>
         <Navlink href={''}>All Card</Navlink>
         <Navlink href={'/about'}>About us</Navlink>
      </ul>
    </div>
    <a className="btn btn-ghost text-xl font-bold"><GiCow className='w-8 h-8 text-green-700'/><span className='text-indigo-950'>AL INSAF</span> <span className='text-green-900'>AGRO FARM</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-3">
       <Navlink href={'/'}>Home</Navlink>
     
      <Navlink href={''}>All Card</Navlink>
      <Navlink href={'/postcss.config.mjsabout'}>About us</Navlink>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
   
    <Link href={'/login'}><button className='btn text-green-900 border border-green-950'>Button</button></Link>
    <Link href={'/register'}><button className='btn bg-green-900 text-white'>Register</button></Link>
    
  </div>
</div>
        </div>
    );
};

export default Navbar;