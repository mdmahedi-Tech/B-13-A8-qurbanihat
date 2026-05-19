import { ForDetails } from '@/components/AllSharedFunc';
import Link from 'next/link';
import React from 'react';

const Detailspage = async ({params}) => {
    const {d_id}=await params;
    console.log(d_id)
    // api fetch
  const ForDetails=async ()=>{
  const res=await fetch(`http://localhost:5000/products`)
  return res.json();
}
    const products=await ForDetails();
   // console.log(products)
    // find a single data
    const expectedData=products.find(product=>product.id===d_id);
    console.log(expectedData)
    
    return (
        <div className='container mx-auto'>
         <div className="card bg-base-100 shadow-sm">
  <figure>
    <img
      src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
      alt="Shoes" />
  </figure>
  <div className="card-body">
    <h2 className="card-title">{expectedData.name}</h2>
    <p>{expectedData.breed}</p>
    <p>{expectedData.weight}KG</p>
    <div className="card-actions flex justify-between items-center">
        <p>{expectedData.price}tk</p>
      <Link href={`/details/${expectedData.id}`}><button className="btn btn-primary">view details</button></Link>
    </div>
  </div>
</div>
        </div>
    );
};

export default Detailspage;