import { ExternalLink, Github } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const projects = [
    {
      title: "Pension Management System",
      description: "Secure pension system with Aadhaar OTP authentication, face recognition, and liveness detection for enhanced security.",
      technologies: ["Node.js", "MySQL", "Face Recognition", "OTP Authentication"],
      gradient: "from-primary to-accent",
    },
    {
      title: "Real-Time Chat Application",
      description: "Full-featured chat platform with user authentication, real-time messaging using WebSocket, and group chat capabilities.",
      technologies: ["HTML", "CSS", "JavaScript", "WebSocket"],
      gradient: "from-accent to-primary",
    },
    {
      title: "Tic-Tac-Toe Game",
      description: "Command-line implementation with robust game logic, turn management, and comprehensive input validation.",
      technologies: ["C++", "Object-Oriented Programming", "Game Logic"],
      gradient: "from-primary/80 to-accent/80",
    },
  ];

  return (
    <section id="projects" className="py-24 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Featured <span className="gradient-text">Projects</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="card-glass rounded-xl overflow-hidden hover:shadow-glow transition-all duration-300 animate-fade-in group"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className={`h-2 bg-gradient-to-r ${project.gradient}`} />
              
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-2 py-1 bg-primary/10 text-primary rounded text-xs border border-primary/20"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
