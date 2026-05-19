"use client"
import Link from 'next/link';
import {usePathname } from 'next/navigation';
import React from 'react';

const Navlink = ({href,children}) => {
    const pathname=usePathname();
   // console.log('pathname is:',pathname)

  const isActive=href === pathname;
    return <Link href={href} className={`${isActive === href ? 'border':''}`}>{children}</Link>
       
    
};

export default Navlink;