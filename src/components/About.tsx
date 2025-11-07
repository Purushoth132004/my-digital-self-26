const About = () => {
  return (
    <section id="about" className="py-24 px-4">
      <div className="container max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          About <span className="gradient-text">Me</span>
        </h2>
        
        <div className="card-glass rounded-2xl p-8 md:p-12 shadow-card">
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
            I'm a passionate Full-Stack Web Developer with a strong foundation in 
            <span className="text-primary font-semibold"> Data Structures, Algorithms, and Object-Oriented Programming</span>. 
            Currently pursuing my B.E. in Computer Science and Engineering at Easwari Engineering College 
            with a CGPA of <span className="text-primary font-semibold">9.07/10</span>.
          </p>
          
          <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mt-6">
            I specialize in building responsive applications using 
            <span className="text-accent font-semibold"> Java, React, Node.js, and MySQL</span>. 
            Currently working as a Frontend Development Intern at MitBots, where I continue to 
            enhance my skills and contribute to real-world projects.
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
