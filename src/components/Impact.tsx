import { TrendingUp, Users, Globe, BookOpen, Award, Target } from "lucide-react";

const impactMetrics = [
  {
    icon: <Globe size={28} />,
    value: "3",
    label: "Countries Active",
    description: "Pakistan + pilot countries",
  },
  {
    icon: <Users size={28} />,
    value: "4",
    label: "Students Engaged",
    description: "Active participants",
  },
  {
    icon: <BookOpen size={28} />,
    value: "1",
    label: "Initiatives Registered",
    description: "Community projects",
  },
  {
    icon: <Target size={28} />,
    value: "4",
    label: "SDGs Aligned",
    description: "Global goals supported",
  },
];

const sdgDetails = [
  {
    number: "4",
    title: "Quality Education",
    color: "bg-red-500/20 text-red-400 border-red-500/30",
  },
  {
    number: "9",
    title: "Industry & Innovation",
    color: "bg-orange-500/20 text-orange-400 border-orange-500/30",
  },
  {
    number: "16",
    title: "Peace & Justice",
    color: "bg-blue-500/20 text-blue-400 border-blue-500/30",
  },
  {
    number: "17",
    title: "Partnerships",
    color: "bg-purple-500/20 text-purple-400 border-purple-500/30",
  },
];

const Impact = () => {
  return (
    <section id="impact" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-1/2 w-[800px] h-[800px] rounded-full bg-primary/3 blur-3xl -translate-x-1/2 -translate-y-1/2" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-teal/20 text-teal text-sm font-medium mb-4">
            Our Impact
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Making a <span className="text-gradient-gold">Difference</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Transparent and honest metrics that showcase our growing impact on
            communities and young leaders worldwide.
          </p>
        </div>

        {/* Impact Metrics */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {impactMetrics.map((metric, index) => (
            <div
              key={metric.label}
              className="glass-card rounded-2xl p-6 text-center group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex justify-center mb-4">
                <div className="p-4 rounded-xl bg-primary/20 text-primary group-hover:scale-110 transition-transform duration-300">
                  {metric.icon}
                </div>
              </div>
              <div className="text-4xl font-serif font-bold text-foreground mb-2">
                {metric.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">
                {metric.label}
              </div>
              <div className="text-xs text-muted-foreground">
                {metric.description}
              </div>
            </div>
          ))}
        </div>

        {/* SDG Alignment */}
        <div className="glass-card rounded-3xl p-8 md:p-12">
          <div className="text-center mb-10">
            <h3 className="text-2xl font-serif font-bold text-foreground mb-4">
              SDG Alignment
            </h3>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Our initiatives are aligned with the United Nations Sustainable
              Development Goals, ensuring global relevance and measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {sdgDetails.map((sdg) => (
              <div
                key={sdg.number}
                className={`rounded-2xl p-6 border ${sdg.color} text-center hover:scale-105 transition-transform duration-300`}
              >
                <div className="text-4xl font-serif font-bold mb-2">
                  {sdg.number}
                </div>
                <div className="text-sm font-medium">{sdg.title}</div>
              </div>
            ))}
          </div>

          <div className="mt-10 p-6 rounded-2xl bg-secondary/50 border border-border">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-teal/20 text-teal">
                <TrendingUp size={24} />
              </div>
              <div>
                <h4 className="font-semibold text-foreground mb-2">
                  Growing Every Day
                </h4>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  We're committed to transparency. As a young organization, we're
                  building our impact steadily – tracking every initiative,
                  participant, and outcome to ensure accountability and continuous
                  improvement.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Impact;
