import React from 'react';

const TipAndTop = () => {
    return (
        <div>
            <h1>tips and tops sections</h1>
        </div>
    );
};

export default TipAndTop;

// import React from 'react';
// import Image from 'next/image';

// export default function QurbaniBanner() {
//   return (
    // <section className="relative bg-gradient-to-r from-[#f4f9f5] to-[#e8f5ec] overflow-hidden min-h-[450px] flex items-center px-6 md:px-16 py-12">
      
    //   {/* Background Islamic Pattern Overlay */}
    //   <div 
    //     className="absolute inset-0 opacity-[0.03] pointer-events-none bg-repeat"
    //     style={{ backgroundImage: `url('https://www.transparenttextures.com/patterns/islamic-id.png')` }}
    //   />
      
    //   {/* Background Mosque Shape (Optional Vector Simulation) */}
    //   <div className="absolute right-1/3 bottom-0 top-0 w-96 opacity-10 bg-[url('https://openclipart.org/image/800px/281615')] bg-contain bg-bottom bg-no-repeat hidden md:block pointer-events-none" />

    //   <div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative z-10">
        
    //     {/* Left Content Area */}
    //     <div className="space-y-6 max-w-lg">
    //       <h1 className="text-4xl md:text-5xl font-bold text-[#0f291e] leading-tight tracking-wide">
    //         Book Your Perfect <br />
    //         <span className="text-[#0a6c42]">Qurbani Animal</span> <br />
    //         Easily
    //       </h1>
          
    //       <p className="text-gray-600 text-base md:text-lg leading-relaxed">
    //         Find healthy and beautiful Qurbani animals from trusted sellers near you. Easy booking, transparent price.
    //       </p>
          
    //       {/* CTA Buttons */}
    //       <div className="flex flex-wrap gap-4 pt-2">
    //         <button className="inline-flex items-center justify-center bg-[#005c3c] hover:bg-[#00472e] text-white font-semibold px-6 py-3 rounded-lg transition-colors duration-300 shadow-sm cursor-pointer">
    //           Browse Animals
    //           {/* Right Arrow Icon */}
    //           <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    //             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3" />
    //           </svg>
    //         </button>
            
    //         <button className="inline-flex items-center justify-center border-2 border-[#005c3c] text-[#005c3c] hover:bg-[#005c3c] hover:text-white font-semibold px-6 py-3 rounded-lg transition-all duration-300 cursor-pointer">
    //           Learn More
    //         </button>
    //       </div>
    //     </div>
        
    //     {/* Right Image Area using Next.js Image Component */}
    //     <div className="relative flex justify-center md:justify-end w-full h-[300px] md:h-[400px]">
    //       {/* NOTE: 
    //         ১. আপনার প্রোজেক্টের 'public' ফোল্ডারে ব্যাকগ্রাউন্ড ছাড়া (Transparent PNG) গরু-ছাগলের ছবি রাখুন।
    //         ২. যেমন: /public/qurbani-animals.png
    //         ৩. নিচে src="/qurbani-animals.png" ব্যবহার করুন।
    //       */}
    //       <Image
    //         src="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?auto=format&fit=crop&w=600&q=80" // পরিবর্তন করুন
    //         alt="Qurbani Animals"
    //         fill
    //         priority
    //         className="object-contain drop-shadow-2xl"
    //         sizes="(max-w-768px) 100vw, 50vw"
    //       />
    //     </div>
        
    //   </div>
    // </section>
//   );
// }