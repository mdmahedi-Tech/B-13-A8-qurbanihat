import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

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
    <p>{product.breed}</p>
    <p>{product.weight}KG</p>
    <div className="card-actions flex justify-between items-center">
        <p>{product.price}tk</p>
      <Link href={`/details/${product.id}`}><button className="btn btn-primary">view details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default HomeCards;