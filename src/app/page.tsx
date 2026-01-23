/*
 * @Author: yoyo
 * @Date: 2026-01-20 16:44:06
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-23 18:28:58
 * @FilePath: \next-react\src\app\page.tsx
 * @Description:
 */
"use client";

import { animate, motion, useSpring } from "motion/react";
import { useEffect, useRef, useState } from "react";
import { SplitText } from "gsap/SplitText";
import { gsap } from "gsap";
import About from "./about/page";
import Concat from "./contact/page";
import Service from "./service/page";
import Skill from "./skill/page";
import Experience from "./experience/page";
import Portfolio from "./portfolio/page";
import personal from "../data/about";

export default function HomePage() {
 const containerRef = useRef<HTMLDivElement>(null);
 const sectionsRef = useRef<HTMLDivElement[]>([]);
 const [index, setIndex] = useState(0);
 const [isScrolling, setIsScrolling] = useState(false);
 const scaleY = useSpring(0, {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
 });

 const sections = [
  {
   id: "about",
   name: "ABOUT",
   component: About,
  },
  {
   id: "experience",
   name: "EXPERIENCE",
   component: Experience,
  },
  {
   id: "skill",
   name: "SKILLS",
   component: Skill,
  },
  {
   id: "portfolio",
   name: "Portfolio",
   component: Portfolio,
  },
  {
   id: "service",
   name: "SERVICE",
   component: Service,
  },
  {
   id: "concat",
   name: "CONCAT",
   component: Concat,
  },
 ];

 function scrollToSection(current: number) {
  if (current < 0 || current >= sections.length) return;

  setIndex(current);
  scaleY.set((current + 1) / sections.length);

  const targetSection = sectionsRef.current[current];

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
 }

 // 滚轮事件处理
 useEffect(() => {
  const handleWheel = (e: WheelEvent) => {
   if (isScrolling) return;

   e.preventDefault();
   setIsScrolling(true);

   if (e.deltaY > 0 && index < sections.length - 1) {
    // 向下滚动
    scrollToSection(index + 1);
   } else if (e.deltaY < 0 && index > 0) {
    // 向上滚动
    scrollToSection(index - 1);
   }

   // 防抖，防止连续滚动
   setTimeout(() => setIsScrolling(false), 500);
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
 }, [index, isScrolling]);

 useEffect(() => {
  const split = SplitText.create(".logo", { type: "words, chars" });

  // now animate the characters in a staggered fashion
  gsap.from(split.chars, {
   x: 150,
   opacity: 0,
   duration: 0.7,
   ease: "power4",
   stagger: 0.04,
  });
 }, []);

 return (
  <div className="size-full">
   <div className="logo fixed top-5 left-5 font-bold text-xl cursor-pointer z-10 text-(--active)">
    {personal.name}
   </div>

   {/* content  */}
   <div ref={containerRef} className="size-full overflow-y-auto">
    {sections.map((ele, i) => (
     <motion.section
      key={ele.id}
      ref={(el: HTMLDivElement) => {
       if (el) sectionsRef.current[i] = el;
      }}
      id={ele.id}
      className="h-screen flex flex-col"
     >
      {ele.component ? <ele.component /> : null}
     </motion.section>
    ))}
   </div>

   {/* 侧边导航 */}
   <div className="fixed flex flex-col left-6 top-1/4 z-10 text-sm gap-4 w-10">
    {sections.map((ele, i) => (
     <motion.div
      key={ele.id}
      className="cursor-pointer"
      initial={index === i ? activeMenu : primaryMenu}
      animate={index === i ? activeMenu : primaryMenu}
      onClick={() => scrollToSection(i)}
      whileHover={{ scale: 1.2, opacity: 1 }}
     >
      {ele.id}
     </motion.div>
    ))}
   </div>

   {/* 社交媒体图标 */}
   <div className="flex flex-col gap-3 fixed left-6 bottom-20 z-10">
    {personal.socialMedia.map((social, index) => (
     <div key={index} className="p-1 rounded-full bg-(--secondary-foreground)">
      {social.icon && <social.icon size={16} color="var(--active)" />}
     </div>
    ))}
   </div>

   {/* 滚动条 */}
   <div className="fixed right-10 top-1/2 z-10 h-1/2 w-0.5 bg-(--primary)/50 -translate-y-1/2 flex">
    <motion.div
     className="w-full bg-(--active)"
     style={{
      scaleY,
     }}
    />
   </div>
  </div>
 );
}

const activeMenu = {
 opacity: 1,
 scale: 1.2,
 color: "var(--active)",
 fontWeight: "bold",
};

const primaryMenu = {
 opacity: 0.5,
 scale: 1,
 color: "var(--foreground)",
 fontWeight: "normal",
};
