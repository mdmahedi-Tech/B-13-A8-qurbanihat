import { ForDetails } from '@/components/AllSharedFunc';
import Booking from '@/components/Booking';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { CiLock } from 'react-icons/ci';
import { FaBangladeshiTakaSign } from 'react-icons/fa6';
import { MdLockOutline } from 'react-icons/md';

const Detailspage = async ({params}) => {
    const {d_id}=await params;
    console.log(d_id)
    // api fetch
  const ForDetails=async ()=>{
  const res=await fetch(`https://json-server-4u0i.onrender.com/products`)
  return res.json();
}
    const products=await ForDetails();
   // console.log(products)
    // find a single data
    const expectedData=products.find(product=>product.id===d_id);
    console.log(expectedData)
    
    return (
       <div className="min-h-screen bg-gray-50 py-6 px-4 sm:px-6 lg:px-16 text-gray-800 pt-20">
      <div className="max-w-6xl mx-auto">
        
        {/* ================= BREADCRUMB ================= */}
        <nav className="text-sm text-gray-500 mb-6 flex items-center gap-2">
          <Link href={'/'}><span className="hover:underline cursor-pointer">Home</span></Link>
          <span>&gt;</span>
         <Link href={'/allcards'}> <span className="hover:underline cursor-pointer">All Animals</span></Link>
          <span>&gt;</span>
          <span className="text-gray-800 font-medium">Deshi Shahi Cow</span>
        </nav>

        {/* ================= MAIN CONTENT GRID ================= */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
          
          {/* --- LEFT COLUMN: IMAGES --- */}
          <div className="space-y-4">
            {/* Main Featured Image */}
            <div className="relative w-full aspect-square rounded-3xl overflow-hidden shadow-sm border border-gray-100">
              <Image
                src={expectedData.image}
                alt="expectedData.name"
               fill
              />
            </div>

            {/* Thumbnail Slider / Gallery */}
            <div className="flex items-center gap-2 pt-2">
              {/* Left Arrow */}
              {/* <button className="p-1 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m15 18-6-6 6-6"/></svg>
              </button> */}

              {/* Thumbnails */}
              <div className="flex gap-2 overflow-x-auto py-1 scrollbar-none">
                {/* Active Thumb */}
                {/* <div className="relative w-20 h-20 rounded-xl overflow-hidden border-2 border-[#005c3c] cursor-pointer shrink-0">
                  <Image src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=150&q=80" alt="thumb" fill className="object-cover" />
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shrink-0 opacity-80 hover:opacity-100">
                  <Image src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=150&q=80" alt="thumb" fill className="object-cover" />
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shrink-0 opacity-80 hover:opacity-100">
                  <Image src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=150&q=80" alt="thumb" fill className="object-cover" />
                </div>
                <div className="relative w-20 h-20 rounded-xl overflow-hidden border border-gray-200 cursor-pointer shrink-0 opacity-80 hover:opacity-100">
                  <Image src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=150&q=80" alt="thumb" fill className="object-cover" />
                </div> */}
              </div>

              {/* Right Arrow */}
              {/* <button className="p-1 rounded-full border border-gray-200 bg-white hover:bg-gray-50 text-gray-400">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m9 18 6-6-6-6"/></svg>
              </button> */}
            </div>
          </div>

          {/* --- RIGHT COLUMN: DETAILS & INFO --- */}
          <div className="space-y-6">
            
            {/* Title & Wishlist */}
         <div className="flex justify-between items-start">
              <h1 className="text-3xl font-bold text-[#0f291e]">{expectedData.name}</h1>
              <button className="p-2 text-gray-400 hover:text-red-500 rounded-full hover:bg-gray-100 transition-colors">
                {/* Heart Icon */}
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
              </button>
            </div>

            {/* Price */}
            <div className="text-3xl font-bold text-[#0a6c42] flex items-center">
              <FaBangladeshiTakaSign />{expectedData.price}
            </div>

            {/* Specifications Table/List */}
            <div className="border border-gray-100 bg-white rounded-2xl p-2 divide-y divide-gray-100 shadow-sm">
              
              {/* Breed */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="m12 3-1.912 5.886H3.82l5.154 3.743L7.062 18.52 12 14.777l4.938 3.743-1.912-5.89 5.154-3.744h-6.268Z"/></svg>
                  <span className="font-medium text-sm md:text-base">Breed</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{expectedData.breed}</span>
              </div>

              {/* Type */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="3" rx="2"/><path d="M9 12h6M12 9v6"/></svg>
                  <span className="font-medium text-sm md:text-base">Type</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{expectedData.type}</span>
              </div>

              {/* Weight */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
                  <span className="font-medium text-sm md:text-base">Weight</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{expectedData.weight}KG</span>
              </div>

              {/* Age */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
                  <span className="font-medium text-sm md:text-base">Age</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{expectedData.age}</span>
              </div>

              {/* Location */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
                  <span className="font-medium text-sm md:text-base">Location</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{expectedData.location}</span>
              </div>

              {/* Category */}
              <div className="flex items-center justify-between p-3.5">
                <div className="flex items-center gap-3 text-gray-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24"><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z"/></svg>
                  <span className="font-medium text-sm md:text-base">Category</span>
                </div>
                <span className="font-semibold text-gray-800 text-sm md:text-base">{expectedData.category}</span>
              </div>

            </div>
          </div>
        </div>

        {/* ================= DESCRIPTION SECTION ================= */}
        <div className="mt-12 max-w-3xl">
          <h2 className="text-xl font-bold text-[#0f291e] mb-3">Description</h2>
          <p className="text-gray-600 leading-relaxed text-sm md:text-base">
           {expectedData.description}
          </p>
        </div>

        {/* ================= BOOKING CARD (LOGIN TO BOOK) ================= */}
        <div className="mt-10 bg-[#eef7f2] border border-[#d2ebd9] rounded-2xl p-6 md:p-8 max-w-4xl">
          <h3 className="text-xl font-bold text-[#005c3c] mb-2">Booking This Animal</h3>
          <p className="text-gray-600 text-sm md:text-base mb-6">
            Please login to book this animal.
          </p>
          
        
            <li className="w-full  text-white 
          font-semibold py-3.5 px-6 rounded-xl transition-colors duration-300 shadow-sm 
          flex items-center justify-center gap-2 cursor-pointer text-sm md:text-base">
             
            <Booking></Booking>
             </li>
          
        </div>

      </div>
    </div>
    );
};

export default Detailspage;