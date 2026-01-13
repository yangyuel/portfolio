/*
 * @Author: yoyo
 * @Date: 2025-12-24 15:39:21
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-08 17:39:17
 * @FilePath: \next-react\src\components\Theme.tsx
 * @Description:
 */
"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Moon, Palette, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function SunMoon() {
 const { theme, setTheme } = useTheme();
 const [mounted, setMounted] = useState(false);

 useEffect(() => {
  // eslint-disable-next-line react-hooks/set-state-in-effect
  setMounted(true);
 }, []);

 function toggleTheme() {
  const newTheme = theme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  setTheme(newTheme);
 }

 if (!mounted) {
  return (
   <button
    className="w-16 h-7 rounded-2xl  flex items-center px-1 cursor-pointer border justify-start dark:justify-end"
    style={{
     backgroundColor: "var(--primary-foreground)",
    }}
   ></button>
  );
 }

 return (
  <button
   className={`w-16 h-7 rounded-2xl flex items-center px-1 cursor-pointer border ${
    theme === "dark" ? "justify-end" : "justify-start"
   }`}
   style={{
    backgroundColor: "var(--primary-foreground)",
   }}
   onClick={toggleTheme}
  >
   <motion.div layout>
    {theme === "dark" ? (
     <Moon className="text-white text-sm" />
    ) : (
     <Sun className="text-black text-sm" />
    )}
   </motion.div>
  </button>
 );
}

export function ThemeColor() {
 const [show, setShow] = useState(false);
 const colors = ["#fd3f92", "#837cda", "#ff770f", "#ad0013"];

 function setTheme(color: string) {
  localStorage.setItem("theme-color", color);
  setThemeColor(color);
 }

 function setThemeColor(color: string) {
  document.documentElement.style.setProperty("--color-theme", color);
  document.documentElement.style.setProperty("--color-dark-theme", color);
 }

 useEffect(() => {
  const color = localStorage.getItem("theme-color") || "#fd3f92";
  setThemeColor(color);
 }, []);

 return (
  <motion.div className="fixed top-1/3 right-0 z-100 flex gap-2 items-center">
   <AnimatePresence initial={false}>
    {show &&
     colors.map((ele, index) => (
      <motion.div
       key={ele}
       className="w-8 h-8 rounded-full border cursor-pointer"
       style={{ backgroundColor: ele }}
       onClick={() => setTheme(ele)}
       initial={{ opacity: 0, scale: 0 }}
       animate={{ opacity: 1, scale: 1 }}
       exit={{ opacity: 0, scale: 0 }}
       transition={{
        duration: 0.3,
        delay: 0.2 * (colors.length - index),
       }}
      ></motion.div>
     ))}
   </AnimatePresence>

   <div
    className="bg-(--secondary-foreground) p-1 rounded-full cursor-pointer"
    onClick={() => setShow(!show)}
   >
    <Palette color="var(--active)" size={30} />
   </div>
  </motion.div>
 );
}
