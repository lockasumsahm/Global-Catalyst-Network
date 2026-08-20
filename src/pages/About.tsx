import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import { Target, Eye, Heart, Shield, Leaf, Users, Award, CheckCircle, Sparkles } from "lucide-react";
import founderImg from "@/assets/founder.webp";

const values = [
  { icon: <Heart size={24} />, label: "Empowerment", description: "Giving youth the tools and confidence to lead" },
  { icon: <Users size={24} />, label: "Collaboration", description: "Working together across borders and cultures" },
  { icon: <Eye size={24} />, label: "Cultural Awareness", description: "Celebrating and understanding diversity" },
  { icon: <Shield size={24} />, label: "Accountability", description: "Transparent actions and measurable impact" },
  { icon: <Leaf size={24} />, label: "Sustainability", description: "Creating lasting positive change" },
];

const milestones = [
  { year: "2024", title: "Founded in Pakistan", description: "GCN was legally registered as an NGO" },
  { year: "2024", title: "First Initiatives", description: "Launched pilot programs with 20+ students" },
  { year: "2025", title: "Global Expansion", description: "Expanding to 5+ countries" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Global Catalyst Network</title>
        <meta
          name="description"
          content="Learn about Global Catalyst Network - a youth-led organization empowering students through innovation, cultural exchange, and global collaboration."
        />
        <meta property="og:title" content="About Global Catalyst Network" />
        <meta
          property="og:description"
          content="Our mission, vision and story: a youth-led network empowering students through innovation and cultural exchange."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/about" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/about" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <ParticleBackground count={20} />
            <motion.div 
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 12, delay: 2, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} />
                  About Us
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                  Who We <span className="text-gradient-gold">Are</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Global Catalyst Network (GCN) is a youth-led, legally registered
                  organization in Pakistan, dedicated to empowering students to
                  innovate, lead, and collaborate across cultures. We provide a platform 
                  where initiatives can be registered, youth leaders can engage in global 
                  projects, and participants can share experiences that foster mutual 
                  understanding and community impact.
                </p>
              </AnimatedSection>

              {/* Mission & Vision */}
              <div className="grid md:grid-cols-2 gap-8 mb-20">
                <AnimatedSection delay={0.1} direction="left">
                  <motion.div 
                    className="glass-card rounded-3xl p-8 md:p-10 h-full"
                    whileHover={{ y: -8, boxShadow: "0 20px 60px hsl(30 90% 55% / 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="p-4 rounded-2xl bg-primary/20 text-primary"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                      >
                        <Target size={32} />
                      </motion.div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                        Our Mission
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      To connect young leaders worldwide, enabling them to launch
                      initiatives, collaborate across cultures, and create meaningful,
                      measurable impact aligned with the United Nations Sustainable
                      Development Goals.
                    </p>
                  </motion.div>
                </AnimatedSection>

                <AnimatedSection delay={0.2} direction="right">
                  <motion.div 
                    className="glass-card rounded-3xl p-8 md:p-10 h-full"
                    whileHover={{ y: -8, boxShadow: "0 20px 60px hsl(170 55% 45% / 0.1)" }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="flex items-center gap-4 mb-6">
                      <motion.div 
                        className="p-4 rounded-2xl bg-teal/20 text-teal"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                      >
                        <Eye size={32} />
                      </motion.div>
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                        Our Vision
                      </h2>
                    </div>
                    <p className="text-muted-foreground leading-relaxed text-lg">
                      A world where every youth can share their culture, learn from
                      others, and work together to address global challenges with
                      innovation, empathy, and determination.
                    </p>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Values Section */}
          <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Our Core <span className="text-gradient-gold">Values</span>
                </h2>
              </AnimatedSection>

              <motion.div 
                className="grid md:grid-cols-3 lg:grid-cols-5 gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {values.map((value, index) => (
                  <motion.div
                    key={value.label}
                    variants={itemVariants}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-4 rounded-xl bg-primary/20 text-primary">
                        {value.icon}
                      </div>
                    </motion.div>
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {value.label}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {value.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Founder Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection>
                <div className="glass-card rounded-3xl p-8 md:p-12 lg:p-16">
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <motion.div 
                      className="relative"
                      initial={{ opacity: 0, x: -50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div 
                        className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-teal/20 blur-xl"
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 4, repeat: Infinity }}
                      />
                      <div className="relative aspect-[3/4] rounded-2xl overflow-hidden border-2 border-border">
                        <img
                          src={founderImg}
                          alt="Founder of Global Catalyst Network"
                          width={800}
                          height={1000}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover object-top"
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, x: 50 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.6, delay: 0.2 }}
                    >
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                        <Sparkles size={14} />
                        Meet Our Founder
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        Visionary Leadership
                      </h2>
                      <p className="text-muted-foreground leading-relaxed mb-8 text-lg">
                        Our founder established Global Catalyst Network with a vision
                        to bridge cultural divides and empower youth across the globe.
                        With a passion for education and sustainable development, they
                        continue to lead initiatives that create real, measurable
                        impact in communities worldwide.
                      </p>
                      <motion.div 
                        className="flex flex-wrap gap-3"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {[
                          { icon: <Award size={16} />, text: "Youth Advocate", color: "text-primary" },
                          { icon: <Target size={16} />, text: "SDG Champion", color: "text-teal" },
                          { icon: <Users size={16} />, text: "Cultural Leader", color: "text-gold" },
                        ].map((badge) => (
                          <motion.span 
                            key={badge.text}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm flex items-center gap-2 cursor-pointer"
                          >
                            <span className={badge.color}>{badge.icon}</span>
                            {badge.text}
                          </motion.span>
                        ))}
                      </motion.div>
                    </motion.div>
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </section>

          {/* Timeline Section */}
          <section className="py-24 md:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Our <span className="text-gradient-gold">Journey</span>
                </h2>
              </AnimatedSection>

              <div className="max-w-3xl mx-auto">
                {milestones.map((milestone, index) => (
                  <AnimatedSection key={index} delay={index * 0.15}>
                    <motion.div 
                      className="flex gap-6 mb-8 last:mb-0"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex flex-col items-center">
                        <motion.div 
                          className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-lg"
                          whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                        >
                          {index + 1}
                        </motion.div>
                        {index < milestones.length - 1 && (
                          <motion.div 
                            className="w-0.5 flex-1 bg-border mt-4"
                            initial={{ scaleY: 0 }}
                            whileInView={{ scaleY: 1 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.3 }}
                          />
                        )}
                      </div>
                      <motion.div 
                        className="glass-card rounded-2xl p-6 md:p-8 flex-1"
                        whileHover={{ boxShadow: "0 10px 40px hsl(var(--primary) / 0.1)" }}
                      >
                        <span className="text-primary font-medium text-sm">{milestone.year}</span>
                        <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mt-1 mb-2">
                          {milestone.title}
                        </h3>
                        <p className="text-muted-foreground">{milestone.description}</p>
                      </motion.div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Legal Section */}
          <section className="py-24 bg-card">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <motion.div 
                  className="glass-card rounded-3xl p-8 md:p-12 text-center"
                  whileHover={{ boxShadow: "0 0 60px hsl(170 55% 45% / 0.1)" }}
                >
                  <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-8">
                    Legal & Governance
                  </h2>
                  <motion.div 
                    className="flex flex-wrap justify-center gap-4 md:gap-6"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {[
                      "Registered NGO in Pakistan",
                      "Board Members & Advisory Council",
                      "Mentorship Program"
                    ].map((item) => (
                      <motion.div 
                        key={item}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="flex items-center gap-3 px-6 py-4 rounded-full bg-secondary border border-border hover:border-teal/50 transition-all cursor-pointer"
                      >
                        <CheckCircle size={20} className="text-teal" />
                        <span className="text-foreground font-medium">{item}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                </motion.div>
              </AnimatedSection>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default About;
