
import { ForHomePage } from '@/components/AllSharedFunc';
import Image from 'next/image';
import Link from 'next/link';
import { TbCoinTaka } from 'react-icons/tb';


const AllCardspage = async () => {
    const allproducts=await ForHomePage();
   
    
   
    return (
         
        <div>
          
         <div className='py-18 my-5 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allproducts.map(products=>{
                    
                    return <div key={products.id}>
         <div className="card bg-base-100 shadow-sm">
  <figure>
   <Image
   src={products.image}
   width={300}
   height={300}
   alt='cow pic'
   className='rounded-xl'
   >

   </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title font-bold">{products.name}</h2>
    <p className='font-semibold text-gray-600'>{products.breed}</p>
    <p className='font-semibold text-gray-600'>{products.weight}KG</p>
    <div className="card-actions font-bold text-xl text-green-800 flex justify-between items-center">
        <p className='flex items-center'><TbCoinTaka className='w-7 h-7' />{products.price}</p>
      <Link href={`/details/${products.id}`}><button className="btn btn-primary">view details</button></Link>
    </div>
  </div>
</div>
        </div>
                })
            }
         </div>
        </div>
         
    );
};

export default AllCardspage;