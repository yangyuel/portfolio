/*
 * @Author: yoyo
 * @Date: 2025-12-24 15:39:21
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-21 17:43:30
 * @FilePath: \next-react\src\app\contact\page.tsx
 * @Description:
 */
"use client";

import { AnimateFadeIn } from "@/src/components/AnimateCom";
import ElectricBorder from "@/src/components/ElectricBorder";
import personal from "@/src/data/about";
import { Mail, MapPin, Smartphone } from "lucide-react";
import { Transition } from "motion/react";
import * as motion from "motion/react-client";

export default function resumePage() {
 return (
  <div className="size-full flex-center">
   <div className="flex gap-10 w-3/5">
    <div className="w-1/2">
     <div className="text-5xl font-bold mb-10">
      Get In <span className="text-(--active)">Touch</span>
     </div>

     <div className="border-l-4 border-(--active) px-6 py-10 opacity-90">
      <div className="mb-10">
       <div className="opacity-30 mb-3">Store hours</div>
       <div>{personal.address}</div>
       <div className="text-(--active) mt-1">Available for work</div>
      </div>
      <div>
       <div className="opacity-30 mb-3">Contacts</div>
       <div className="flex gap-2">
        <Smartphone size={20} />
        {personal.phone}
       </div>
       <div className="flex gap-2 mt-1">
        <Mail size={20} />
        {personal.email}
       </div>
      </div>
     </div>
     <div className="flex gap-3 mt-30">
      {personal.socialMedia.map((social, index) => (
       <motion.div key={index} className="p-1 rounded-full border-2 opacity-50">
        {social.icon && <social.icon size={20} />}
       </motion.div>
      ))}
     </div>
    </div>

    <AnimateFadeIn className="relative w-1/2 mx-10">
     {/* <div className="absolute text-center w-full top-2 left-0 text-2xl">
       Contact Form
      </div> */}

     <ElectricBorder className="size-full">
      <div className="size-full p-10 flex flex-col gap-4">
       <div className="text-center w-full text-2xl">Contact Form</div>
       <div className="flex-1 flex flex-col gap-2">
        <div className="opacity-60">NAME</div>
        <input style={formInput} type="text" />
        <div className="opacity-60">EMAIL</div>
        <input style={formInput} type="text" />
        <div className="opacity-60 mt-2">MESSAGE</div>
        <textarea style={formTextarea} />
       </div>

       <div className="w-full bg-(--active) h-12 flex-center">SEND MESSAGE</div>
      </div>
     </ElectricBorder>
     {/* <div
      className="border-l-2 border-t-2 top-0 left-0"
      style={borderBox}
     ></div>
     <div
      className="border-r-2 border-t-2 top-0 right-0"
      style={borderBox}
     ></div>
     <div
      className="border-l-2 border-b-2 bottom-0 left-0"
      style={borderBox}
     ></div>
     <div
      className="border-r-2 border-b-2 right-0 bottom-0"
      style={borderBox}
     ></div> */}
    </AnimateFadeIn>
   </div>
  </div>
 );
}

const borderBox: React.CSSProperties = {
 width: "120px",
 height: "120px",
 borderColor: "var(--active)",
 position: "absolute",
};

const formInput: React.CSSProperties = {
 width: "100%",
 height: "40px",
 borderBottom: "1px solid var(--foreground)",
};

const formTextarea: React.CSSProperties = {
 width: "100%",
 height: "80px",
 border: "1px solid var(--foreground)",
};
