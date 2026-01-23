/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-22 16:17:01
 * @FilePath: \next-react\src\app\skill\page.tsx
 * @Description:
 */
"use client";
import { motion } from "framer-motion";
import { Rabbit } from "lucide-react";
import { skills } from "@/src/data/resume";

export default function SkillPage() {
 return (
  <div className="py-20 px-[15%]">
   <div className="text-2xl my-10 title-border text-shadow-lg">SKILLS</div>

   <div className="grid grid-cols-2 gap-20 flex-wrap">
    {skills.map((ele, index) => (
     <div key={index}>
      <div className="font-bold mb-2 flex justify-between">
       <span>{ele.name}</span>
       <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 5 }}
       >
        {ele.percent}
       </motion.span>
      </div>
      <div className="bg-(--primary-foreground) h-2 rounded-xl relative">
       <motion.div
        className="bg-(--active) h-full rounded-xl opacity-50"
        initial={{ width: 0 }}
        whileInView={{ width: ele.percent }}
        transition={{
         duration: 5,
        }}
       />

       <motion.div
        className="absolute -top-2"
        initial={{ left: 0 }}
        whileInView={{ left: `calc(${ele.percent} - 10px)` }}
        transition={{
         duration: 5,
        }}
       >
        <Rabbit color="var(--active)" />
       </motion.div>
      </div>
     </div>
    ))}
   </div>
  </div>
 );
}
