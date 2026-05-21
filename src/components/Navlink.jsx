"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import React from 'react';

const Navlink = ({href,children,}) => {
    const pathname=usePathname()
    const isActive= href=== pathname;
    console.log('pathename',pathname);
   
    return <Link href={href} className={`font-bold text-gray-700 ${isActive ? "text-green-700 border-b border-green-950":""}`}>{children}</Link>
       
    
};

export default Navlink;