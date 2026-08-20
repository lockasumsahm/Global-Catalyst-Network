import { Users, Globe, Lightbulb, ArrowRight, Calendar, MapPin, Target } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const programs = [
  {
    icon: <Users size={32} />,
    title: "Country Leadership Program",
    description:
      "Recruit motivated students locally, assign leadership roles, and organize community projects that create lasting impact.",
    features: [
      "Fundraising Lead",
      "Media Lead",
      "Impact Tracker",
      "Community Projects",
    ],
    color: "primary",
  },
  {
    icon: <Globe size={32} />,
    title: "Cultural Exchange Platform",
    description:
      "Students can register their own initiatives including cultural workshops, student exchanges, and virtual summits.",
    features: [
      "Cultural Workshops",
      "Student Exchanges",
      "Collaborative Projects",
      "Virtual Summits",
    ],
    color: "teal",
  },
  {
    icon: <Lightbulb size={32} />,
    title: "Pilot Projects",
    description:
      "Launch innovative projects like virtual culture festivals, awareness campaigns, and mini-exchange programs.",
    features: [
      "Virtual Festivals",
      "Awareness Campaigns",
      "Partner Schools",
      "Impact Reporting",
    ],
    color: "gold",
  },
];

const roadmapItems = [
  {
    icon: <MapPin size={20} />,
    title: "Expand to 5+ Countries",
    status: "In Progress",
  },
  {
    icon: <Target size={20} />,
    title: "50+ Student Initiatives",
    status: "Goal",
  },
  {
    icon: <Calendar size={20} />,
    title: "UN Impact Reporting",
    status: "Planned",
  },
];

const Programs = () => {
  return (
    <section id="programs" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-1/2 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Programs & Initiatives
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Our <span className="text-gradient-gold">Programs</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our impactful programs designed to foster leadership, cultural
            exchange, and community development across the globe.
          </p>
        </div>

        {/* Programs Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {programs.map((program, index) => (
            <div
              key={program.title}
              className="glass-card rounded-3xl p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div
                className={`p-4 rounded-2xl inline-block mb-6 ${
                  program.color === "primary"
                    ? "bg-primary/20 text-primary"
                    : program.color === "teal"
                    ? "bg-teal/20 text-teal"
                    : "bg-gold/20 text-gold"
                }`}
              >
                {program.icon}
              </div>
              <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                {program.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {program.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {program.features.map((feature) => (
                  <span
                    key={feature}
                    className="px-3 py-1 rounded-full bg-secondary text-secondary-foreground text-xs"
                  >
                    {feature}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Roadmap */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <h3 className="text-2xl font-serif font-bold text-foreground mb-8 text-center">
            Future Roadmap
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-8">
            {roadmapItems.map((item, index) => (
              <div
                key={item.title}
                className="flex items-center gap-4 p-6 rounded-2xl bg-secondary/50 border border-border hover:border-primary/30 transition-all duration-300"
              >
                <div className="p-3 rounded-xl bg-primary/20 text-primary">
                  {item.icon}
                </div>
                <div>
                  <p className="font-medium text-foreground">{item.title}</p>
                  <span className="text-xs text-primary">{item.status}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center">
            <Link to="/join" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Button variant="gold" size="lg">
                Register Your Initiative
                <ArrowRight className="ml-2" size={18} />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Programs;
