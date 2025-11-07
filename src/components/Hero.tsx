import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, FileText } from "lucide-react";

const Hero = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden px-4">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card/50" />
      
      <div className="container max-w-5xl mx-auto relative z-10 animate-fade-in">
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
            Hi, I'm <span className="gradient-text">Purushothaman M</span>
          </h1>
          
          <p className="text-2xl md:text-3xl text-muted-foreground font-light">
            Full-Stack Web Developer
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Building responsive web applications with modern technologies. 
            Passionate about clean code and solving complex problems.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center pt-8">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow transition-all duration-300"
              onClick={() => document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View My Work
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="border-primary/50 hover:bg-primary/10"
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Get In Touch
            </Button>
          </div>
          
          <div className="flex gap-4 justify-center pt-8">
            <a 
              href="https://github.com/purushoth-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
            >
              <Github className="w-6 h-6" />
            </a>
            <a 
              href="https://linkedin.com/in/purushothaman-m" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a 
              href="mailto:mpurushoth475@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-colors"
            >
              <Mail className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
