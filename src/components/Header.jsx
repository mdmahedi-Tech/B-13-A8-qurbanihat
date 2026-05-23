import Image from 'next/image';
import logos from '../../public/assets/logos.jpg'
import React from 'react';

const Header = () => {
    return (
        <div>
            <div className='grid lg:grid-cols-2 container mx-auto'>
              <Image
                 src={logos}
                 height={100}
                 width={100}
                 alt='logo'
                 className='rounded-full text-black'
                 ></Image>
            </div>
            <div>
              <h1 className='text-green-900 font-bold'>AL INSAF GROUP</h1>
            </div>
        </div>
    );
};

export default Header;