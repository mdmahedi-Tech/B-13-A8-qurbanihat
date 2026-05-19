import Image from 'next/image';
import React from 'react';
import deshiCaw from '../../public/assets/deshiCaw.jpg'
import shahiwalcaw from '../../public/assets/shaiwalCaw.jpg'
import blackgoat from '../../public/assets/blackgoat.jpg'
import brahma from '../../public/assets/brahma.jpg'

const TipAndTop = () => {
    return (
       <section className="max-w-7xl mx-auto px-6 md:px-16 py-12 space-y-16 bg-white">
      
      {/* ================= QURBANI TIPS SECTION ================= */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f291e] mb-8">
          Qurbani Tips
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          
          {/* Card 1: Choose Healthy Animal */}
          <div className="flex items-start gap-4 p-6 bg-[#f7faf8] rounded-2xl border border-gray-100">
            <div className="p-3 bg-white text-[#0a6c42] rounded-xl border border-emerald-100 shadow-sm shrink-0">
              {/* Shield/Heart Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
                <path d="M12 14.5s-2.5-1.5-2.5-3c0-1 1-1.5 1.5-1.5s1 .5 1 1c0-.5.5-1 1-1s1.5.5 1.5 1.5c0 1.5-2.5 3-2.5 3z"/>
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Choose Healthy Animal</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Select active, healthy and well-fed animals for Qurbani.
              </p>
            </div>
          </div>

          {/* Card 2: Follow Islamic Guidelines */}
          <div className="flex items-start gap-4 p-6 bg-[#f7faf8] rounded-2xl border border-gray-100">
            <div className="p-3 bg-white text-[#0a6c42] rounded-xl border border-emerald-100 shadow-sm shrink-0">
              {/* Book/Islamic Guide Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="m19 11-4-7-4 7M19 11H11m8 0a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2m6 0V4"/>
                <circle cx="15" cy="11" r="1"/>
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Follow Islamic Guidelines</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Ensure the animal meets all the Islamic requirements.
              </p>
            </div>
          </div>

          {/* Card 3: Proper Feeding */}
          <div className="flex items-start gap-4 p-6 bg-[#f7faf8] rounded-2xl border border-gray-100">
            <div className="p-3 bg-white text-[#0a6c42] rounded-xl border border-emerald-100 shadow-sm shrink-0">
              {/* Plant/Feeding Icon SVG */}
              <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 3.5 0 8.5C17 15 15 18 11 20z"/>
                <path d="M19 2c-2.26 4.33-5.27 7.14-8 10"/>
              </svg>
            </div>
            <div className="space-y-1">
              <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Proper Feeding</h3>
              <p className="text-gray-500 text-sm md:text-base leading-relaxed">
                Well feeding animals is better health and quality meat.
              </p>
            </div>
          </div>

        </div>
      </div>

      {/* ================= TOP BREEDS SECTION ================= */}
      <div>
        <h2 className="text-2xl md:text-3xl font-bold text-[#0f291e] mb-8">
          Top Breeds
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 justify-items-center">
          
          {/* Breed 1: Deshi Cow */}
          <div className="text-center group">
            <div className="relative w-40 h-40 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={deshiCaw}
                alt="Deshi Cow"
                fill
                className="object-cover"
                // sizes="(max-w-668px) 100px, 120px"
              />
            </div>
            <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Deshi Cow</h3>
            <p className="text-[#0a6c42] font-medium text-xs md:text-sm mt-0.5">Strong & Hardy</p>
          </div>

          {/* Breed 2: Sahiwal */}
          <div className="text-center group">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={shahiwalcaw}
                alt="Sahiwal"
                fill
                className="object-cover"
                sizes="(max-w-768px) 128px, 160px"
              />
            </div>
            <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Sahiwal</h3>
            <p className="text-[#0a6c42] font-medium text-xs md:text-sm mt-0.5">High Weight Gain</p>
          </div>

          {/* Breed 3: Black Bengal Goat */}
          <div className="text-center group">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={blackgoat}
                alt="Black Bengal Goat"
                fill
                className="object-cover"
                sizes="(max-w-768px) 128px, 160px"
              />
            </div>
            <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Black Bengal Goat</h3>
            <p className="text-[#0a6c42] font-medium text-xs md:text-sm mt-0.5">Premium Quality</p>
          </div>

          {/* Breed 4: Brahman */}
          <div className="text-center group">
            <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-gray-100 shadow-sm mx-auto mb-4 transition-transform duration-300 group-hover:scale-105">
              <Image
                src={brahma}
                alt="Brahman"
                fill
                className="object-cover"
                sizes="(max-w-768px) 128px, 160px"
              />
            </div>
            <h3 className="font-bold text-[#0f291e] text-base md:text-lg">Brahman</h3>
            <p className="text-[#0a6c42] font-medium text-xs md:text-sm mt-0.5">Large & Healthy</p>
          </div>

        </div>
      </div>

    </section>
    );
};

export default TipAndTop;

