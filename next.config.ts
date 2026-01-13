/*
 * @Author: yoyo
 * @Date: 2025-12-12 17:31:13
 * @LastEditors: yoyo
 * @LastEditTime: 2025-12-23 17:28:15
 * @FilePath: \next-react\next.config.ts
 * @Description:
 */
import type { NextConfig } from "next";
import tailwindcss from "tailwindcss";

const nextConfig: NextConfig = {
 /* config options here */
 // experimental options can be added here if needed
 experimental: {
  optimizeCss: true,
 },
};

export default nextConfig;
