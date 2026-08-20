import { motion, useSpring, useTransform, useInView } from "framer-motion";
import { useRef, useEffect } from "react";

interface AnimatedCounterProps {
  value: number;
  suffix?: string;
  prefix?: string;
  duration?: number;
  className?: string;
}

const AnimatedCounter = ({ 
  value, 
  suffix = "", 
  prefix = "",
  duration = 2,
  className = ""
}: AnimatedCounterProps) => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  
  const spring = useSpring(0, { duration: duration * 1000 });
  const display = useTransform(spring, (current) => 
    `${prefix}${Math.floor(current)}${suffix}`
  );

  useEffect(() => {
    if (isInView) {
      spring.set(value);
    }
  }, [isInView, spring, value]);

  return (
    <motion.span ref={ref} className={className}>
      {display}
    </motion.span>
  );
};

export default AnimatedCounter;
