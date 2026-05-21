"use client"

import UpdateProfileModal from '@/components/UpdateProfileModal';
import { authClient } from '@/lib/auth-client';
import { Avatar, Card } from '@heroui/react';
import React from 'react';

const page = () => {
    const userData=authClient.useSession();
    const user=userData.data?.user;
    console.log(user)
    return (
        <div className='py-20'>
        <div>
            <Card className="max-w-96 mx-auto flex flex-col items-center shadow-lg py-4">
                   <Avatar className='w-50 h-50 rounded-full'>
                          <Avatar.Image alt="John Doe" src={user?.image} 
                          referrerPolicy='no-referrer'/>
                          <Avatar.Fallback>JD</Avatar.Fallback>
                          
                    </Avatar>
                   <div className='space-y-2'>
                     <p className='text-center font-bold text-green-900'>{user?.name}</p>
                    <p className='font-semibold text-gray-700'>{user?.email}</p>
                    <UpdateProfileModal></UpdateProfileModal>
                    </div>
            </Card>
       </div>

           
        </div>
    );
};

export default page;