import { Mail, Phone, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-4 bg-card/30">
      <div className="container max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Let's <span className="gradient-text">Connect</span>
        </h2>
        
        <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          <a 
            href="mailto:mpurushoth475@gmail.com"
            className="card-glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-primary/20 group-hover:bg-primary/30 transition-colors">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Email</p>
                <p className="font-semibold">mpurushoth475@gmail.com</p>
              </div>
            </div>
          </a>
          
          <a 
            href="tel:+919629529879"
            className="card-glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 group"
          >
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-full bg-accent/20 group-hover:bg-accent/30 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <div className="text-left">
                <p className="text-sm text-muted-foreground">Phone</p>
                <p className="font-semibold">+91 96295 29879</p>
              </div>
            </div>
          </a>
        </div>
        
        <div className="flex gap-4 justify-center">
          <Button 
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
            asChild
          >
            <a href="https://linkedin.com/in/purushothaman-m" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn
            </a>
          </Button>
          
          <Button 
            size="lg"
            variant="outline"
            className="border-primary/50 hover:bg-primary/10"
            asChild
          >
            <a href="https://github.com/purushoth-m" target="_blank" rel="noopener noreferrer">
              <Github className="w-5 h-5 mr-2" />
              GitHub
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
