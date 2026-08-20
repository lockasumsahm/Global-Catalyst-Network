import { ArrowRight, Globe, Users, BookOpen, DollarSign, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroBg from "@/assets/hero-bg.webp";
import { motion, useScroll, useTransform, type Variants } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import AnimatedCounter from "./AnimatedCounter";
import ParticleBackground from "./ParticleBackground";
import { useLiteMotion } from "@/hooks/use-lite-motion";

interface StatProps {
  icon: React.ReactNode;
  value: number;
  suffix?: string;
  prefix?: string;
  label: string;
  index: number;
}

const StatCard = ({ icon, value, suffix = "", prefix = "", label, index }: StatProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40, scale: 0.9 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ 
        duration: 0.6, 
        delay: 0.5 + index * 0.1,
        ease: [0.22, 1, 0.36, 1]
      }}
      whileHover={{ 
        y: -8, 
        scale: 1.02,
        transition: { duration: 0.3 }
      }}
      className="glass-card rounded-2xl p-6 text-center group cursor-pointer"
    >
      <motion.div 
        className="flex justify-center mb-3"
        whileHover={{ scale: 1.1, rotate: 5 }}
        transition={{ duration: 0.3 }}
      >
        <div className="p-3 rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
          {icon}
        </div>
      </motion.div>
      <div className="text-3xl font-serif font-bold text-foreground mb-1">
        <AnimatedCounter value={value} suffix={suffix} prefix={prefix} />
      </div>
      <div className="text-sm text-muted-foreground">{label}</div>
    </motion.div>
  );
};

const Hero = () => {
  const containerRef = useRef(null);
  const lite = useLiteMotion();
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 0.5], [1, 0.95]);

  const stats = [
    { icon: <Globe size={24} />, value: 3, label: "Countries Active" },
    { icon: <Users size={24} />, value: 4, label: "Students Engaged" },
    { icon: <BookOpen size={24} />, value: 1, label: "Initiatives" },
    { icon: <DollarSign size={24} />, value: 20, prefix: "$", label: "Funds Raised" },
  ];

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.06,
        delayChildren: 0.04
      }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 18 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.4, ease: "easeOut" }
    }
  };

  return (
    <section
      ref={containerRef}
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden surface-grain"
    >
      {/* Parallax Background Image */}
      <motion.div 
        className="absolute inset-0"
        style={lite ? undefined : { y, willChange: "transform" }}
      >
        <img
          src={heroBg}
          alt="Youth collaboration"
          className="w-full h-full object-cover scale-105 brightness-110 contrast-105"
          loading="eager"
          fetchPriority="high"
          decoding="async"
        />
        <div className="absolute inset-0 bg-gradient-hero" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />
      </motion.div>

      {/* Particle Effects */}
      <ParticleBackground count={15} />

      {/* Animated floating orbs */}
      {lite ? (
        <>
          <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl" />
          <div className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-teal/10 blur-3xl" />
        </>
      ) : (
        <>
          <motion.div
            className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-primary/10 blur-3xl will-change-transform"
            animate={{ y: [0, -40, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute bottom-1/4 right-10 w-80 h-80 rounded-full bg-teal/10 blur-3xl will-change-transform"
            animate={{ y: [0, 50, 0] }}
            transition={{ duration: 10, delay: 2, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] max-w-[100vw] rounded-full bg-gold/5 blur-3xl" />
        </>
      )}

      {/* Content */}
      <motion.div 
        className="container mx-auto px-4 pt-28 pb-12 sm:pt-24 relative z-10"
        style={lite ? undefined : { opacity, scale, willChange: "opacity, transform" }}
      >
        <motion.div 
          className="max-w-4xl mx-auto text-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/30 mb-8"
          >
            <motion.span 
              className="w-2 h-2 rounded-full bg-primary"
              animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            />
            <span className="text-sm font-medium text-primary flex items-center gap-2">
              <Sparkles size={14} />
              Youth-Led Organization
            </span>
          </motion.div>

          {/* Headline — painted immediately for a fast LCP */}
          <h1 className="text-[2rem] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold mb-6 leading-tight hero-text-shadow">
            <span className="text-foreground">Global Catalyst</span>
            <br />
            <span className="text-gradient-gold text-shimmer inline-block">Network</span>
          </h1>

          {/* Subheadline */}
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 leading-relaxed px-2 hero-text-shadow">
            Empowering Youth Through Innovation, Cultural Exchange & Global
            Impact. Join a worldwide platform for students and young leaders to
            create positive change.
          </p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-16"
          >
            <Link to="/join" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button variant="hero" size="xl" className="group w-full sm:w-auto">
                  Join the Movement
                  <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                </Button>
              </motion.div>
            </Link>
            <Link to="/join" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="w-full sm:w-auto">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="w-full sm:w-auto"
              >
                <Button variant="hero-outline" size="xl" className="w-full sm:w-auto">
                  Register Your Initiative
                </Button>
              </motion.div>
            </Link>
          </motion.div>

          {/* SDG Alignment */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center gap-3 mb-16"
          >
            {["SDG 4", "SDG 9", "SDG 16", "SDG 17"].map((sdg, index) => (
              <motion.span
                key={sdg}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.7 + index * 0.1 }}
                whileHover={{ scale: 1.1, y: -2 }}
                className="px-4 py-2 rounded-full text-xs font-medium bg-teal/20 text-teal-light border border-teal/30 cursor-pointer"
              >
                {sdg}
              </motion.span>
            ))}
          </motion.div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            {stats.map((stat, index) => (
              <StatCard
                key={stat.label}
                {...stat}
                index={index}
              />
            ))}
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div 
          className="w-6 h-10 rounded-full border-2 border-foreground/30 flex items-start justify-center pt-2"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <motion.div 
            className="w-1.5 h-3 rounded-full bg-primary"
            animate={{ opacity: [1, 0.5, 1], scaleY: [1, 0.8, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
