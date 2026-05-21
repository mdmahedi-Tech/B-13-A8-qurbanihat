"use client"
import Link from 'next/link';
import React from 'react';
import Navlink from './Navlink';
import { GiCow } from 'react-icons/gi';
import { authClient } from '@/lib/auth-client';
import { FaCow, FaUser, FaUserCheck } from 'react-icons/fa6';
import { Avatar } from '@heroui/react';


const Navbar = () => {
  const { 
        data: session, 
        
    } = authClient.useSession()
    const user=session?.user;
    
    console.log(user)

  const handlelogout=()=>{
    authClient.signOut()

  }
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
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 py-10 my-10 w-52 p-2 shadow">
       
        <Navlink className={'font-semibold'} href={'/'}>Home</Navlink>
         <Navlink className={'font-semibold'} href={'/allcards'}>All Animals</Navlink>
         <Navlink className={'font-semibold'} href={'/about'}>About us</Navlink>
         <Navlink className={'font-semibold'} href={'/profile'}>Profile</Navlink>
      </ul>
    </div>
    {/* gorup name */}
    <a className="btn btn-ghost sm:text-sm md:text-xl lg:text-xl font-bold">
     
    <span className='text-indigo-950'>AL INSAF</span>
     <span className='text-green-900'>AGRO FARM</span></a>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal space-x-3">
       <Navlink className={'font-semibold'} href={'/'}>Home</Navlink>
     
      <Navlink className={'font-semibold'} href={'/allcards'}>All Animals</Navlink>
      <Navlink className={'font-semibold'} href={'/about'}>About us</Navlink>
      <Navlink className={'font-semibold'} href={'/profile'}>Profile</Navlink>
    </ul>
  </div>
  <div className="navbar-end space-x-2">
       { user ?(<div className='flex items-center gap-4'>
        <div className='text-xm font-semibold text-green-800 flex justify-center items-center gap-2'>
      
     {/* avater start */}
     <Avatar>
        <Avatar.Image alt="John Doe" src={user?.image} />
        <Avatar.Fallback>JD</Avatar.Fallback>
      </Avatar>
     {/* avater end */}
       {user?.name}
        </div>
        <Link href={''}><button onClick={handlelogout} className='btn bg-gray-400 text-red-700'>
          logout</button></Link>
      </div>):
      (<div className='flex items-center gap-2'>
        
          <Link href={'/login'}><button className='btn bg-green-900 text-white'>login</button></Link>
    <Link href={'/registers'}><button className='btn text-green-900 border border-green-950'>
      register</button></Link>
      </div>)}
    
    
   
    
  </div>
</div>
        </div>
    );
};

export default Navbar;