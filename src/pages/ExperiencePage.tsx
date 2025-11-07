import Experience from "@/components/Experience";

const ExperiencePage = () => {
  return (
    <div className="min-h-screen pt-20">
      <Experience />
      
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <h2 className="text-4xl font-bold mb-12 text-center gradient-text">Education</h2>
          <div className="glass-card p-8 animate-fade-in">
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-2">
                  Bachelor of Engineering in Computer Science
                </h3>
                <p className="text-primary font-medium mb-2">
                  University College of Engineering, Tindivanam
                </p>
                <p className="text-muted-foreground mb-2">2021 - 2025</p>
                <p className="text-foreground">
                  <span className="font-semibold">CGPA:</span> 7.87/10
                </p>
              </div>
              
              <div className="pt-6 border-t border-border/50">
                <h4 className="text-xl font-semibold text-foreground mb-4">Academic Highlights</h4>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Strong foundation in Data Structures, Algorithms, and Software Engineering</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Completed coursework in Web Development, Database Management, and Cloud Computing</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Participated in various technical workshops and hackathons</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ExperiencePage;
