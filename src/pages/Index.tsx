import { Helmet } from "react-helmet-async";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Programs from "@/components/Programs";
import Impact from "@/components/Impact";
import Leaders from "@/components/Leaders";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>GCN — Global Catalyst Network | Youth-Led Global Impact</title>
        <meta
          name="description"
          content="GCN (Global Catalyst Network) is a youth-led organization empowering students worldwide through innovation, cultural exchange, and global impact aligned with UN SDGs."
        />
        <meta
          name="keywords"
          content="GCN, Global Catalyst Network, GCN youth organization, youth leadership, cultural exchange, SDGs, student initiatives, global impact, Pakistan NGO"
        />
        <meta property="og:title" content="GCN — Global Catalyst Network" />
        <meta
          property="og:description"
          content="Join a worldwide platform for students and young leaders to share initiatives, collaborate across cultures, and create positive change."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://gcn.inkspirehq.live/" />
        <link rel="canonical" href="https://gcn.inkspirehq.live/" />
      </Helmet>

      <motion.div 
        className="min-h-screen bg-background"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Navbar />
        <main>
          <Hero />
          <About />
          <Programs />
          <Impact />
          <Leaders />
          <Contact />
        </main>
        <Footer />
      </motion.div>
    </>
  );
};

export default Index;
