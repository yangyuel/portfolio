/*
 * @Author: yoyo
 * @Date: 2025-12-23 17:01:17
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-12 14:29:42
 * @FilePath: \next-react\src\components\Navbar.tsx
 * @Description:
 */

"use client";
import { usePathname } from "next/navigation";
import { SunMoon } from "./Theme";
import Link from "next/link";

const Navbar = () => {
 const pathName = usePathname();
 const bars = [
  { title: "Home", link: "/" },
  { title: "Resume", link: "/resume" },
  { title: "Service", link: "/service" },
  { title: "Portfolio", link: "/portfolio" },
  { title: "Contact", link: "/contact" },
  { title: "Demo", link: "/demo" },
 ];
 return (
  <div className="h-12 fixed z-10 top-3 w-[40%] left-[30%]">
   {/* <div className="flex items-center gap-4">
    <Link href="/" className="font-bold text-2xl">
     LOGO
    </Link>
   </div>
   <div className="flex items-center gap-4">
    {bars.map((bar) => (
     <Link
      key={bar.title}
      href={bar.link}
      className="text-foreground"
      style={{
       color: pathName === bar.link ? "var(--active)" : "var(--primary)",
      }}
     >
      {bar.title}
     </Link>
    ))}

    <Theme />
   </div> */}

   <div className="shadow-lg h-full rounded-2xl flex items-center gap-4 justify-around">
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
 );
};

export default Navbar;
