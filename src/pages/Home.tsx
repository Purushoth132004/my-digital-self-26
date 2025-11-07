import Hero from "@/components/Hero";
import About from "@/components/About";
import Experience from "@/components/Experience";
import Certifications from "@/components/Certifications";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <About />
      <Experience />
      <Certifications />
    </div>
  );
};

export default Home;
