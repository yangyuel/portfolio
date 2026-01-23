/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-22 16:16:53
 * @FilePath: \next-react\src\app\service\page.tsx
 * @Description:
 */

"use client";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import { services } from "@/src/data/services";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import SpotlightCard from "@/src/components/SpotlightCard";

export default function DemoPage() {
 return (
  <AnimateFadeIn className="py-20 px-[20%]">
   <div className="text-2xl my-10 title-border text-shadow-lg">SERVICE</div>
   <div className="grid grid-cols-2 gap-10 h-150 mx-auto">
    {services.map((ele, index) => (
     <SpotlightCard
      key={index}
      className="bg-(--active)/10 p-8 flex flex-col size-full rounded-2xl overflow-hidden"
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
     </SpotlightCard>
    ))}
   </div>
  </AnimateFadeIn>
 );
}
