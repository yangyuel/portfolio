import { motion } from "framer-motion";

export default function HomeTitle({ title }: { title: string }) {
 return (
  <div className="flex flex-col items-center mb-10">
   <motion.div
    className="text-2xl mb-2"
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
   >
    {title}
   </motion.div>
   <motion.div
    className="bg-(--active) h-0.5"
    initial={{ width: "0px" }}
    whileInView={{ width: "120px" }}
   ></motion.div>
  </div>
 );
}
