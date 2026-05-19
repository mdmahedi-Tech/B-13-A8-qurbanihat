"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Navlink = ({href,children}) => {
    const pathname=usePathname()
    const isActive= href=== pathname;
    console.log('pathename',pathname);
   
    return <Link href={href} className={`${isActive ? "bg-amber-300":""}`}>{children}</Link>
       
    
};

export default Navlink;