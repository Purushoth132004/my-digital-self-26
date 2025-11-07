import { Award } from "lucide-react";

const Certifications = () => {
  const certifications = [
    { name: "Full Stack Web Development", provider: "Udemy" },
    { name: "Fundamentals of C++", provider: "Infosys SpringBoard" },
    { name: "Introduction to Python Essentials", provider: "Cisco" },
    { name: "Networking Basics", provider: "Cisco" },
    { name: "Java (Intermediate)", provider: "HackerRank" },
    { name: "Figma Essentials", provider: "Udemy" },
  ];

  return (
    <section id="certifications" className="py-24 px-4">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          <span className="gradient-text">Certifications</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-start gap-3">
                <div className="p-2 rounded-lg bg-accent/20 shrink-0">
                  <Award className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1 text-foreground">{cert.name}</h3>
                  <p className="text-sm text-muted-foreground">{cert.provider}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
