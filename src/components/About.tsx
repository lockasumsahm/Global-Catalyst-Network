import { Target, Eye, Heart, Shield, Leaf, Users } from "lucide-react";
import founderImg from "@/assets/founder.webp";

const values = [
  { icon: <Heart size={20} />, label: "Empowerment" },
  { icon: <Users size={20} />, label: "Collaboration" },
  { icon: <Eye size={20} />, label: "Cultural Awareness" },
  { icon: <Shield size={20} />, label: "Accountability" },
  { icon: <Leaf size={20} />, label: "Sustainability" },
];

const About = () => {
  return (
    <section id="about" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            About Us
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Who We <span className="text-gradient-gold">Are</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Global Catalyst Network (GCN) is a youth-led, legally registered
            organization in Pakistan, dedicated to empowering students to
            innovate, lead, and collaborate across cultures.
          </p>
        </div>

        {/* Mission & Vision */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="glass-card rounded-3xl p-8 hover:border-primary/50 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-primary/20 text-primary">
                <Target size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Our Mission
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              To connect young leaders worldwide, enabling them to launch
              initiatives, collaborate across cultures, and create meaningful,
              measurable impact aligned with the United Nations Sustainable
              Development Goals.
            </p>
          </div>

          <div className="glass-card rounded-3xl p-8 hover:border-teal/50 transition-all duration-500">
            <div className="flex items-center gap-4 mb-6">
              <div className="p-4 rounded-2xl bg-teal/20 text-teal">
                <Eye size={28} />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground">
                Our Vision
              </h3>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              A world where every youth can share their culture, learn from
              others, and work together to address global challenges with
              innovation, empathy, and determination.
            </p>
          </div>
        </div>

        {/* Values */}
        <div className="mb-20">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-8">
            Our Core Values
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {values.map((value, index) => (
              <div
                key={value.label}
                className="flex items-center gap-3 px-6 py-3 rounded-full bg-secondary border border-border hover:border-primary/50 transition-all duration-300"
              >
                <span className="text-primary">{value.icon}</span>
                <span className="text-foreground font-medium">
                  {value.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Founder Section */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-primary/20 to-teal/20 blur-xl" />
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
            </div>
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Meet Our Founder
              </span>
              <h3 className="text-3xl font-serif font-bold text-foreground mb-4">
                Visionary Leadership
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Our founder established Global Catalyst Network with a vision
                to bridge cultural divides and empower youth across the globe.
                With a passion for education and sustainable development, they
                continue to lead initiatives that create real, measurable
                impact in communities worldwide.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">
                  Youth Advocate
                </span>
                <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">
                  SDG Champion
                </span>
                <span className="px-4 py-2 rounded-lg bg-secondary text-secondary-foreground text-sm">
                  Cultural Leader
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
