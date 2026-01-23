/*
 * @Author: yoyo
 * @Date: 2025-12-26 17:15:33
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-23 18:29:25
 * @FilePath: \next-react\src\data\about.ts
 * @Description:
 */

import { Facebook, Github, Linkedin } from "lucide-react";

const personal = {
 name: "ALEX SMITH",
 occupation: "Web Developer",
 email: "1458032960@qq.com",
 phone: "19112345678",
 address: "Chengdu, China",
 imgs: ["star.jpg", "sea.jpg"],
 introduce:
  "Hello! I’m Alex Smith. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean fermentum ullamcorper sem, at placerat dolor volutpat ac. Duis nulla enim, condimentum nec ultricies.",
 socialMedia: [
  {
   platform: "GitHub",
   url: "https://github.com/yoyo",
   icon: Github,
  },
  {
   platform: "LinkedIn",
   url: "https://www.linkedin.com/in/yoyo",
   icon: Linkedin,
  },
  {
   platform: "facebook",
   url: "https://www.facebook.com/yoyo",
   icon: Facebook,
  },
 ],
};

export default personal;
