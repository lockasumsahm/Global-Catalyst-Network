import { Heart, Instagram, Linkedin, Twitter } from "lucide-react";
import { Link } from "react-router-dom";
import logo from "@/assets/logo.webp";

const socialLinks = [
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/gcn.global/", label: "Instagram" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/global-catalyst-network-9475553ba", label: "LinkedIn" },
  { icon: <Twitter size={18} />, href: "https://x.com/global_cat96855/articles", label: "Twitter" },
];

const footerLinks = [
  {
    title: "Quick Links",
    links: [
      { label: "About Us", href: "/about" },
      { label: "Programs", href: "/programs" },
      { label: "Impact", href: "/impact" },
      { label: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Get Involved",
    links: [
      { label: "Join the Network", href: "/join" },
      { label: "Register Initiative", href: "https://docs.google.com/forms/d/e/1FAIpQLSdy-LuwZSXUIsU7U28nghiEYBZXUmJwlEeFKr2XYiwI0JxTvA/viewform?usp=header", external: true },
      { label: "Become a Leader", href: "https://docs.google.com/forms/d/e/1FAIpQLSdvKQTGpLlV905vw12F7pukwnH4zP9fqAOdKSMJPzqThNbuvw/viewform?usp=header", external: true },
      { label: "Volunteer", href: "https://docs.google.com/forms/d/e/1FAIpQLSei7TviZoDZdKJI69ls69aWuk7FGmTnsoCNxln92SDiOsZjCQ/viewform?usp=header", external: true },
    ],
  },
  {
    title: "SDGs We Support",
    links: [
      { label: "SDG 4 - Education", href: "/impact" },
      { label: "SDG 9 - Innovation", href: "/impact" },
      { label: "SDG 16 - Peace", href: "/impact" },
      { label: "SDG 17 - Partnerships", href: "/impact" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="bg-background border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link to="/" className="inline-flex items-center gap-3 mb-6">
              <span className="rounded-xl bg-foreground px-4 py-2 shadow-md ring-1 ring-border/40">
                <img src={logo} alt="GCN — Global Catalyst Network" width={60} height={80} loading="lazy" className="h-16 w-auto" />
              </span>
            </Link>
            <p className="text-muted-foreground leading-relaxed mb-6 max-w-sm">
              A youth-led, legally registered organization in Pakistan,
              dedicated to empowering students through innovation, cultural
              exchange, and global collaboration.
            </p>
            <p className="text-sm text-muted-foreground">
              NGO Registration: Pakistan
            </p>
          </div>

          {footerLinks.map((column) => (
            <div key={column.title}>
              <h4 className="font-serif font-semibold text-foreground mb-4">
                {column.title}
              </h4>
              <ul className="space-y-3">
                {column.links.map((link) => (
                  <li key={link.label}>
                    {link.external ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </a>
                    ) : (
                      <Link
                        to={link.href}
                        className="text-muted-foreground hover:text-primary transition-colors text-sm"
                      >
                        {link.label}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Global Catalyst Network. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-lg bg-secondary text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-all duration-300"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-1 text-sm text-muted-foreground">
            Made with <Heart size={14} className="text-primary mx-1" /> for youth worldwide
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
