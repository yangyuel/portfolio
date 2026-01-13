/*
 * @Author: yoyo
 * @Date: 2026-01-13 10:14:34
 * @LastEditors: yoyo
 * @LastEditTime: 2026-01-13 10:20:06
 * @FilePath: \next-react\src\app\demo\page.tsx
 * @Description:
 */

"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./styles.css"; // 包含基础布局样式

const items = [
 { id: "a", title: "城市探险", subtitle: "发现你身边的美", category: "旅行" },
 { id: "b", title: "高效办公", subtitle: "提升你的工作效率", category: "工具" },
];

export default function AppStoreGallery() {
 const [selectedId, setSelectedId] = useState("");

 return (
  <div className="container">
   {/* 1. 卡片列表 */}
   <div className="card-list">
    {items.map((item) => (
     <motion.div
      className="card"
      key={item.id}
      layoutId={item.id} // 核心：共享 ID
      onClick={() => setSelectedId(item.id)}
     >
      <motion.div className="card-content">
       <motion.h3 className="category">{item.category}</motion.h3>
       <motion.h2 className="title">{item.title}</motion.h2>
      </motion.div>
     </motion.div>
    ))}
   </div>

   {/* 2. 展开后的详情视图 */}
   <AnimatePresence>
    {selectedId && (
     <div className="overlay-container">
      {/* 背景遮罩 */}
      <motion.div
       className="overlay"
       initial={{ opacity: 0 }}
       animate={{ opacity: 1 }}
       exit={{ opacity: 0 }}
       onClick={() => setSelectedId("")}
      />

      {/* 展开的卡片 */}
      <motion.div
       className="expanded-card"
       layoutId={selectedId} // 核心：与列表卡片 ID 一致
      >
       <div className="expanded-content">
        <motion.h3 className="category">
         {items.find((i) => i.id === selectedId)?.category}
        </motion.h3>
        <motion.h2 className="title">
         {items.find((i) => i.id === selectedId)?.title}
        </motion.h2>
        <motion.p
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ delay: 0.2 }}
        >
         这里是详细的内容介绍。当卡片展开时，这些额外的文字会通过简单的淡入效果显示出来。
        </motion.p>
        <button className="close-btn" onClick={() => setSelectedId("")}>
         关闭
        </button>
       </div>
      </motion.div>
     </div>
    )}
   </AnimatePresence>
  </div>
 );
}
