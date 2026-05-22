import { ForHomePage } from "@/components/AllSharedFunc";
import HomeCards from "@/components/HomeCards";
import Image from "next/image";
import Link from "next/link";
import { ToastContainer } from "react-toastify";
// const fetchdata=async ()=>{
//   const res=await fetch('http://localhost:5000/products')
//   return res.json();
// }

export default async function Home() {
  const allproducts=await ForHomePage();
  const products=allproducts.slice(0,4);
  console.log(products);
  return (
   <>
      <div className='container mx-auto flex justify-between items-center'>
                <h1 className="font-bold text-2xl">Featured Animals</h1>
               <Link href={'/allcards'}><button className='btn border border-green-900'>View All</button></Link>
      </div>
   <div  className='py-10 my-5 container mx-auto grid md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center'>
    {
      products.map(product=><HomeCards key={product.id}product={product}></HomeCards>)
    }
   </div>
    <ToastContainer />
   </>
  );
}
