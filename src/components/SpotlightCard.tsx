import {
 motion,
 SpringOptions,
 useMotionValue,
 useSpring,
} from "framer-motion";
import React, { useRef, useState } from "react";

interface Position {
 x: number;
 y: number;
}

interface SpotlightCardProps extends React.PropsWithChildren {
 className?: string;
 spotlightColor?: `rgba(${number}, ${number}, ${number}, ${number})`;
 rotateAmplitude?: number;
}

const springValues: SpringOptions = {
 damping: 30,
 stiffness: 100,
 mass: 2,
};

const SpotlightCard: React.FC<SpotlightCardProps> = ({
 children,
 className = "",
 rotateAmplitude = 6,
 spotlightColor = "var(--active)",
}) => {
 const divRef = useRef<HTMLDivElement>(null);
 const [isFocused, setIsFocused] = useState<boolean>(false);
 const [position, setPosition] = useState<Position>({ x: 0, y: 0 });

 const x = useMotionValue(0);
 const y = useMotionValue(0);
 const rotateX = useSpring(useMotionValue(0), springValues);
 const rotateY = useSpring(useMotionValue(0), springValues);
 const scale = useSpring(1, springValues);

 const opacity = useSpring(0);
 const rotateFigcaption = useSpring(0, {
  stiffness: 350,
  damping: 30,
  mass: 1,
 });
 const [lastY, setLastY] = useState(0);

 const handleMouseMove: React.MouseEventHandler<HTMLDivElement> = (e) => {
  if (!divRef.current || isFocused) return;

  const rect = divRef.current.getBoundingClientRect();
  const offsetX = e.clientX - rect.left - rect.width / 2;
  const offsetY = e.clientY - rect.top - rect.height / 2;

  const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
  const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

  rotateX.set(rotationX);
  rotateY.set(rotationY);

  x.set(e.clientX - rect.left);
  y.set(e.clientY - rect.top);

  const velocityY = offsetY - lastY;
  rotateFigcaption.set(-velocityY * 0.6);
  setLastY(offsetY);
  setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
 };

 const handleFocus = () => {
  setIsFocused(true);
  opacity.set(0.3);
 };

 const handleBlur = () => {
  setIsFocused(false);
  opacity.set(0);
 };

 const handleMouseEnter = () => {
  opacity.set(0.3);
 };

 const handleMouseLeave = () => {
  opacity.set(0);
  scale.set(1);
  rotateX.set(0);
  rotateY.set(0);
  rotateFigcaption.set(0);
 };

 return (
  <figure className="perspective-midrange">
   <motion.div
    ref={divRef}
    onMouseMove={handleMouseMove}
    onFocus={handleFocus}
    onBlur={handleBlur}
    onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    className={`relative ${className}`}
    style={{
     rotateX,
     rotateY,
     scale,
    }}
   >
    <motion.div
     className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-100"
     style={{
      opacity,
      background: `radial-gradient(circle at ${position.x}px ${position.y}px, ${spotlightColor}, transparent 80%)`,
     }}
    />
    {children}
   </motion.div>
  </figure>
 );
};

export default SpotlightCard;
