import { Mail, Instagram, Linkedin, Twitter, Send, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.webp";

const socialLinks = [
  { icon: <Instagram size={20} />, href: "https://www.instagram.com/gcn.global/", label: "Instagram" },
  { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/global-catalyst-network-9475553ba", label: "LinkedIn" },
  { icon: <Twitter size={20} />, href: "https://x.com/global_cat96855/articles", label: "Twitter" },
];

const Contact = () => {

  return (
    <section id="contact" className="py-24 bg-card relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute top-0 left-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-teal/5 blur-3xl" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-6">
            Contact <span className="text-gradient-gold">Us</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
            Have questions or want to get involved? We'd love to hear from you.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <div>
            <div className="glass-card rounded-3xl p-6 sm:p-8 mb-8">
              <h3 className="text-xl font-serif font-bold text-foreground mb-6">
                Reach Out to Us
              </h3>

              <div className="space-y-6">
                <div className="flex items-center gap-4 min-w-0">
                  <div className="p-3 rounded-xl bg-primary/20 text-primary flex-shrink-0">
                    <Mail size={24} />
                  </div>
                  <div className="min-w-0">
                    <p className="text-sm text-muted-foreground">Email</p>
                    <a
                      href="mailto:globalimpactyouthsociety@gmail.com"
                      className="text-foreground hover:text-primary transition-colors break-all text-sm sm:text-base"
                    >
                      globalimpactyouthsociety@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 rounded-xl bg-teal/20 text-teal flex-shrink-0">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="text-foreground">Pakistan (Registered NGO)</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-border">
                <p className="text-sm text-muted-foreground mb-4">
                  Follow Us
                </p>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      className="p-3 rounded-xl bg-secondary text-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                      aria-label={social.label}
                    >
                      {social.icon}
                    </a>
                  ))}
                </div>
              </div>
            </div>

            {/* Small CTA */}
            <div className="glass-card rounded-2xl p-6 flex items-center gap-4">
              <span className="shrink-0 rounded-xl bg-foreground px-3 py-1.5 shadow-md ring-1 ring-border/40">
                <img src={logo} alt="GCN — Global Catalyst Network" width={38} height={50} loading="lazy" className="h-11 w-auto" />
              </span>
              <div>
                <p className="font-medium text-foreground">Ready to join?</p>
                <p className="text-sm text-muted-foreground">
                  Start making an impact today
                </p>
              </div>
            </div>
          </div>

          {/* Contact Form - Google Form CTA */}
            <div className="glass-card rounded-3xl p-6 sm:p-8 flex flex-col items-center justify-center text-center">
            <div className="p-5 rounded-full bg-primary/20 text-primary mb-6">
              <Send size={40} />
            </div>
            
            <h3 className="text-xl font-serif font-bold text-foreground mb-3">
              Send Us a Message
            </h3>
            
            <p className="text-muted-foreground mb-6 max-w-sm">
              Have questions, feedback, or want to connect with us? 
              Fill out our contact form and we'll get back to you soon.
            </p>
            
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSfY_JuvYjJmJYWVkwH4jJMljLNham_mSVlcuRIfjs_30ve99Q/viewform"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button variant="gold" size="lg" className="group">
                Open Contact Form
                <Send className="ml-2 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={18} />
              </Button>
            </a>
            
            <p className="text-xs text-muted-foreground mt-4">
              Opens in a new tab
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
