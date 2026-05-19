
import { ForHomePage } from '@/components/AllSharedFunc';
import Image from 'next/image';
import Link from 'next/link';


const AllCardspage = async () => {
    const allproducts=await ForHomePage();
   
    
   
    return (
         
        <div>
          
         <div className='py-18 my-5 container mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                allproducts.map(products=>{
                     console.log(products.image)
                    return <div key={products.id}>
         <div className="card bg-base-100 shadow-sm">
  <figure>
   <Image
   src={products.image}
   width={300}
   height={300}
   alt='cow pic'
   >

   </Image>
  </figure>
  <div className="card-body">
    <h2 className="card-title">{products.name}</h2>
    <p>{products.breed}</p>
    <p>{products.weight}KG</p>
    <div className="card-actions flex justify-between items-center">
        <p>{products.price}tk</p>
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