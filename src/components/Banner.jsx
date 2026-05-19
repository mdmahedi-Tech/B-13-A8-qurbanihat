import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import bannerimage from '../../public/assets/cow.png'

const Banner = () => {
    return (
        <section className="bg-[#f5f8f2]">
      <div className="container mx-auto px-6 py-12 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
          
          {/* Left Content */}
          <div>
            <h1 className="text-4xl lg:text-6xl font-bold leading-tight text-gray-900">
              Book Your Perfect{" "}
              <span className="text-green-700">Qurbani Animal</span>{" "}
              Easily
            </h1>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-xl">
              Find healthy and beautiful Qurbani animals from trusted
              sellers near you. Easy booking, transparent price.
            </p>

            <div className="flex flex-wrap gap-4 mt-8">
              <Link href="/animals">
                <button className="bg-green-700 hover:bg-green-800 transition text-white px-6 py-3 rounded-lg font-semibold">
                  Browse Animals →
                </button>
              </Link>

              <Link href="/about">
                <button className="border border-gray-300 hover:border-green-700 hover:text-green-700 transition px-6 py-3 rounded-lg font-semibold">
                  Learn More
                </button>
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative flex justify-center">
            <div className="absolute inset-0 bg-green-100 rounded-full blur-3xl opacity-40"></div>

            <Image
              src={bannerimage}
              alt="Qurbani Animal"
              width={700}
              height={500}
              className="relative z-10 object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
    );
};

export default Banner;<h1>banner</h1>