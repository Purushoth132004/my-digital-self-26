import { Code2, Database, Wrench, MessageSquare } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      icon: Code2,
      title: "Programming Languages",
      skills: ["Java", "C++", "Python", "JavaScript"],
    },
    {
      icon: Code2,
      title: "Web Development",
      skills: ["HTML", "CSS", "React.js", "Node.js", "Express.js", "REST APIs"],
    },
    {
      icon: Database,
      title: "Databases",
      skills: ["MySQL", "MongoDB"],
    },
    {
      icon: Wrench,
      title: "Tools & Platforms",
      skills: ["Git/GitHub", "Figma", "VS Code"],
    },
    {
      icon: MessageSquare,
      title: "Soft Skills",
      skills: ["Communication", "Teamwork", "Adaptability", "Leadership"],
    },
  ];

  return (
    <section id="skills" className="py-24 px-4 bg-card/30">
      <div className="container max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Technical <span className="gradient-text">Skills</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="card-glass rounded-xl p-6 hover:shadow-glow transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 rounded-lg bg-primary/20">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1.5 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
