import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import AnimatedCounter from "@/components/AnimatedCounter";
import ParticleBackground from "@/components/ParticleBackground";
import { TrendingUp, Users, Globe, BookOpen, Target, BarChart3, FileText, Award, Sparkles } from "lucide-react";

const impactMetrics: {
  icon: JSX.Element;
  value: number;
  suffix?: string;
  label: string;
  description: string;
}[] = [
  {
    icon: <Globe size={32} />,
    value: 3,
    label: "Countries Active",
    description: "Pakistan + pilot partner countries",
  },
  {
    icon: <Users size={32} />,
    value: 4,
    label: "Students Engaged",
    description: "Active youth participants",
  },
  {
    icon: <BookOpen size={32} />,
    value: 1,
    label: "Initiatives Registered",
    description: "Community-driven projects",
  },
  {
    icon: <Target size={32} />,
    value: 4,
    label: "SDGs Aligned",
    description: "UN Global Goals supported",
  },
];

const sdgDetails = [
  {
    number: "4",
    title: "Quality Education",
    description: "Ensuring inclusive and equitable education for all youth",
    color: "from-red-500/20 to-red-600/10 border-red-500/30 text-red-400",
    icon: <BookOpen size={28} />,
  },
  {
    number: "9",
    title: "Industry & Innovation",
    description: "Fostering innovation and building resilient infrastructure",
    color: "from-orange-500/20 to-orange-600/10 border-orange-500/30 text-orange-400",
    icon: <TrendingUp size={28} />,
  },
  {
    number: "16",
    title: "Peace & Justice",
    description: "Promoting peaceful and inclusive societies through cultural exchange",
    color: "from-blue-500/20 to-blue-600/10 border-blue-500/30 text-blue-400",
    icon: <Award size={28} />,
  },
  {
    number: "17",
    title: "Partnerships",
    description: "Strengthening global partnerships for sustainable development",
    color: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
    icon: <Users size={28} />,
  },
];

const reportingAreas = [
  { title: "Student Participation", description: "Tracking engagement across all programs" },
  { title: "Projects Completed", description: "Measuring initiative success rates" },
  { title: "Local Engagement", description: "Community involvement metrics" },
  { title: "Skills Development", description: "Leadership and collaboration growth" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Impact = () => {
  return (
    <>
      <Helmet>
        <title>Our Impact | Global Catalyst Network</title>
        <meta
          name="description"
          content="See the measurable impact of Global Catalyst Network - countries reached, students engaged, initiatives launched, and SDGs supported."
        />
        <meta property="og:title" content="Our Impact | Global Catalyst Network" />
        <meta
          property="og:description"
          content="Countries reached, students engaged, initiatives launched and the UN SDGs our youth-led work supports."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/impact" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/impact" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <ParticleBackground count={25} />
            <motion.div 
              className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl -translate-x-1/2 -translate-y-1/2"
              animate={{ scale: [1, 1.3, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 15, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-teal/20 text-teal text-sm font-medium mb-6 border border-teal/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} />
                  Our Impact
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                  Making a <span className="text-gradient-gold">Difference</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Transparent and honest metrics that showcase our growing impact on
                  communities and young leaders worldwide. We believe in accountability
                  and measurable outcomes.
                </p>
              </AnimatedSection>

              {/* Impact Metrics */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {impactMetrics.map((metric, index) => (
                  <motion.div
                    key={metric.label}
                    variants={itemVariants}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 md:p-8 text-center group hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ scale: 1.1, rotate: 5 }}
                    >
                      <div className="p-4 rounded-xl bg-primary/20 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-300">
                        {metric.icon}
                      </div>
                    </motion.div>
                    <div className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-2">
                      <AnimatedCounter value={metric.value} suffix={metric.suffix} />
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">
                      {metric.label}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {metric.description}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* SDG Alignment */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  SDG <span className="text-gradient-gold">Alignment</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Our initiatives are strategically aligned with the United Nations Sustainable
                  Development Goals, ensuring global relevance and measurable impact.
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {sdgDetails.map((sdg, index) => (
                  <AnimatedSection key={sdg.number} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                    <motion.div
                      className={`rounded-3xl p-6 sm:p-8 md:p-10 border bg-gradient-to-br ${sdg.color}`}
                      whileHover={{ scale: 1.02, y: -5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-start gap-4 sm:gap-6">
                        <motion.div 
                          className="text-5xl sm:text-6xl md:text-7xl font-serif font-bold opacity-50 flex-shrink-0"
                          animate={{ opacity: [0.3, 0.6, 0.3] }}
                          transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                        >
                          {sdg.number}
                        </motion.div>
                        <div className="min-w-0">
                          <motion.div 
                            className="mb-3"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            {sdg.icon}
                          </motion.div>
                          <h3 className="text-lg sm:text-xl md:text-2xl font-serif font-bold mb-2">{sdg.title}</h3>
                          <p className="opacity-80 text-sm sm:text-base">{sdg.description}</p>
                        </div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Impact Reporting */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <motion.div 
              className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection>
                <motion.div 
                  className="glass-card rounded-3xl p-8 md:p-12 lg:p-16"
                  whileHover={{ boxShadow: "0 0 60px hsl(170 55% 45% / 0.1)" }}
                >
                  <div className="grid md:grid-cols-2 gap-12 items-center">
                    <div>
                      <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4">
                        <BarChart3 size={14} />
                        Transparency
                      </span>
                      <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6">
                        Impact Reporting
                      </h2>
                      <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                        We maintain comprehensive records of all our initiatives, tracking
                        student participation, project outcomes, and community engagement
                        to ensure accountability and continuous improvement.
                      </p>
                      <motion.div 
                        className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border"
                        whileHover={{ x: 5, borderColor: "hsl(var(--primary) / 0.5)" }}
                      >
                        <FileText size={28} className="text-primary" />
                        <div>
                          <p className="font-medium text-foreground text-lg">Annual Reports</p>
                          <p className="text-sm text-muted-foreground">Available for stakeholders</p>
                        </div>
                      </motion.div>
                    </div>
                    
                    <motion.div 
                      className="grid grid-cols-2 gap-4"
                      variants={containerVariants}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      {reportingAreas.map((area, index) => (
                        <motion.div
                          key={area.title}
                          variants={itemVariants}
                          whileHover={{ y: -5, scale: 1.02 }}
                          className="p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300 cursor-pointer"
                        >
                          <BarChart3 size={24} className="text-primary mb-4" />
                          <h4 className="font-medium text-foreground mb-1">{area.title}</h4>
                          <p className="text-xs text-muted-foreground">{area.description}</p>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </motion.div>
              </AnimatedSection>
            </div>
          </section>

          {/* Growing Statement */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <motion.div 
                  className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
                  whileHover={{ boxShadow: "0 0 80px hsl(170 55% 45% / 0.1)" }}
                >
                  <motion.div 
                    className="flex justify-center mb-8"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="p-6 rounded-3xl bg-teal/20 text-teal"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px hsl(170 55% 45% / 0.2)",
                          "0 0 40px hsl(170 55% 45% / 0.4)",
                          "0 0 20px hsl(170 55% 45% / 0.2)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <TrendingUp size={40} />
                    </motion.div>
                  </motion.div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                    Growing Every Day
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
                    We're committed to transparency. As a young organization, we're
                    building our impact steadily – tracking every initiative,
                    participant, and outcome to ensure accountability and continuous
                    improvement. Join us on this journey of growth and positive change.
                  </p>
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

export default Impact;
