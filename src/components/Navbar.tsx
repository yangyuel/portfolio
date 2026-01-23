/*
 * @Author: yoyo
 * @Date: 2025-12-23 17:01:17
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-20 18:22:29
 * @FilePath: \next-react\src\components\Navbar.tsx
 * @Description:
 */

"use client";
import { usePathname } from "next/navigation";
import { SunMoon } from "./Theme";
import Link from "next/link";
import { useEffect, useState } from "react";

const Navbar = () => {
 const pathName = usePathname();
 const [scrollY, setScrollY] = useState(
  typeof window !== "undefined" ? window.scrollY : 0,
 );

 const bars = [
  { title: "Home", link: "/" },
  { title: "About", link: "/about" },
  { title: "Experience", link: "/experience" },
  { title: "Skill", link: "/skill" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Service", link: "/service" },
  { title: "Contact", link: "/contact" },
 ];

 useEffect(() => {
  const handleScroll = () => {
   setScrollY(window.scrollY);
  };
  window.addEventListener("scroll", handleScroll);
  return () => {
   window.removeEventListener("scroll", handleScroll);
  };
 }, []);
 return (
  <>
   <div
    className="h-16 fixed z-10 w-full px-[30%] transition-all duration-1000"
    style={{
     backdropFilter: scrollY > 40 ? "blur(24px)" : "none",
     //  background: "linear-gradient(to bottom, rgba(0,0,0,0.8), rgba(0,0,0,0))",
    }}
   >
    <div className="h-full rounded-2xl flex items-center gap-4 justify-around">
     {bars.map((bar) => (
      <Link
       key={bar.title}
       href={bar.link}
       style={{
        color: pathName === bar.link ? "var(--active)" : "var(--primary)",
       }}
      >
       {bar.title}
      </Link>
     ))}

     <SunMoon />
    </div>
   </div>
  </>
 );
};

export default Navbar;
