import { Briefcase, GraduationCap } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Experience & <span className="gradient-text">Education</span>
        </h2>
        
        <div className="space-y-8">
          {/* Experience */}
          <div className="card-glass rounded-xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20 shrink-0">
                <Briefcase className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Frontend Development Intern</h3>
                <p className="text-primary font-medium mb-2">MitBots</p>
                <p className="text-muted-foreground">Aug 2025 – Present</p>
              </div>
            </div>
          </div>
          
          {/* Education */}
          <div className="card-glass rounded-xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/20 shrink-0">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">B.E. in Computer Science and Engineering</h3>
                <p className="text-accent font-medium mb-2">Easwari Engineering College</p>
                <p className="text-muted-foreground mb-2">2023 – Present</p>
                <p className="text-lg font-semibold text-primary">CGPA: 9.07 / 10</p>
              </div>
            </div>
          </div>
          
          <div className="card-glass rounded-xl p-8 hover:shadow-glow transition-all duration-300">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-accent/20 shrink-0">
                <GraduationCap className="w-6 h-6 text-accent" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-semibold mb-2">Higher Secondary Certificate (HSC)</h3>
                <p className="text-accent font-medium mb-2">Vailankanni Matric Higher Secondary School</p>
                <p className="text-muted-foreground mb-2">2021 – 2022</p>
                <p className="text-lg font-semibold text-primary">90.2%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
