import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import GlowingCard from "@/components/GlowingCard";
import ParticleBackground from "@/components/ParticleBackground";
import { 
  ArrowRight, Globe, Users, Briefcase, Star, Award, 
  CheckCircle, Sparkles, Heart, Target, Zap, Trophy
} from "lucide-react";

const joinOptions = [
  {
    title: "GCN Initiative Seal",
    subtitle: "Register Your Initiative",
    description:
      "Get your student-led initiative officially recognized by GCN. Receive guidance, visibility, and support to make your project a success.",
    benefits: [
      "Official GCN recognition",
      "Mentorship and guidance",
      "Global visibility",
      "Impact tracking tools",
      "Networking opportunities"
    ],
    icon: <Award size={32} />,
    color: "gold",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdy-LuwZSXUIsU7U28nghiEYBZXUmJwlEeFKr2XYiwI0JxTvA/viewform?usp=header",
    cta: "Register Initiative"
  },
  {
    title: "Country Leader",
    subtitle: "Lead Your Region",
    description:
      "Manage local teams, recruit students, and coordinate community projects in your country. Shape the future of youth leadership.",
    benefits: [
      "Lead a country chapter",
      "Build and manage teams",
      "Organize local events",
      "Direct community impact",
      "Leadership development"
    ],
    icon: <Globe size={32} />,
    color: "primary",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdvKQTGpLlV905vw12F7pukwnH4zP9fqAOdKSMJPzqThNbuvw/viewform?usp=header",
    cta: "Apply as Leader"
  },
  {
    title: "Co-Director",
    subtitle: "Shape Our Strategy",
    description:
      "Work alongside leadership to define strategy, oversee programs, and drive organizational growth. Help us scale our global impact.",
    benefits: [
      "Strategic decision-making",
      "Program oversight",
      "Partnership development",
      "Organizational growth",
      "Executive experience"
    ],
    icon: <Briefcase size={32} />,
    color: "teal",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdN6AxGOVx_q1RwqcLJo854ZI-IEno65LPSGztzNgCZm1dGjg/viewform?usp=header",
    cta: "Apply as Co-Director"
  },
  {
    title: "Volunteer",
    subtitle: "Support Our Mission",
    description:
      "Contribute your skills to media, fundraising, events, and initiative development. Gain experience while making a difference.",
    benefits: [
      "Flexible commitment",
      "Skill development",
      "Certificate of service",
      "Network building",
      "Real-world experience"
    ],
    icon: <Heart size={32} />,
    color: "primary",
    link: "https://docs.google.com/forms/d/e/1FAIpQLSei7TviZoDZdKJI69ls69aWuk7FGmTnsoCNxln92SDiOsZjCQ/viewform?usp=header",
    cta: "Become a Volunteer"
  },
];

const whyJoin = [
  {
    icon: <Sparkles size={24} />,
    title: "Global Network",
    description: "Connect with youth leaders across multiple countries"
  },
  {
    icon: <Target size={24} />,
    title: "Real Impact",
    description: "Create measurable change in your community"
  },
  {
    icon: <Trophy size={24} />,
    title: "Recognition",
    description: "Earn certificates and build your portfolio"
  },
  {
    icon: <Zap size={24} />,
    title: "Mentorship",
    description: "Learn from experienced leaders and advisors"
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Join = () => {
  return (
    <>
      <Helmet>
        <title>Join the Network | Global Catalyst Network</title>
        <meta
          name="description"
          content="Join GCN as a Country Leader, Co-Director, Volunteer, or register your initiative. Be part of the global youth leadership movement."
        />
        <meta property="og:title" content="Join the Global Catalyst Network" />
        <meta
          property="og:description"
          content="Apply as a Country Leader, Co-Director or Volunteer — or register your own student initiative."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/join" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/join" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <ParticleBackground count={25} />
            <motion.div 
              className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
              animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl"
              animate={{ scale: [1, 1.3, 1], opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 12, delay: 2, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gold/20 text-gold text-sm font-medium mb-6 border border-gold/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} />
                  Join the Movement
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                  Join the <span className="text-gradient-gold">Network</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Whether you want to lead, contribute, or launch your own initiative,
                  there's a place for you in the Global Catalyst Network. Choose your path
                  and start making an impact today.
                </p>
              </AnimatedSection>

              {/* Why Join */}
              <motion.div 
                className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {whyJoin.map((item, index) => (
                  <motion.div
                    key={item.title}
                    variants={itemVariants}
                    whileHover={{ y: -8, scale: 1.02 }}
                    className="glass-card rounded-2xl p-6 text-center hover:border-primary/50 transition-all duration-300 cursor-pointer"
                  >
                    <motion.div 
                      className="flex justify-center mb-4"
                      whileHover={{ rotate: [0, -10, 10, 0] }}
                      transition={{ duration: 0.5 }}
                    >
                      <div className="p-3 rounded-xl bg-primary/20 text-primary">
                        {item.icon}
                      </div>
                    </motion.div>
                    <h3 className="font-serif font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* Join Options */}
          <section className="py-24 md:py-32 bg-background relative">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Choose Your <span className="text-gradient-gold">Path</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Four ways to make an impact with Global Catalyst Network
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-8">
                {joinOptions.map((option, index) => (
                  <AnimatedSection 
                    key={option.title} 
                    delay={index * 0.1}
                    direction={index % 2 === 0 ? "left" : "right"}
                  >
                    <GlowingCard
                      className="glass-card rounded-3xl p-8 md:p-10 h-full"
                      glowColor={
                        option.color === "gold" 
                          ? "hsl(30 90% 55%)" 
                          : option.color === "teal" 
                          ? "hsl(170 55% 45%)" 
                          : "hsl(var(--primary))"
                      }
                    >
                      <motion.div 
                        className="flex items-start gap-6 mb-6"
                        whileHover={{ x: 5 }}
                        transition={{ duration: 0.3 }}
                      >
                        <motion.div
                          className={`p-4 rounded-2xl ${
                            option.color === "gold"
                              ? "bg-gold/20 text-gold"
                              : option.color === "teal"
                              ? "bg-teal/20 text-teal"
                              : "bg-primary/20 text-primary"
                          }`}
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {option.icon}
                        </motion.div>
                        <div>
                          <span className="text-sm text-muted-foreground">{option.subtitle}</span>
                          <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                            {option.title}
                          </h3>
                        </div>
                      </motion.div>

                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {option.description}
                      </p>

                      <motion.div 
                        className="space-y-3 mb-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {option.benefits.map((benefit, i) => (
                          <motion.div 
                            key={benefit} 
                            className="flex items-center gap-3"
                            variants={itemVariants}
                            whileHover={{ x: 5 }}
                          >
                            <CheckCircle size={18} className="text-teal flex-shrink-0" />
                            <span className="text-foreground">{benefit}</span>
                          </motion.div>
                        ))}
                      </motion.div>

                      <a href={option.link} target="_blank" rel="noopener noreferrer" className="block">
                        <motion.div
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant={option.color === "gold" ? "gold" : option.color === "teal" ? "teal" : "gold"}
                            size="lg"
                            className="w-full group"
                          >
                            {option.cta}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                          </Button>
                        </motion.div>
                      </a>
                    </GlowingCard>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Donation Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full bg-gold/5 blur-3xl -translate-x-1/2"
              animate={{ scale: [1, 1.2, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 15, repeat: Infinity }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection>
                <motion.div 
                  className="glass-card rounded-3xl p-8 md:p-16 text-center max-w-4xl mx-auto relative overflow-hidden"
                  whileHover={{ boxShadow: "0 0 60px hsl(30 90% 55% / 0.1)" }}
                >
                  <motion.div 
                    className="flex justify-center mb-8"
                    whileHover={{ scale: 1.1 }}
                  >
                    <motion.div 
                      className="p-6 rounded-3xl bg-gold/20 text-gold"
                      animate={{ 
                        boxShadow: [
                          "0 0 20px hsl(30 90% 55% / 0.2)",
                          "0 0 40px hsl(30 90% 55% / 0.4)",
                          "0 0 20px hsl(30 90% 55% / 0.2)"
                        ]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    >
                      <Heart size={40} />
                    </motion.div>
                  </motion.div>
                  <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                    Support Our Mission
                  </h2>
                  <p className="text-muted-foreground text-lg md:text-xl mb-10 leading-relaxed max-w-2xl mx-auto">
                    Your contribution helps us provide materials, virtual event tools,
                    and resources for youth-led initiatives around the world.
                  </p>
                  <motion.div 
                    className="flex flex-wrap justify-center gap-4 mb-10"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                  >
                    {["100% Transparent", "Direct Impact", "Youth-Focused"].map((tag, i) => (
                      <motion.div 
                        key={tag}
                        variants={itemVariants}
                        whileHover={{ scale: 1.05, y: -2 }}
                        className="px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all cursor-pointer"
                      >
                        <span className="text-foreground font-medium">{tag}</span>
                      </motion.div>
                    ))}
                  </motion.div>
                  <p className="text-muted-foreground">
                    Contact us at{" "}
                    <motion.a 
                      href="mailto:globalimpactyouthsociety@gmail.com" 
                      className="text-primary hover:underline font-medium"
                      whileHover={{ scale: 1.02 }}
                    >
                      globalimpactyouthsociety@gmail.com
                    </motion.a>
                    {" "}to learn more about supporting our work.
                  </p>
                </motion.div>
              </AnimatedSection>
            </div>
          </section>

          {/* FAQ CTA */}
          <section className="py-24 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center">
                <h2 className="text-2xl md:text-4xl font-serif font-bold text-foreground mb-4">
                  Have Questions?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-xl mx-auto">
                  We're here to help. Reach out to us for more information about joining GCN.
                </p>
                <motion.a 
                  href="mailto:globalimpactyouthsociety@gmail.com"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Button variant="outline" size="lg" className="group">
                    Contact Us
                    <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                  </Button>
                </motion.a>
              </AnimatedSection>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
};

export default Join;
