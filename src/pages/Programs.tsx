import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import { 
  Users, Globe, Lightbulb, ArrowRight, Calendar, MapPin, Target, 
  BookOpen, Award, Video, Megaphone, School, ClipboardList, Sparkles, Rocket
} from "lucide-react";

const programs = [
  {
    icon: <Users size={40} />,
    title: "Country Leadership Program",
    description:
      "Recruit motivated students locally, assign leadership roles, and organize community projects that create lasting impact in your region.",
    features: [
      { icon: <ClipboardList size={16} />, text: "Team Management" },
      { icon: <Target size={16} />, text: "Project Coordination" },
      { icon: <Award size={16} />, text: "Impact Reporting" },
      { icon: <Users size={16} />, text: "Community Projects" },
    ],
    color: "primary",
    cta: "Apply as Country Leader",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdvKQTGpLlV905vw12F7pukwnH4zP9fqAOdKSMJPzqThNbuvw/viewform?usp=header"
  },
  {
    icon: <Globe size={40} />,
    title: "Cultural Exchange Platform",
    description:
      "Students can register their own initiatives including cultural workshops, student exchanges, collaborative projects, and virtual summits.",
    features: [
      { icon: <Video size={16} />, text: "Virtual Summits" },
      { icon: <School size={16} />, text: "Student Exchanges" },
      { icon: <BookOpen size={16} />, text: "Cultural Workshops" },
      { icon: <Users size={16} />, text: "Collaborative Projects" },
    ],
    color: "teal",
    cta: "Register Your Initiative",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdy-LuwZSXUIsU7U28nghiEYBZXUmJwlEeFKr2XYiwI0JxTvA/viewform?usp=header"
  },
  {
    icon: <Lightbulb size={40} />,
    title: "Pilot Projects",
    description:
      "Launch innovative projects like virtual culture festivals, awareness campaigns, and mini-exchange programs with partner schools internationally.",
    features: [
      { icon: <Calendar size={16} />, text: "Virtual Festivals" },
      { icon: <Megaphone size={16} />, text: "Awareness Campaigns" },
      { icon: <School size={16} />, text: "Partner Schools" },
      { icon: <ClipboardList size={16} />, text: "Impact Tracking" },
    ],
    color: "gold",
    cta: "Start a Pilot Project",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdy-LuwZSXUIsU7U28nghiEYBZXUmJwlEeFKr2XYiwI0JxTvA/viewform?usp=header"
  },
];

const initiativeTypes = [
  { name: "Community Projects", description: "Local impact initiatives", icon: <Users size={20} /> },
  { name: "Education Programs", description: "Workshops and learning", icon: <BookOpen size={20} /> },
  { name: "Cultural Events", description: "Festivals and exchanges", icon: <Globe size={20} /> },
  { name: "Innovation Labs", description: "Tech and creativity", icon: <Lightbulb size={20} /> },
];

const roadmapItems = [
  {
    icon: <MapPin size={28} />,
    title: "Expand to 5+ Countries",
    status: "In Progress",
    description: "Building partnerships across continents"
  },
  {
    icon: <Target size={28} />,
    title: "50+ Student Initiatives",
    status: "Goal",
    description: "Empowering more youth-led projects"
  },
  {
    icon: <Rocket size={28} />,
    title: "UN Impact Reporting",
    status: "Planned",
    description: "Aligning with global SDG tracking"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Programs = () => {
  return (
    <>
      <Helmet>
        <title>Programs & Initiatives | Global Catalyst Network</title>
        <meta
          name="description"
          content="Explore GCN's programs including Country Leadership, Cultural Exchange Platform, and Pilot Projects. Join our initiatives for global impact."
        />
        <meta property="og:title" content="Programs & Initiatives | GCN" />
        <meta
          property="og:description"
          content="Country Leadership, the Cultural Exchange Platform and pilot projects — explore how students lead with GCN."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/programs" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/programs" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <ParticleBackground count={20} />
            <motion.div 
              className="absolute top-1/2 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl -translate-y-1/2"
              animate={{ scale: [1, 1.2, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 10, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} />
                  Programs & Initiatives
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                  Our <span className="text-gradient-gold">Programs</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Join our impactful programs designed to foster leadership, cultural
                  exchange, and community development across the globe. Each program
                  is aligned with UN Sustainable Development Goals.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Programs Detail Section */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <div className="space-y-12 md:space-y-16">
                {programs.map((program, index) => (
                  <AnimatedSection key={program.title} delay={index * 0.1}>
                    <motion.div
                      className="glass-card rounded-3xl p-8 md:p-12 lg:p-16"
                      whileHover={{ boxShadow: "0 20px 60px hsl(var(--primary) / 0.1)" }}
                    >
                      <div className={`grid md:grid-cols-2 gap-8 md:gap-12 items-center ${index % 2 === 1 ? "md:flex-row-reverse" : ""}`}>
                        <div className={index % 2 === 1 ? "md:order-2" : ""}>
                          <motion.div
                            className={`p-6 rounded-2xl inline-block mb-6 ${
                              program.color === "primary"
                                ? "bg-primary/20 text-primary"
                                : program.color === "teal"
                                ? "bg-teal/20 text-teal"
                                : "bg-gold/20 text-gold"
                            }`}
                            whileHover={{ scale: 1.1, rotate: 5 }}
                            transition={{ duration: 0.3 }}
                          >
                            {program.icon}
                          </motion.div>
                          <h2 className="text-3xl md:text-4xl font-serif font-bold text-foreground mb-4">
                            {program.title}
                          </h2>
                          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                            {program.description}
                          </p>
                          <motion.a 
                            href={program.link} 
                            target="_blank" 
                            rel="noopener noreferrer"
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                          >
                            <Button 
                              variant={program.color === "primary" ? "gold" : program.color === "teal" ? "teal" : "gold"} 
                              size="lg"
                              className="group"
                            >
                              {program.cta}
                              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                            </Button>
                          </motion.a>
                        </div>
                        <motion.div 
                          className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? "md:order-1" : ""}`}
                          variants={containerVariants}
                          initial="hidden"
                          whileInView="visible"
                          viewport={{ once: true }}
                        >
                          {program.features.map((feature) => (
                            <motion.div
                              key={feature.text}
                              variants={itemVariants}
                              whileHover={{ y: -5, scale: 1.02 }}
                              className="flex items-center gap-3 p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/30 transition-all cursor-pointer"
                            >
                              <div className="text-primary">{feature.icon}</div>
                              <span className="text-foreground font-medium">
                                {feature.text}
                              </span>
                            </motion.div>
                          ))}
                        </motion.div>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Initiative Registration */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <motion.div 
              className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Register Your <span className="text-gradient-gold">Initiative</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Students and youth organizations can register their own initiatives
                  to receive support, guidance, and global visibility.
                </p>
              </AnimatedSection>

              <motion.div 
                className="grid md:grid-cols-4 gap-6 mb-12"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {initiativeTypes.map((type, index) => (
                  <motion.div
                    key={type.name}
                    variants={itemVariants}
                    whileHover={{ y: -10, scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/20 text-primary">
                        {type.icon}
                      </div>
                    </motion.div>
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {type.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">{type.description}</p>
                  </motion.div>
                ))}
              </motion.div>

              <div className="text-center">
                <motion.a 
                  href="https://docs.google.com/forms/d/e/1FAIpQLSdy-LuwZSXUIsU7U28nghiEYBZXUmJwlEeFKr2XYiwI0JxTvA/viewform?usp=header" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="gold" size="xl" className="group">
                    Register Your Initiative
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                  </Button>
                </motion.a>
              </div>
            </div>
          </section>

          {/* Roadmap */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Future <span className="text-gradient-gold">Roadmap</span>
                </h2>
              </AnimatedSection>

              <motion.div 
                className="grid md:grid-cols-3 gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {roadmapItems.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="glass-card rounded-3xl p-8 md:p-10 text-center hover:border-primary/50 transition-all duration-500 cursor-pointer"
                  >
                    <motion.div 
                      className="flex justify-center mb-6"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <motion.div 
                        className="p-5 rounded-2xl bg-primary/20 text-primary"
                        animate={{ 
                          boxShadow: [
                            "0 0 20px hsl(var(--primary) / 0.1)",
                            "0 0 40px hsl(var(--primary) / 0.2)",
                            "0 0 20px hsl(var(--primary) / 0.1)"
                          ]
                        }}
                        transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                      >
                        {item.icon}
                      </motion.div>
                    </motion.div>
                    <motion.span 
                      className="inline-block px-4 py-1.5 rounded-full bg-teal/20 text-teal text-xs font-medium mb-4"
                      whileHover={{ scale: 1.1 }}
                    >
                      {item.status}
                    </motion.span>
                    <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-3">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Programs;
