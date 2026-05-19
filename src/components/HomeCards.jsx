import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { TbCurrencyTaka } from 'react-icons/tb';

const HomeCards = ({product}) => {
  console.log(product.image);
    return (
        <div>
         <div className="card bg-base-100 w-75 shadow-sm">
  <figure>
    <Image
    src={product.image}
    width={300}
    height={300}
    alt='cow image'
    >

    </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{product.name}</h2>
    <p className='font-semibold text-gray-700'>{product.breed}</p>
    <p className='font-semibold text-gray-700'>{product.weight}KG</p>
    <div className="card-actions flex justify-between items-center">
        <p className='flex items-center font-bold text-green-800 text-xl'><FaBangladeshiTakaSign />{product.price}</p>
      <Link href={`/details/${product.id}`}><button className="btn btn-primary">view details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeCards;