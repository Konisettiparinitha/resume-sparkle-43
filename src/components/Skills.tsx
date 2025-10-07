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
    <section id="skills" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        {/* Technical Skills */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Code className="h-6 w-6 text-primary" />
            Technical Skills
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {technicalSkills.map((skill, index) => (
              <Card 
                key={skill.name} 
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-slide-in-left"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <skill.icon className="h-5 w-5 text-primary" />
                    <span className="font-semibold">{skill.name}</span>
                    <span className="ml-auto text-sm text-muted-foreground">{skill.level}%</span>
                  </div>
                  <div className="w-full bg-muted/30 rounded-full h-2 overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-primary to-primary-glow transition-all duration-1000 ease-out rounded-full"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Tools */}
        <div className="mb-16 animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Wrench className="h-6 w-6 text-primary" />
            Tools & Technologies
          </h3>
          <div className="flex flex-wrap gap-4">
            {tools.map((tool, index) => (
              <Card 
                key={tool.name}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 hover:scale-105 transition-all cursor-pointer animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-4 flex items-center gap-3">
                  <tool.icon className="h-5 w-5 text-primary" />
                  <span className="font-medium">{tool.name}</span>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="animate-fade-in">
          <h3 className="text-2xl font-bold mb-8 flex items-center gap-2">
            <Users className="h-6 w-6 text-primary" />
            Soft Skills
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {softSkills.map((skill, index) => (
              <Card 
                key={skill.name}
                className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all group hover:glow-effect animate-slide-in-right"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6 text-center">
                  <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-primary/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <skill.icon className="h-8 w-8 text-primary" />
                  </div>
                  <h4 className="font-bold mb-2">{skill.name}</h4>
                  <p className="text-sm text-muted-foreground">{skill.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
