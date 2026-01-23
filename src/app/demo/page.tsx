// components/ScrollAnchors.tsx
"use client";

import { motion, useScroll, useTransform, animate } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface AnchorSection {
 id: string;
 title: string;
 content: string;
}

export default function ScrollAnchors() {
 const containerRef = useRef<HTMLDivElement>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);
 const { scrollY } = useScroll();
 const [currentSection, setCurrentSection] = useState(0);
 const [isScrolling, setIsScrolling] = useState(false);

 // 锚点数据
 const sections: AnchorSection[] = [
  { id: "section-1", title: "第一节", content: "这是第一节的内容..." },
  { id: "section-2", title: "第二节", content: "这是第二节的内容..." },
  { id: "section-3", title: "第三节", content: "这是第三节的内容..." },
  { id: "section-4", title: "第四节", content: "这是第四节的内容..." },
 ];

 // 滚动到指定区域
 const scrollToSection = (index: number) => {
  if (index < 0 || index >= sections.length) return;

  setCurrentSection(index);
  const targetSection = sectionsRef.current[index];

  if (targetSection && containerRef.current) {
   const container = containerRef.current;
   const targetTop = targetSection.offsetTop;

   // 使用 Framer Motion 的 animate 实现平滑滚动
   animate(container.scrollTop, targetTop, {
    type: "spring",
    stiffness: 100,
    damping: 20,
    onUpdate: (value) => {
     container.scrollTop = value;
    },
   });
  }
 };

 // 滚轮事件处理
 useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
   if (isScrolling) return;

   e.preventDefault();
   setIsScrolling(true);

   if (e.deltaY > 0 && currentSection < sections.length - 1) {
    // 向下滚动
    scrollToSection(currentSection + 1);
   } else if (e.deltaY < 0 && currentSection > 0) {
    // 向上滚动
    scrollToSection(currentSection - 1);
   }

   // 防抖，防止连续滚动
   setTimeout(() => setIsScrolling(false), 1000);
  };

  const container = containerRef.current;
  if (container) {
   container.addEventListener("wheel", handleWheel, { passive: false });
  }

  return () => {
   if (container) {
    container.removeEventListener("wheel", handleWheel);
   }
  };
 }, [currentSection, isScrolling]);

 // 导航点击处理
 const handleNavClick = (index: number) => {
  if (isScrolling) return;
  setIsScrolling(true);
  scrollToSection(index);
  setTimeout(() => setIsScrolling(false), 1000);
 };

 return (
  <div className="flex h-screen">
   {/* 侧边导航 */}
   <motion.nav
    className="fixed left-8 top-1/2 -translate-y-1/2 z-10"
    initial={{ opacity: 0, x: -20 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.5 }}
   >
    <div className="flex flex-col items-center gap-4">
     {sections.map((section, index) => (
      <button
       key={section.id}
       onClick={() => handleNavClick(index)}
       className="relative group"
      >
       {/* 导航点 */}
       <motion.div
        className={`w-3 h-3 rounded-full transition-all duration-300 ${
         currentSection === index
          ? "bg-blue-500 scale-125"
          : "bg-gray-300 hover:bg-gray-400"
        }`}
        whileHover={{ scale: 1.2 }}
        whileTap={{ scale: 0.9 }}
       />

       {/* 工具提示 */}
       <div className="absolute left-8 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
        <span className="text-sm bg-gray-800 text-white px-2 py-1 rounded">
         {section.title}
        </span>
       </div>

       {/* 连接线（最后一个不显示） */}
       {index < sections.length - 1 && (
        <motion.div
         className="h-8 w-0.5 bg-gray-300 mx-auto mt-1"
         initial={{ scaleY: 0 }}
         animate={{ scaleY: 1 }}
         transition={{ delay: index * 0.1 }}
        />
       )}
      </button>
     ))}
    </div>
   </motion.nav>

   {/* 主内容区域 */}
   <div
    ref={containerRef}
    className="flex-1 overflow-y-auto snap-y snap-mandatory scroll-smooth"
    style={{ scrollBehavior: "smooth" }}
   >
    {sections.map((section, index) => (
     <motion.section
      key={section.id}
      ref={(el: HTMLDivElement) => {
       if (el) sectionsRef.current[index] = el;
      }}
      id={section.id}
      className="h-screen flex items-center justify-center snap-start relative"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
     >
      <div className="max-w-4xl mx-auto px-8 text-center">
       <motion.h2
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
       >
        {section.title}
       </motion.h2>

       <motion.p
        className="text-xl text-gray-600 mb-8"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.4 }}
       >
        {section.content}
       </motion.p>

       {/* 滚动指示器 */}
       {index < sections.length - 1 && (
        <motion.div
         className="absolute bottom-8 left-1/2 -translate-x-1/2"
         animate={{ y: [0, 10, 0] }}
         transition={{ repeat: Infinity, duration: 2 }}
        >
         <span className="text-gray-400 text-sm">向下滚动</span>
         <svg
          className="w-6 h-6 mx-auto mt-2 text-gray-400"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
         >
          <path
           strokeLinecap="round"
           strokeLinejoin="round"
           strokeWidth={2}
           d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
         </svg>
        </motion.div>
       )}
      </div>
     </motion.section>
    ))}
   </div>

   {/* 当前进度指示器 */}
   <motion.div
    className="fixed right-8 top-1/2 -translate-y-1/2"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.5 }}
   >
    <div className="text-center">
     <span className="text-2xl font-bold text-blue-500">
      {currentSection + 1}
     </span>
     <span className="text-gray-400">/{sections.length}</span>
    </div>
   </motion.div>
  </div>
 );
}
