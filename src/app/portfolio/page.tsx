/*
 * @Author: yoyo
 * @Date: 2025-12-24 14:19:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-22 16:00:55
 * @FilePath: \next-react\src\app\portfolio\page.tsx
 * @Description:
 */
"use client";
import MagicBento from "@/src/components/MagicBento";

export default function PortfolioPage() {
 return (
  <div className="size-full flex-center">
   <MagicBento
    textAutoHide={true}
    enableStars
    enableSpotlight
    enableBorderGlow={true}
    enableTilt={false}
    enableMagnetism={false}
    clickEffect
    spotlightRadius={400}
    particleCount={12}
    glowColor="132, 0, 255"
    disableAnimations={false}
   />
  </div>
 );
}
