import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useState, useRef, useCallback } from "react";

interface GlowingCardProps {
  children: ReactNode;
  className?: string;
  glowColor?: string;
}

const GlowingCard = ({ 
  children, 
  className = "",
  glowColor = "hsl(var(--primary))"
}: GlowingCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!rectRef.current && containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    
    if (rectRef.current) {
      mouseX.set(e.clientX - rectRef.current.left);
      mouseY.set(e.clientY - rectRef.current.top);
    }
  }, [mouseX, mouseY]);

  const handleMouseEnter = () => {
    if (containerRef.current) {
      rectRef.current = containerRef.current.getBoundingClientRect();
    }
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={containerRef}
      className={`relative overflow-hidden ${className}`}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.3 }}
      style={{ willChange: "transform" }}
    >
      {/* Glow effect */}
      <motion.div
        className="absolute pointer-events-none rounded-full blur-3xl"
        style={{
          left: mouseX,
          top: mouseY,
          translateX: "-50%",
          translateY: "-50%",
          width: 200,
          height: 200,
          background: glowColor,
          opacity: isHovered ? 0.15 : 0,
        }}
        transition={{ duration: 0.3 }}
      />
      
      {/* Content */}
      <div className="relative z-10">
        {children}
      </div>
    </motion.div>
  );
};

export default GlowingCard;
