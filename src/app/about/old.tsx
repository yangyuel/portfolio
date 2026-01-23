/*
 * @Author: yoyo
 * @Date: 2025-12-24 10:15:47
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-20 18:15:07
 * @FilePath: \next-react\src\app\about\page.tsx
 * @Description:
 */

"use client";
import personal from "@/src/data/about";
import { motion } from "framer-motion";
import { HeartPulse, Mail, MapPin, Music2, Smartphone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function DemoPage() {
 const [visualizerData, setVisualizerData] = useState<{ height: number }[]>([]);
 const [current, setCurrent] = useState(2);

 const musicPath = "/images/home/music1.jpg";
 useEffect(() => {
  const generateVisualizerData = () => {
   const bars = 50;
   const newData = Array.from({ length: bars }, () => ({
    height: Math.random() * 20 + 10,
   }));
   setVisualizerData(newData);
  };

  generateVisualizerData();

  const interval = setInterval(() => {
   generateVisualizerData();
  }, 200);
  return () => clearInterval(interval);
 }, []);

 return (
  <motion.div
   initial={{ opacity: 0 }}
   animate={{ opacity: 1 }}
   transition={{ duration: 0.4 }}
  >
   <div className="relative min-h-screen flex justify-center items-center px-[15%]">
    {/* 背景图片 */}
    <Image
     width={350}
     height={180}
     src={musicPath}
     alt={musicPath}
     className="size-full object-cover absolute inset-0 z-0"
    />
    <div className="absolute inset-0 z-1 backdrop-blur-md bg-black/30"></div>
    {/* 内容 */}
    <div className="relative z-2 p-20 flex gap-10 backdrop-blur-xl border rounded-3xl w-full">
     <motion.div
      className="absolute right-5 top-5"
      initial={{ rotate: 0 }}
      animate={{ rotate: 360 }}
      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
     >
      <Music2 />
     </motion.div>

     {/* 左侧内容 */}
     <div className="flex flex-col gap-10 w-1/2 items-center justify-center h-full">
      {/* 专辑图片 */}
      <motion.div
       className="flex justify-center items-center w-50 h-50 rounded-full bg-cover"
       style={{
        backgroundImage: `url(${musicPath})`,
       }}
       initial={{ rotate: 0 }}
       animate={{ rotate: 360 }}
       transition={{
        duration: 10,
        repeat: Infinity,
        ease: "linear",
       }}
      >
       <div className="w-1/3 h-1/3 bg-black rounded-full"></div>
      </motion.div>

      {/* 社交媒体图标 */}
      <div className="flex gap-3">
       {personal.socialMedia.map((social, index) => (
        <motion.div key={index} className="p-1 rounded-full border-2">
         {social.icon && <social.icon size={24} />}
        </motion.div>
       ))}
      </div>

      <Link
       href="/contact"
       className="backdrop-blur-xl bg-white/10 border-2 border-white/50 rounded-2xl p-2 px-4 text-xl"
      >
       <span>Get In </span>
       <span className="text-(--active)">touch</span>
      </Link>

      {/* 音乐播放效果 */}
      <div className="flex items-end justify-center h-10 gap-1">
       {visualizerData.map((bar, index) => (
        <motion.div
         key={index}
         className="w-1 bg-white rounded-t-lg"
         initial={{ height: bar.height }}
         animate={{ height: bar.height }}
         transition={{
          duration: 0.2,
          type: "spring",
          stiffness: 300,
         }}
        />
       ))}
      </div>
     </div>

     {/* 右侧内容 */}
     <div className="w-1/2 text-center flex flex-col justify-center gap-4">
      <div className="text-3xl font-bold flex items-center justify-center gap-2">
       <span>{personal.name}</span>
       <HeartPulse className="text-(--active)" size={30} />
      </div>
      <div className="text-xl">{personal.occupation}</div>

      <div className="rounded-2xl p-2 text-center text-sm flex-1 overflow-y-auto">
       {personal.introduce.split(".").map((sentence, index) => (
        <div
         key={index}
         className="mb-2"
         style={index === current ? currentLyric : {}}
        >
         {sentence}
        </div>
       ))}
      </div>

      <div className="flex justify-between px-10">
       <div className="flex gap-0.5">
        <Smartphone className="text-sm" />
        <span>{personal.phone}</span>
       </div>
       <div className="flex gap-0.5">
        <Mail className="text-sm" />
        <span>{personal.email}</span>
       </div>
       <div className="flex gap-0.5">
        <MapPin className="text-sm" />
        <span>{personal.address}</span>
       </div>
      </div>
     </div>
    </div>
   </div>
  </motion.div>
 );
}

const currentLyric = {
 color: "var(--active)",
 fontSize: "1.2em",
 fontWeight: "bold",
 marginBottom: "0.5em 0",
};
