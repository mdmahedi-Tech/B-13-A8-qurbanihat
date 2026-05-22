"use client";
import cow from "../../public/assets/fancy image.jpg"
import Link from "next/link";
import { motion } from "framer-motion";
import { Home, ArrowLeft } from "lucide-react";
import Image from "next/image";

const NotFound = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-emerald-100 flex items-center justify-center px-6 overflow-hidden relative">
      
      {/* Background Blur Effects */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-300/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-72 h-72 bg-emerald-400/20 rounded-full blur-3xl"></div>

      <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-10 items-center">
        ¥
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7 }}
          className="space-y-6 text-center lg:text-left"
        >
          <h1 className="text-[120px] md:text-[170px] font-black leading-none text-green-900">
            404
          </h1>

          <h2 className="text-4xl md:text-5xl font-bold text-gray-900">
            Lost in the Farm?
          </h2>

          <p className="text-gray-600 text-lg max-w-lg">
            The page you are looking for might have been removed,
            renamed, or never existed in our Qurbani marketplace.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <Link href="/">
              <button className="btn bg-green-800 hover:bg-green-900 text-white border-none px-8">
                <Home className="w-5 h-5" />
                Back Home
              </button>
            </Link>

            <button
              onClick={() => window.history.back()}
              className="btn btn-outline border-green-800 text-green-900 hover:bg-green-800 hover:text-white px-8"
            >
              <ArrowLeft className="w-5 h-5" />
              Go Back
            </button>
          </div>
        </motion.div>

        {/* Right Illustration */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9 }}
          className="relative flex justify-center"
        >
          <div className="relative">
            
            {/* Glow */}
            <div className="absolute inset-0 bg-green-300/20 blur-3xl rounded-full"></div>

            {/* Main Card */}
            <div className="relative bg-white/70 backdrop-blur-xl border border-white/40 shadow-2xl rounded-[40px] p-10">
              
              <motion.img
                animate={{ y: [0, -15, 0] }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
             
               
                className="w-[320px] drop-shadow-2xl"
              />

              <div className="mt-6 text-center space-y-2">
                <h3 className="text-2xl font-bold text-green-900">
                  Oops! Animal Not Found
                </h3>

                <p className="text-gray-600 mt-2">
                  يبدو أنك وصلت إلى مكان خاطئ 🐄
                </p>
                <p className="font-bold text-green-900 text-2xl">AL INSAF GROUP</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
    );
};

export default NotFound;