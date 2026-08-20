import { motion, useMotionValue, useSpring } from "framer-motion";
import { ReactNode, useRef, useCallback } from "react";

interface MagneticButtonProps {
  children: ReactNode;
  className?: string;
}

const MagneticButton = ({ children, className = "" }: MagneticButtonProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const rectRef = useRef<DOMRect | null>(null);
  
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springConfig = { damping: 15, stiffness: 150 };
  const xSpring = useSpring(x, springConfig);
  const ySpring = useSpring(y, springConfig);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!ref.current) return;
    
    if (!rectRef.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
    
    const rect = rectRef.current;
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    
    x.set((e.clientX - centerX) * 0.3);
    y.set((e.clientY - centerY) * 0.3);
  }, [x, y]);

  const handleMouseEnter = () => {
    if (ref.current) {
      rectRef.current = ref.current.getBoundingClientRect();
    }
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    rectRef.current = null;
  };

  return (
    <motion.div
      ref={ref}
      className={className}
      style={{ x: xSpring, y: ySpring, willChange: "transform" }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
    </motion.div>
  );
};

export default MagneticButton;
