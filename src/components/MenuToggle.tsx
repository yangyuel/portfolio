import { motion, Variants } from "framer-motion";

interface PathProps {
 d?: string;
 variants: Variants;
 transition?: { duration: number };
}

const Path = (props: PathProps) => (
 <motion.path
  fill="transparent"
  strokeWidth="3"
  stroke="var(--background)"
  strokeLinecap="round"
  {...props}
 />
);

export const MenuToggle = ({
 toggle,
 isOpen,
}: {
 toggle: () => void;
 isOpen: boolean;
}) => (
 <motion.div
  onClick={toggle}
  initial={false}
  animate={isOpen ? "open" : "closed"}
  className="w-6 h-6 cursor-pointer"
 >
  <svg width="24" height="24" viewBox="0 0 23 23">
   <Path
    variants={{
     closed: { d: "M 2 2.5 L 20 2.5" },
     open: { d: "M 3 16.5 L 17 2.5" },
    }}
   />
   <Path
    d="M 2 9.423 L 20 9.423"
    variants={{
     closed: { opacity: 1 },
     open: { opacity: 0 },
    }}
    transition={{ duration: 0.1 }}
   />
   <Path
    variants={{
     closed: { d: "M 2 16.346 L 20 16.346" },
     open: { d: "M 3 2.5 L 17 16.346" },
    }}
   />
  </svg>
 </motion.div>
);
