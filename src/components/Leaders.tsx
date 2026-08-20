import { MapPin, Star, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const testimonials = [
  {
    quote:
      "GCN connected me to students in other countries and taught me how to manage and share my cultural initiative responsibly.",
    author: "Student Leader",
    location: "Pakistan",
  },
  {
    quote:
      "Being part of this network has opened my eyes to different cultures while making a real difference in my community.",
    author: "Cultural Coordinator",
    location: "Partner Country",
  },
];

const roles = [
  {
    title: "Country Leader",
    description:
      "Manage local teams, recruit students, and coordinate community projects in your country.",
    responsibilities: ["Team Management", "Project Coordination", "Impact Reporting"],
  },
  {
    title: "Cultural Coordinator",
    description:
      "Ensure cross-cultural engagement, document activities, and facilitate exchange programs.",
    responsibilities: ["Cultural Exchange", "Documentation", "Program Facilitation"],
  },
  {
    title: "Volunteer",
    description:
      "Support media, fundraising, and initiative development while gaining valuable experience.",
    responsibilities: ["Media Support", "Fundraising", "Event Assistance"],
  },
];

const Leaders = () => {
  return (
    <section id="leaders" className="py-24 bg-background relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full bg-teal/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Join Our Team
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Become a <span className="text-gradient-gold">Leader</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Join our growing network of young leaders making a difference in
            their communities and around the world.
          </p>
        </div>

        {/* Roles Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-20">
          {roles.map((role, index) => (
            <div
              key={role.title}
              className="glass-card rounded-3xl p-8 group hover:border-primary/50 transition-all duration-500 hover:-translate-y-2"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <Star size={20} className="text-primary" />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground">
                  {role.title}
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {role.description}
              </p>
              <div className="space-y-2">
                {role.responsibilities.map((resp) => (
                  <div
                    key={resp}
                    className="flex items-center gap-2 text-sm text-foreground"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {resp}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mb-16">
          <h3 className="text-2xl font-serif font-bold text-foreground text-center mb-10">
            What Our Leaders Say
          </h3>
          <div className="grid md:grid-cols-2 gap-8">
            {testimonials.map((testimonial, index) => (
              <div
                key={index}
                className="glass-card rounded-2xl p-8 relative"
              >
                <div className="absolute top-6 left-6 text-primary/20">
                  <Quote size={48} />
                </div>
                <p className="text-foreground leading-relaxed mb-6 relative z-10 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-semibold">
                    {testimonial.author[0]}
                  </div>
                  <div>
                    <p className="font-medium text-foreground">
                      {testimonial.author}
                    </p>
                    <div className="flex items-center gap-1 text-sm text-muted-foreground">
                      <MapPin size={12} />
                      {testimonial.location}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center">
          <div className="inline-flex flex-col sm:flex-row gap-4">
            <Link to="/join" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Button variant="gold" size="xl">
                Apply as Leader
              </Button>
            </Link>
            <Link to="/join" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
              <Button variant="teal" size="xl">
                Become a Volunteer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Leaders;
