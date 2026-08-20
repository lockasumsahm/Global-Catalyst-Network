import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import { Mail, Instagram, Linkedin, Twitter, Send, MapPin, Clock, ArrowRight, Sparkles } from "lucide-react";
import logo from "@/assets/logo.webp";

const socialLinks = [
  { icon: <Instagram size={24} />, href: "https://www.instagram.com/gcn.global/", label: "Instagram", handle: "@gcn.global" },
  { icon: <Linkedin size={24} />, href: "https://www.linkedin.com/in/global-catalyst-network-9475553ba", label: "LinkedIn", handle: "Global Catalyst Network" },
  { icon: <Twitter size={24} />, href: "https://x.com/global_cat96855/articles", label: "Twitter", handle: "@global_cat96855" },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const Contact = () => {

  return (
    <>
      <Helmet>
        <title>Contact Us | Global Catalyst Network</title>
        <meta
          name="description"
          content="Get in touch with Global Catalyst Network. Contact us for partnerships, questions, or to learn more about joining our youth leadership programs."
        />
        <meta property="og:title" content="Contact Global Catalyst Network" />
        <meta
          property="og:description"
          content="Reach out about partnerships, programs or joining our youth leadership network."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/contact" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/contact" />
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "Contact Global Catalyst Network",
            url: "https://gcn.inkspirehq.live/contact",
          })}
        </script>
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <ParticleBackground count={20} />
            <motion.div 
              className="absolute top-0 left-0 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 10, repeat: Infinity }}
            />
            <motion.div 
              className="absolute bottom-0 right-0 w-[500px] h-[500px] rounded-full bg-teal/5 blur-3xl"
              animate={{ scale: [1, 1.3, 1] }}
              transition={{ duration: 12, delay: 2, repeat: Infinity }}
            />

            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <motion.span 
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6 border border-primary/20"
                  whileHover={{ scale: 1.05 }}
                >
                  <Sparkles size={16} />
                  Get In Touch
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                  Contact <span className="text-gradient-gold">Us</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Have questions, ideas, or want to partner with us? We'd love to hear from you.
                  Reach out and let's create positive change together.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Contact Content */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <div className="grid lg:grid-cols-2 gap-12">
                {/* Contact Info */}
                <div className="space-y-8">
                  <AnimatedSection delay={0.1}>
                    <motion.div 
                      className="glass-card rounded-3xl p-8 md:p-10"
                      whileHover={{ boxShadow: "0 20px 60px hsl(var(--primary) / 0.1)" }}
                    >
                      <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-8">
                        Reach Out to Us
                      </h2>

                      <motion.div 
                        className="space-y-6"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        <motion.div 
                          className="flex items-start gap-4"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="p-4 rounded-xl bg-primary/20 text-primary"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Mail size={24} />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Email</p>
                            <a
                              href="mailto:globalimpactyouthsociety@gmail.com"
                              className="text-lg text-foreground hover:text-primary transition-colors font-medium"
                            >
                              globalimpactyouthsociety@gmail.com
                            </a>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-start gap-4"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="p-4 rounded-xl bg-teal/20 text-teal"
                            whileHover={{ scale: 1.1, rotate: -5 }}
                          >
                            <MapPin size={24} />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Location</p>
                            <p className="text-lg text-foreground font-medium">Pakistan (Registered NGO)</p>
                            <p className="text-sm text-muted-foreground">Operating globally</p>
                          </div>
                        </motion.div>

                        <motion.div 
                          className="flex items-start gap-4"
                          variants={itemVariants}
                          whileHover={{ x: 5 }}
                        >
                          <motion.div 
                            className="p-4 rounded-xl bg-gold/20 text-gold"
                            whileHover={{ scale: 1.1, rotate: 5 }}
                          >
                            <Clock size={24} />
                          </motion.div>
                          <div>
                            <p className="text-sm text-muted-foreground mb-1">Response Time</p>
                            <p className="text-lg text-foreground font-medium">Within 48 hours</p>
                            <p className="text-sm text-muted-foreground">We aim to respond quickly</p>
                          </div>
                        </motion.div>
                      </motion.div>
                    </motion.div>
                  </AnimatedSection>

                  {/* Social Links */}
                  <AnimatedSection delay={0.2}>
                    <motion.div 
                      className="glass-card rounded-3xl p-8 md:p-10"
                      whileHover={{ boxShadow: "0 20px 60px hsl(var(--teal) / 0.1)" }}
                    >
                      <h3 className="text-xl md:text-2xl font-serif font-bold text-foreground mb-6">
                        Follow Us
                      </h3>
                      <motion.div 
                        className="space-y-4"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {socialLinks.map((social, index) => (
                          <motion.a
                            key={social.label}
                            href={social.href}
                            variants={itemVariants}
                            whileHover={{ x: 10, scale: 1.02 }}
                            className="flex items-center gap-4 p-5 rounded-xl bg-secondary/50 border border-border hover:border-primary/50 transition-all duration-300 cursor-pointer"
                          >
                            <div className="text-primary">{social.icon}</div>
                            <div>
                              <p className="font-medium text-foreground">{social.label}</p>
                              <p className="text-sm text-muted-foreground">{social.handle}</p>
                            </div>
                          </motion.a>
                        ))}
                      </motion.div>
                    </motion.div>
                  </AnimatedSection>

                  {/* Quick CTA */}
                  <AnimatedSection delay={0.3}>
                    <motion.div 
                      className="glass-card rounded-2xl p-6 flex items-center gap-4"
                      whileHover={{ scale: 1.02 }}
                    >
                      <span className="shrink-0 rounded-xl bg-foreground px-3 py-1.5 shadow-md ring-1 ring-border/40">
                        <img src={logo} alt="GCN — Global Catalyst Network" width={42} height={56} loading="lazy" className="h-12 w-auto" />
                      </span>
                      <div className="flex-1">
                        <p className="font-medium text-foreground">Ready to join?</p>
                        <p className="text-sm text-muted-foreground">
                          Start making an impact today
                        </p>
                      </div>
                      <Link to="/join">
                        <motion.div whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.95 }}>
                          <Button variant="gold" size="sm">
                            Join <ArrowRight size={16} className="ml-1" />
                          </Button>
                        </motion.div>
                      </Link>
                    </motion.div>
                  </AnimatedSection>
                </div>

                {/* Contact Form - Google Form CTA */}
                <AnimatedSection delay={0.2} direction="right">
                  <motion.div 
                    className="glass-card rounded-3xl p-8 md:p-10 lg:p-12 flex flex-col items-center justify-center text-center h-full min-h-[500px]"
                    whileHover={{ boxShadow: "0 20px 60px hsl(var(--primary) / 0.1)" }}
                  >
                    <motion.div
                      className="p-6 rounded-full bg-primary/20 text-primary mb-8"
                      whileHover={{ scale: 1.1, rotate: 10 }}
                    >
                      <Send size={48} />
                    </motion.div>
                    
                    <h2 className="text-2xl md:text-3xl font-serif font-bold text-foreground mb-4">
                      Send Us a Message
                    </h2>
                    
                    <p className="text-muted-foreground text-lg mb-8 max-w-md">
                      Have questions, feedback, or want to connect with us? 
                      Fill out our contact form and we'll get back to you within 48 hours.
                    </p>
                    
                    <motion.a
                      href="https://docs.google.com/forms/d/e/1FAIpQLSfY_JuvYjJmJYWVkwH4jJMljLNham_mSVlcuRIfjs_30ve99Q/viewform"
                      target="_blank"
                      rel="noopener noreferrer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="gold" size="xl" className="group">
                        Open Contact Form
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </motion.a>
                    
                    <p className="text-sm text-muted-foreground mt-6">
                      Opens in a new tab
                    </p>
                  </motion.div>
                </AnimatedSection>
              </div>
            </div>
          </section>

          {/* Partnership Section */}
          <section className="py-24 md:py-32 bg-card">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <motion.div 
                  className="glass-card rounded-3xl p-8 md:p-16 text-center relative overflow-hidden"
                  whileHover={{ boxShadow: "0 0 80px hsl(var(--primary) / 0.1)" }}
                >
                  <ParticleBackground count={15} />
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
                      Interested in Partnering?
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                      We're always looking to collaborate with schools, organizations,
                      and UN agencies to expand our impact. Let's work together.
                    </p>
                    <motion.a 
                      href="mailto:globalimpactyouthsociety@gmail.com?subject=Partnership Inquiry"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <Button variant="gold" size="xl" className="group">
                        Discuss Partnership
                        <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
                      </Button>
                    </motion.a>
                  </div>
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

export default Contact;
