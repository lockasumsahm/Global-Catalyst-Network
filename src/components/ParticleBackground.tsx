import { motion } from "framer-motion";
import { useMemo } from "react";
import { useLiteMotion } from "@/hooks/use-lite-motion";

interface ParticleBackgroundProps {
  count?: number;
  className?: string;
}

const ParticleBackground = ({ count = 15, className = "" }: ParticleBackgroundProps) => {
  const lite = useLiteMotion();
  const particles = useMemo(() => {
    return Array.from({ length: Math.min(count, 20) }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 3 + 1,
      duration: Math.random() * 25 + 20,
      delay: Math.random() * 5,
    }));
  }, [count]);

  if (lite) return null;

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-primary/25"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: particle.size,
            height: particle.size,
            willChange: "transform, opacity",
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.6, 0.2],
            scale: [1, 1.5, 1],
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
};

export default ParticleBackground;
