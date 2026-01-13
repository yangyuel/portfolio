/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-12 14:32:35
 * @FilePath: \next-react\src\app\service\page.tsx
 * @Description:
 */

"use client";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import personal from "@/src/data/home";
import { services } from "@/src/data/services";
import { motion } from "framer-motion";
import {
 ArrowRight,
 HeartPlus,
 HeartPulse,
 Mail,
 MapPin,
 Music,
 Music2,
 Phone,
 Smartphone,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DemoPage() {
 return (
  <AnimateFadeIn className="py-20 px-[20%]">
   <div className="text-2xl my-10 title-border text-shadow-lg">SERVICE</div>
   <div className="grid grid-cols-2 gap-10 h-150 mx-auto">
    {services.map((ele, index) => (
     <motion.div
      key={index}
      className="p-8 bg-(--active)/10 rounded-2xl flex flex-col"
      whileHover={{
       y: -8,
      }}
      transition={{ duration: 0.5 }}
     >
      <div className="font-bold mb-6 border-b pb-4 border-(--active)/40">
       {ele.name}
      </div>
      <div className="opacity-50 flex-1">{ele.des}</div>
      <div className="font-bold text-(--active) flex items-center cursor-pointer">
       <motion.span className="mr-1" whileHover={{ marginRight: "8px" }}>
        <Link href="/contact">order now</Link>
       </motion.span>
       <ArrowRight size={20} />
      </div>
     </motion.div>
    ))}
   </div>
  </AnimateFadeIn>
 );
}
