/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-12 14:34:28
 * @FilePath: \next-react\src\app\portfolio\page.tsx
 * @Description:
 */
"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowDown, ArrowUp, CalendarDays, Link } from "lucide-react";
import portfolios from "@/src/data/portfolio";
import { AnimateFadeIn } from "@/src/components/AnimateCom";
import { MenuToggle } from "@/src/components/MenuToggle";

export default function PortfolioPage() {
 const [isOpen, setIsOpen] = useState(false);

 const [portfolio, setPortfolio] = useState(portfolios[0]);
 const [currentIndex, setCurrentIndex] = useState(0);
 const [currentImgIndex, setCurrentImgIndex] = useState(0);

 const baseUrl = "/images/portfolio/";

 function handleNext() {
  if (currentIndex === portfolios.length - 1) {
   setCurrentIndex(0);
  } else {
   setCurrentIndex(currentIndex + 1);
  }
 }

 function handlePrev() {
  if (currentIndex === 0) {
   setCurrentIndex(portfolios.length - 1);
  } else {
   setCurrentIndex(currentIndex - 1);
  }
 }

 function playFn(index: number) {
  setCurrentIndex(index);
  setIsOpen(false);
 }

 useEffect(() => {
  const interval = setInterval(() => {
   if (currentImgIndex >= portfolio.imgs.length - 1) {
    setCurrentImgIndex(0);
   } else {
    setCurrentImgIndex(currentImgIndex + 1);
   }
  }, 5000);

  return () => clearInterval(interval);
 }, [currentImgIndex, portfolio.imgs.length]);

 useEffect(() => {
  setPortfolio(portfolios[currentIndex]);
 }, [currentIndex]);

 return (
  <div className="size-full flex gap-15 overflow-hidden">
   <div className="h-full flex-1 p-40 flex flex-col">
    <div className="relative font-bold">
     <div className="text-9xl opacity-20">0{currentIndex + 1}</div>
     <div className="absolute top-1/3 text-4xl">{portfolio.name}</div>
    </div>

    <div className="flex gap-2 text-(--active)">
     <Link size={20} />
     <span>{portfolio.site}</span>
    </div>
    <div className="flex gap-2">
     <CalendarDays size={20} className="text-(--active)" />
     <span>{portfolio.time}</span>
    </div>

    <div className="my-10 w-full h-px bg-linear-to-r from-(--active)/20 to-transparent"></div>

    <AnimateFadeIn className="flex-1" delay={0.2}>
     <span className="opacity-50 ">{portfolio.des}</span>
    </AnimateFadeIn>

    <div className="flex gap-2 mt-4">
     {portfolio.technology.map((tech, index) => {
      return (
       <div
        key={index}
        className="bg-(--active)/20 text-(--active) px-3 rounded-sm"
       >
        {tech}
       </div>
      );
     })}
    </div>
   </div>

   {/* 项目列表 */}
   <div
    className="w-1/4 h-full p-8"
    style={{ backgroundColor: "var(--primary)" }}
   >
    <div className="flex justify-end">
     <MenuToggle toggle={() => setIsOpen(!isOpen)} isOpen={isOpen} />
    </div>

    {!isOpen && (
     <AnimateFadeIn className="size-full relative">
      {/* 项目图片框 */}
      <div className="absolute w-full h-1/2 top-1/4 -left-1/2">
       <AnimatePresence mode="wait">
        <motion.img
         key={currentImgIndex}
         src={`${baseUrl}${portfolio.imgs[currentImgIndex]}`}
         alt={`Slide ${currentImgIndex + 1}`}
         className="size-full object-cover"
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.5 }}
        />
       </AnimatePresence>

       <div className="w-30 h-30 absolute -bottom-15 -right-15 overflow-hidden">
        {Array.from({ length: 20 }).map((_, i) => (
         <motion.div
          key={`v-${i}`}
          className="absolute w-px opacity-30"
          style={{
           left: `${(i + 1) * 10 - 80}%`,
           top: "-30px",
           height: "200%",
           transform: "rotate(45deg)",
           backgroundColor: "var(--background)",
          }}
          initial={{ opacity: 0 }}
          animate={{
           opacity: [0.1, 0.6, 0.1],
          }}
          transition={{
           duration: 2,
           delay: i * 0.1 + 0.5,
           repeat: Infinity,
           repeatType: "reverse",
          }}
         />
        ))}
       </div>
      </div>

      {/* 导航框 */}
      <div className="h-full flex flex-col items-center justify-center gap-4 pl-30">
       <ArrowUp
        color="var(--background)"
        className="cursor-pointer"
        onClick={handlePrev}
       />
       <div className="flex flex-col gap-2">
        {portfolios.map((ele, index) => (
         <motion.div
          key={index}
          className="w-2 h-2 rounded-full"
          initial={{ opacity: index === currentIndex ? 0.2 : 1 }}
          animate={{ opacity: index === currentIndex ? 1 : 0.2 }}
          transition={{ duration: 0.3 }}
          style={{
           backgroundColor: "var(--background)",
          }}
         ></motion.div>
        ))}
       </div>
       <ArrowDown
        color="var(--background)"
        className="cursor-pointer"
        onClick={handleNext}
       />
      </div>
     </AnimateFadeIn>
    )}

    {isOpen && (
     <AnimateFadeIn className="h-full flex flex-col gap-8 py-6 relative pl-10 text-(--primary-foreground)">
      {portfolios.map((item, index) => {
       return (
        <motion.div
         key={index}
         className="pl-12 p-2 h-15 cursor-pointer rounded-sm relative bg-(--secondary)"
         whileHover={{
          x: -10,
          transition: { duration: 0.3 },
          color: "var(--active)",
         }}
         onClick={() => playFn(index)}
        >
         <div className="rounded-full w-20 h-20 bg-cover absolute bottom-0 -left-10 flex items-center justify-center bg-(--foreground) border-2 border-(--secondary)">
          <motion.img
           width={40}
           height={40}
           src={`${baseUrl}${item.imgs[0]}`}
           alt={item.name}
           className="rounded-full w-3/5 h-3/5"
          />
         </div>
         <div className="font-bold">{item.name}</div>
         <div className="text-sm opacity-50">{item.time}</div>
        </motion.div>
       );
      })}
     </AnimateFadeIn>
    )}
   </div>
  </div>
 );
}
