import { Code, Database, Wrench, Users, Clock, Target, MessageSquare, Lightbulb } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Skills = () => {
  const technicalSkills = [
    { name: "C Programming", icon: Code, level: 85 },
    { name: "Python", icon: Code, level: 80 },
    { name: "HTML & CSS", icon: Code, level: 85 },
    { name: "Data Structures", icon: Database, level: 75 },
  ];

  const tools = [
    { name: "VS Code", icon: Wrench },
    { name: "Anaconda", icon: Wrench },
    { name: "Jupyter Notebook", icon: Wrench },
    { name: "Google Colab", icon: Wrench },
    { name: "MS Office", icon: Wrench },
  ];

  const softSkills = [
    { name: "Communication", icon: MessageSquare, description: "Strong verbal and written communication" },
    { name: "Team Collaboration", icon: Users, description: "Effective team player and collaborator" },
    { name: "Self-Motivated", icon: Target, description: "Driven and goal-oriented" },
    { name: "Initiative", icon: Lightbulb, description: "Proactive problem solver" },
    { name: "Time Management", icon: Clock, description: "Excellent organizational skills" },
  ];

  return (
    <section id="skills" className="py-32 relative overflow-hidden bg-background">
      {/* Background blur orbs */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-primary/30 blur-orb animate-float-slow" style={{ animationDelay: "1s" }} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">SKILLS</h2>
            <div className="h-px w-32 bg-primary" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Technical Skills */}
            <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-light tracking-wide">Technical Skills</h3>
                <div className="space-y-6">
                  {technicalSkills.map((skill, index) => (
                    <div key={skill.name} className="space-y-3 group/skill" style={{ animationDelay: `${index * 100}ms` }}>
                      <div className="flex justify-between text-sm font-light tracking-wide">
                        <span>{skill.name}</span>
                        <span className="text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="h-[2px] bg-muted/30 overflow-hidden">
                        <div 
                          className="h-full bg-gradient-primary transition-all duration-1000 ease-out"
                          style={{ width: `${skill.level}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Tools & Soft Skills */}
            <div className="space-y-12">
              <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                    <Wrench className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-light tracking-wide">Tools</h3>
                  <div className="flex flex-wrap gap-4">
                    {tools.map((tool) => (
                      <span key={tool.name} className="glass-effect px-6 py-3 text-sm font-light tracking-wide hover:bg-primary/10 transition-all duration-300">
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
              </Card>

              <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
                <div className="space-y-8">
                  <div className="flex items-center gap-4">
                    <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                    <Users className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="text-3xl font-light tracking-wide">Soft Skills</h3>
                  <div className="grid grid-cols-2 gap-4">
                    {softSkills.map((skill) => (
                      <div key={skill.name} className="space-y-2">
                        <skill.icon className="h-5 w-5 text-primary" />
                        <p className="text-sm font-light">{skill.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
