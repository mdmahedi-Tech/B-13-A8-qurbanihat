"use client";
import rabbani from '../../../../public/assets/rabbnai.jpg'
import sharif from '../../../../public/assets/sharif.jpg'
import mahedi from '../../../../public/assets/mahedi.jpg'

import { Phone, BriefcaseBusiness, Crown } from "lucide-react";
import { motion } from "framer-motion";
import Image from 'next/image';

console.log(sharif)
const members = [
  {
    id: 1,
    name: "M.H Sharif chowdhury",
    role: "Chairperson",
    phone: "01772717270",
   image:"https://i.ibb.co/CpXmxRnH/sharif.jpg"
  },
  {
    id: 2,
    name: "MD.MAHEDI HASAN",
    role: "Secretary",
    phone: "01751020510",
    image:"https://i.ibb.co/60GR0ZJc/mahedi.jpg"
  },
  {
    id: 3,
    name: "MD.ALAMGIR HOSSAIN",
    role: "Cashier",
    phone: "01518928353",
    image: "https://i.ibb.co/dsdMh50v/alamgir.jpg"
  },
  {
    id: 4,
    name: "MD.ARIFUL CHOWDHURY",
    role: "Asistant Secretary",
    phone: "09658058321",
    image: "https://i.ibb.co/mCFXtQ0S/arif.jpg",
  },
  {
    id: 5,
    name: "MD.RUBEL CHOWDHURY",
    role: "Foreign expert",
    phone: "+880 1711-555555",
    image: "https://i.ibb.co/Df5zhWmX/rubel.jpg",
  },
  {
    id: 6,
    name: "H.NAZMUL HASAN",
    role: "AST.CASHIER",
    phone: "+880 1711-666666",
    image: "https://i.ibb.co.com/Ky0Hj9L/man6.jpg",
  },
  {
    id: 7,
    name: "MD.MOHSIN",
    role: "expert in Animals",
    phone: "+880 1711-777777",
    image: "https://i.ibb.co/gbYBLcrk/mohsin.jpg",
  },
  {
    id: 8,
    name: "H.LABIB ",
    role: "Digital Manager",
    phone: "+880 1711-888888",
    image: "https://i.ibb.co.com/f1tJxM5/man8.jpg",
  },
];

const adviser = {
  name: "H.M. KAMRUL HASAN RABBANI",
  role: "Adviser",
  phone: "01732496631",
  image: "https://i.ibb.co/ZpGMkNGC/rabbnai.jpg",
};

export default function TeamPage() {
  return (
    <div className="bg-gradient-to-b from-green-50 to-white min-h-screen py-20 px-6">
      
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-16">
        <h1 className="text-5xl font-black text-green-900">
          Meet Our Team
        </h1>

        <p className="text-gray-600 mt-5 text-lg">
          Dedicated professionals working together to build a trusted
          and modern livestock marketplace for everyone.
        </p>
      </div>

      {/* Adviser Section */}
      <div className="max-w-5xl mx-auto mb-20">
        <motion.div
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="bg-white rounded-[35px] shadow-2xl overflow-hidden border border-green-100"
        >
          <div className="grid lg:grid-cols-2 items-center">
            
            <div className="relative h-[420px]">
              <Image
                src={adviser.image}
                alt={adviser.name}
                fill
                className="object-cover"
              />
            </div>

            <div className="p-10 space-y-5">
              <div className="flex items-center gap-3 text-amber-500">
                <Crown className="w-8 h-8" />
                <span className="font-bold text-xl">Our Adviser</span>
              </div>

              <h2 className="text-4xl font-black text-green-900">
                {adviser.name}
              </h2>

              <div className="flex items-center gap-3 text-gray-700">
                <BriefcaseBusiness className="w-5 h-5 text-green-700" />
                <span>{adviser.role}</span>
              </div>

              <div className="flex items-center gap-3 text-gray-700">
                <Phone className="w-5 h-5 text-green-700" />
                <span>{adviser.phone}</span>
              </div>

              <p className="text-gray-600 leading-8">
                Experienced adviser helping Al Insaf Agro Farm
                maintain premium livestock quality and trusted farm services.
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Team Members */}
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {members.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 70 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-white rounded-[30px] overflow-hidden shadow-xl border border-green-100 group"
            >
              {/* Image */}
              <div className="relative h-[320px] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-110 duration-500"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

                <div className="absolute bottom-5 left-5 text-white">
                  <h2 className="text-2xl font-bold">
                    {member.name}
                  </h2>

                  <p className="text-sm text-gray-200">
                    {member.role}
                  </p>
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-3 text-gray-700">
                  <BriefcaseBusiness className="w-5 h-5 text-green-700" />
                  <span className="text-sm">{member.role}</span>
                </div>

                <div className="flex items-center gap-3 text-gray-700">
                  <Phone className="w-5 h-5 text-green-700" />
                  <span className="text-sm">{member.phone}</span>
                </div>

                <button className="btn w-full bg-green-800 hover:bg-green-900 text-white border-none rounded-xl">
                  Contact Member
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}