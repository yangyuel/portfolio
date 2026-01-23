/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-23 18:19:25
 * @FilePath: \next-react\src\app\about\page.tsx
 * @Description:
 */

"use client";
import SpotlightCard from "@/src/components/SpotlightCard";
import personal from "@/src/data/about";
import { AnimatePresence, motion } from "framer-motion";
import { HeartPulse, Mail, MapPin, Music2, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DemoPage() {
 const [index, setIndex] = useState(1);

 const baseUrl = "/images/about/";

 const musicPath = "/images/home/music1.jpg";

 return (
  <div className="size-full grid grid-cols-2 bezier-arc px-[10%]">
   <div className="flex-center">
    <AnimatePresence mode="wait">
     <motion.img
      key={index}
      src={`${baseUrl}${personal.imgs[index]}`}
      alt={`Slide ${index + 1}`}
      className="object-cover w-1/2 h-1/2 rounded-3xl"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
     />
    </AnimatePresence>
   </div>
   <div className="my-10 text-shadow-lg p-20">
    <div className="font-bold text-4xl mb-6 border-b p-5">{personal.name}</div>
    <div className="mb-4">{personal.introduce}</div>

    <div className="flex justify-center gap-10">
     <div className="w-30 h-10 border  rounded flex-center">get in touch</div>
     <div className="w-30 h-10 border  rounded-lg flex-center">download cv</div>
    </div>
    {/* <div className="mb-4 flex items-center"> */}
   </div>
  </div>
 );
}
