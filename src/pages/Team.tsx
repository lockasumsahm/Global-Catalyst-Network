import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParticleBackground from "@/components/ParticleBackground";
import { MapPin, Star, Quote, Users, Globe, Briefcase, ArrowRight, Sparkles, Heart, Plus, Trash2, ImagePlus } from "lucide-react";
import founderImg from "@/assets/founder.webp";
import shehrbanoImg from "@/assets/team-shehrbano.webp";
import ryadImg from "@/assets/team-ryad.png.asset.json";

type TeamMember = {
  id: string;
  name: string;
  title: string;
  location: string;
  image: string;
  bio: string;
};

const leadership: TeamMember[] = [
  {
    id: "builtin-founder",
    name: "Founder & Global Director",
    title: "Founder",
    location: "Pakistan",
    image: founderImg,
    bio: "Founded Global Catalyst Network to give students everywhere a platform to lead.",
  },
  {
    id: "builtin-shehrbano",
    name: "Shehrbano Imran",
    title: "Director of Marketing",
    location: "Pakistan",
    image: shehrbanoImg,
    bio: "Leads storytelling, brand and outreach across the network.",
  },
  {
    id: "builtin-ryad",
    name: "Ryad",
    title: "Chief Strategy Officer",
    location: "United States",
    image: ryadImg.url,
    bio: "Shapes long-term strategy and the growth of our global programs.",
  },
];

const roles = [
  {
    title: "Country Leader",
    description:
      "Manage local teams, recruit students, and coordinate community projects in your country. Lead initiatives that create lasting impact.",
    responsibilities: ["Team Management", "Project Coordination", "Impact Reporting", "Student Recruitment"],
    icon: <Globe size={28} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdvKQTGpLlV905vw12F7pukwnH4zP9fqAOdKSMJPzqThNbuvw/viewform?usp=header"
  },
  {
    title: "Co-Director",
    description:
      "Work alongside leadership to shape strategy, oversee programs, and drive organizational growth across regions.",
    responsibilities: ["Strategic Planning", "Program Oversight", "Partnership Development", "Team Leadership"],
    icon: <Briefcase size={28} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSdN6AxGOVx_q1RwqcLJo854ZI-IEno65LPSGztzNgCZm1dGjg/viewform?usp=header"
  },
  {
    title: "Cultural Coordinator",
    description:
      "Ensure cross-cultural engagement, document activities, and facilitate exchange programs between countries.",
    responsibilities: ["Cultural Exchange", "Documentation", "Program Facilitation", "Event Planning"],
    icon: <Users size={28} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSei7TviZoDZdKJI69ls69aWuk7FGmTnsoCNxln92SDiOsZjCQ/viewform?usp=header"
  },
  {
    title: "Volunteer",
    description:
      "Support media, fundraising, and initiative development while gaining valuable experience in global youth leadership.",
    responsibilities: ["Media Support", "Fundraising", "Event Assistance", "Content Creation"],
    icon: <Heart size={28} />,
    link: "https://docs.google.com/forms/d/e/1FAIpQLSei7TviZoDZdKJI69ls69aWuk7FGmTnsoCNxln92SDiOsZjCQ/viewform?usp=header"
  },
];

const testimonials = [
  {
    quote:
      "GCN connected me to students in other countries and taught me how to manage and share my cultural initiative responsibly. The experience has been transformative.",
    author: "Student Leader",
    location: "Pakistan",
    role: "Country Leader"
  },
  {
    quote:
      "Being part of this network has opened my eyes to different cultures while making a real difference in my community. I've grown as a leader and as a person.",
    author: "Cultural Coordinator",
    location: "Partner Country",
    role: "Cultural Exchange Lead"
  },
  {
    quote:
      "The support and guidance from GCN helped me launch my first community project. Now I'm mentoring other students to do the same.",
    author: "Youth Volunteer",
    location: "Pakistan",
    role: "Initiative Lead"
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

const Team = () => {
  const CUSTOM_KEY = "gcn-custom-team";
  const [unlocked, setUnlocked] = useState(
    () => typeof window !== "undefined" && localStorage.getItem("gcn-admin-unlocked") === "1"
  );
  const [code, setCode] = useState("");
  const [customMembers, setCustomMembers] = useState<TeamMember[]>([]);
  const [newMember, setNewMember] = useState<Partial<TeamMember>>({});
  const [previewImage, setPreviewImage] = useState<string>("");
  const [isProcessingImage, setIsProcessingImage] = useState(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(CUSTOM_KEY);
      if (raw) {
        const saved = JSON.parse(raw);
        if (Array.isArray(saved)) setCustomMembers(saved);
      }
    } catch {
      /* ignore */
    }
  }, []);

  const saveCustom = (next: TeamMember[]) => {
    try {
      localStorage.setItem(CUSTOM_KEY, JSON.stringify(next));
      setCustomMembers(next);
      return true;
    } catch {
      toast({
        variant: "destructive",
        title: "Could not save the team card",
        description: "The browser storage is full. Try a smaller photo or delete an older custom card.",
      });
      return false;
    }
  };

  const compressImage = (file: File) => new Promise<string>((resolve, reject) => {
    const reader = new FileReader();
    reader.onerror = () => reject(new Error("read"));
    reader.onload = () => {
      const image = new Image();
      image.onerror = () => reject(new Error("image"));
      image.onload = () => {
        const maxDimension = 1200;
        const scale = Math.min(1, maxDimension / Math.max(image.width, image.height));
        const width = Math.max(1, Math.round(image.width * scale));
        const height = Math.max(1, Math.round(image.height * scale));
        const canvas = document.createElement("canvas");
        canvas.width = width;
        canvas.height = height;
        const context = canvas.getContext("2d");
        if (!context) {
          reject(new Error("canvas"));
          return;
        }
        context.drawImage(image, 0, 0, width, height);
        resolve(canvas.toDataURL("image/webp", 0.78));
      };
      image.src = String(reader.result);
    };
    reader.readAsDataURL(file);
  });

  const handleFile = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    e.target.value = "";
    if (!file.type.startsWith("image/")) {
      toast({ variant: "destructive", title: "Please choose an image file" });
      return;
    }
    if (file.size > 15 * 1024 * 1024) {
      toast({ variant: "destructive", title: "Photo is too large", description: "Choose an image smaller than 15 MB." });
      return;
    }
    setIsProcessingImage(true);
    try {
      const dataUrl = await compressImage(file);
      setPreviewImage(dataUrl);
      setNewMember((prev) => ({ ...prev, image: dataUrl }));
      toast({ title: "Photo ready", description: "Complete the fields and add the team member." });
    } catch {
      toast({ variant: "destructive", title: "Photo could not be processed", description: "Try a JPG, PNG, or WebP image." });
    } finally {
      setIsProcessingImage(false);
    }
  };

  const addMember = () => {
    if (!newMember.name || !newMember.title || !newMember.location || !newMember.image) return;
    const member: TeamMember = {
      id: `custom-${Date.now()}`,
      name: newMember.name,
      title: newMember.title,
      location: newMember.location,
      image: newMember.image,
      bio: newMember.bio || "",
    };
    if (saveCustom([...customMembers, member])) {
      setNewMember({});
      setPreviewImage("");
      toast({ title: "Team member added", description: `${member.name}'s card is now in the leadership grid.` });
    }
  };

  const removeMember = (id: string) => {
    const member = customMembers.find((person) => person.id === id);
    if (!member || !window.confirm(`Delete ${member.name}'s team card?`)) return;
    if (saveCustom(customMembers.filter((person) => person.id !== id))) {
      toast({ title: "Team member deleted", description: `${member.name}'s card has been removed.` });
    }
  };

  const allMembers: TeamMember[] = [...leadership, ...customMembers];

  const renderCard = (person: TeamMember, isCustom: boolean) => (
    <motion.article
      key={person.id}
      variants={itemVariants}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.35 }}
      className="group glass-card rounded-3xl overflow-hidden"
    >
      <div className="relative aspect-[4/5] overflow-hidden">
        <img
          src={person.image}
          alt={`${person.name} — ${person.title}, Global Catalyst Network`}
          loading="lazy"
          width={600}
          height={750}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-transparent" />
        {isCustom && unlocked && (
          <Button
            type="button"
            onClick={() => removeMember(person.id)}
            variant="destructive"
            size="icon"
            className="absolute top-3 right-3 z-20 rounded-full shadow-lg"
            aria-label={`Delete ${person.name}'s card`}
            title="Delete team card"
          >
            <Trash2 size={16} />
          </Button>
        )}
        <div className="absolute bottom-4 left-4 right-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-primary bg-primary/15 border border-primary/30 rounded-full px-3 py-1">
            <MapPin size={12} />
            {person.location}
          </span>
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-serif font-bold text-foreground leading-snug">
          {person.name}
        </h3>
        <p className="text-sm text-primary font-medium mt-1">
          {person.title}
        </p>
        <p className="text-sm text-muted-foreground mt-3 leading-relaxed">
          {person.bio}
        </p>
      </div>
    </motion.article>
  );

  return (
    <>
      <Helmet>
        <title>Our Team | Global Catalyst Network</title>
        <meta
          name="description"
          content="Meet the leaders and volunteers of Global Catalyst Network. Join our team as a Country Leader, Co-Director, Cultural Coordinator, or Volunteer."
        />
        <meta property="og:title" content="Meet the GCN Leadership Team" />
        <meta
          property="og:description"
          content="The directors, coordinators and volunteers steering Global Catalyst Network across continents."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/team" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/team" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />
        
        <main className="pt-20">
          {/* Hero Section */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <ParticleBackground count={20} />
            <motion.div 
              className="absolute bottom-0 right-0 w-[600px] h-[600px] rounded-full bg-teal/5 blur-3xl"
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
                  Our Team
                </motion.span>
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
                  Meet Our <span className="text-gradient-gold">Leaders</span>
                </h1>
                <p className="text-muted-foreground max-w-3xl mx-auto text-lg md:text-xl leading-relaxed">
                  Our growing network of passionate young leaders is making a difference
                  in their communities and around the world. Join us and be part of the change.
                </p>
              </AnimatedSection>
            </div>
          </section>

          {/* Roles Section */}
          {/* Leadership Team */}
          <section className="py-20 md:py-28 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-14">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Leadership <span className="text-gradient-gold">Team</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  The people steering Global Catalyst Network across continents
                </p>
              </AnimatedSection>

              <motion.div
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-80px" }}
              >
                {allMembers.map((person, index) => renderCard(person, index >= leadership.length))}
              </motion.div>

              <input
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleFile}
                className="hidden"
              />

              {unlocked && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-12 glass-card rounded-3xl p-6 md:p-8 max-w-3xl mx-auto"
                >
                  <div className="flex items-center gap-2 mb-6">
                    <div className="p-2 rounded-xl bg-primary/20 text-primary">
                      <Plus size={20} />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-foreground">Add new team card</h3>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                    <Input
                      placeholder="Name"
                      value={newMember.name || ""}
                      onChange={(e) => setNewMember({ ...newMember, name: e.target.value })}
                      className="bg-background/50"
                    />
                    <Input
                      placeholder="Role / Title"
                      value={newMember.title || ""}
                      onChange={(e) => setNewMember({ ...newMember, title: e.target.value })}
                      className="bg-background/50"
                    />
                    <Input
                      placeholder="Country"
                      value={newMember.location || ""}
                      onChange={(e) => setNewMember({ ...newMember, location: e.target.value })}
                      className="bg-background/50"
                    />
                    <div className="flex min-h-10 items-center gap-3">
                      <Button
                        type="button"
                        onClick={() => fileInputRef.current?.click()}
                        disabled={isProcessingImage}
                        variant="outline"
                        className="w-full justify-between bg-background/50"
                      >
                        <span className="truncate">{isProcessingImage ? "Preparing photo…" : previewImage ? "Change photo" : "Upload photo"}</span>
                        <ImagePlus size={16} />
                      </Button>
                      {previewImage && (
                        <img src={previewImage} alt="New member preview" className="h-10 w-10 shrink-0 rounded-md object-cover" />
                      )}
                    </div>
                  </div>
                  <Textarea
                    placeholder="Short bio"
                    value={newMember.bio || ""}
                    onChange={(e) => setNewMember({ ...newMember, bio: e.target.value })}
                    className="bg-background/50 mb-4 min-h-[80px]"
                  />
                  <Button
                    onClick={addMember}
                    disabled={isProcessingImage || !newMember.name?.trim() || !newMember.title?.trim() || !newMember.location?.trim() || !newMember.image}
                    className="w-full sm:w-auto"
                  >
                    Add team member
                    <Plus size={16} className="ml-2" />
                  </Button>
                </motion.div>
              )}

              {/* Discreet admin access — subtle sparkle so it can be found */}
              <div className="mt-10 flex justify-center">
                {unlocked ? (
                  <button
                    type="button"
                    onClick={() => {
                      localStorage.removeItem("gcn-admin-unlocked");
                      setUnlocked(false);
                      window.dispatchEvent(new Event("gcn-admin-change"));
                    }}
                    className="text-[10px] text-muted-foreground/40 hover:text-muted-foreground transition-colors"
                  >
                    lock
                  </button>
                ) : (
                  <div className="relative group">
                    <input
                      type="password"
                      value={code}
                      placeholder="code"
                      aria-label="access code"
                      onChange={(e) => {
                        setCode(e.target.value);
                        if (e.target.value.trim().toLowerCase() === "abdullahboss") {
                          localStorage.setItem("gcn-admin-unlocked", "1");
                          setUnlocked(true);
                          setCode("");
                          window.dispatchEvent(new Event("gcn-admin-change"));
                        }
                      }}
                      className="w-24 h-8 rounded-full bg-muted/30 border border-primary/30 text-[11px] text-foreground placeholder:text-muted-foreground/50 px-3 pr-8 outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary/50 transition-all animate-shimmer"
                    />
                    <span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-primary/60 text-xs animate-pulse">✨</span>
                  </div>
                )}
              </div>
            </div>
          </section>

          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  Leadership <span className="text-gradient-gold">Roles</span>
                </h2>
                <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
                  Explore the different ways you can contribute to our mission
                </p>
              </AnimatedSection>

              <div className="grid md:grid-cols-2 gap-6 md:gap-8">
                {roles.map((role, index) => (
                  <AnimatedSection key={role.title} delay={index * 0.1} direction={index % 2 === 0 ? "left" : "right"}>
                    <motion.div
                      className="glass-card rounded-3xl p-8 md:p-10 group h-full"
                      whileHover={{ y: -8, boxShadow: "0 20px 60px hsl(var(--primary) / 0.1)" }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="flex items-center gap-4 mb-6">
                        <motion.div 
                          className="p-4 rounded-2xl bg-primary/20 text-primary"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          transition={{ duration: 0.3 }}
                        >
                          {role.icon}
                        </motion.div>
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-foreground">
                          {role.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground mb-6 leading-relaxed text-lg">
                        {role.description}
                      </p>
                      <motion.div 
                        className="flex flex-wrap gap-2 mb-8"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                      >
                        {role.responsibilities.map((resp) => (
                          <motion.span
                            key={resp}
                            variants={itemVariants}
                            whileHover={{ scale: 1.05, y: -2 }}
                            className="px-4 py-2 rounded-full bg-secondary text-secondary-foreground text-sm cursor-pointer hover:bg-primary/20 hover:text-primary transition-colors"
                          >
                            {resp}
                          </motion.span>
                        ))}
                      </motion.div>
                      <motion.a 
                        href={role.link} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Button variant="outline" className="group-hover:bg-primary group-hover:text-primary-foreground transition-all w-full md:w-auto">
                          Apply Now
                          <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
                        </Button>
                      </motion.a>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </section>

          {/* Testimonials */}
          <section className="py-24 md:py-32 bg-card relative overflow-hidden">
            <motion.div 
              className="absolute top-0 left-0 w-[500px] h-[500px] rounded-full bg-primary/5 blur-3xl"
              animate={{ scale: [1, 1.2, 1] }} style={{ willChange: "transform" }}
              transition={{ duration: 12, repeat: Infinity }}
            />
            
            <div className="container mx-auto px-4 relative z-10">
              <AnimatedSection className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                  What Our Leaders <span className="text-gradient-gold">Say</span>
                </h2>
              </AnimatedSection>

              <motion.div 
                className="grid md:grid-cols-3 gap-6 md:gap-8"
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
              >
                {testimonials.map((testimonial, index) => (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -12, scale: 1.02 }}
                    className="glass-card rounded-3xl p-8 md:p-10 relative cursor-pointer"
                  >
                    <motion.div 
                      className="absolute top-6 left-6 text-primary/20"
                      animate={{ scale: [1, 1.1, 1] }}
                      transition={{ duration: 3, repeat: Infinity, delay: index * 0.5 }}
                    >
                      <Quote size={48} />
                    </motion.div>
                    <p className="text-foreground leading-relaxed mb-8 relative z-10 italic text-lg">
                      "{testimonial.quote}"
                    </p>
                    <div className="flex items-center gap-4">
                      <motion.div 
                        className="w-14 h-14 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold text-lg"
                        whileHover={{ scale: 1.1, backgroundColor: "hsl(var(--primary))", color: "hsl(var(--primary-foreground))" }}
                      >
                        {testimonial.author[0]}
                      </motion.div>
                      <div>
                        <p className="font-medium text-foreground text-lg">
                          {testimonial.author}
                        </p>
                        <p className="text-sm text-primary font-medium">{testimonial.role}</p>
                        <div className="flex items-center gap-1 text-sm text-muted-foreground">
                          <MapPin size={12} />
                          {testimonial.location}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </section>

          {/* CTA Section */}
          <section className="py-24 md:py-32 bg-background">
            <div className="container mx-auto px-4">
              <AnimatedSection>
                <motion.div 
                  className="glass-card rounded-3xl p-8 md:p-16 lg:p-20 text-center bg-gradient-to-br from-primary/10 to-teal/10 relative overflow-hidden"
                  whileHover={{ boxShadow: "0 0 80px hsl(var(--primary) / 0.15)" }}
                >
                  <ParticleBackground count={15} />
                  <div className="relative z-10">
                    <h2 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
                      Ready to Make a <span className="text-gradient-gold">Difference</span>?
                    </h2>
                    <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10">
                      Join our growing network of young leaders and start creating positive
                      change in your community today.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                      <Link to="/join">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button variant="gold" size="xl" className="group">
                            Join the Network
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                          </Button>
                        </motion.div>
                      </Link>
                      <Link to="/programs">
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button variant="outline" size="xl">
                            Explore Programs
                          </Button>
                        </motion.div>
                      </Link>
                    </div>
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

export default Team;
