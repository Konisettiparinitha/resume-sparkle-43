import { GraduationCap, Calendar, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const Education = () => {
  const education = [
    {
      degree: "Bachelors in Computer Science and Engineering",
      specialization: "Artificial Intelligence and Machine Learning",
      institution: "Sri Vasavi Engineering College",
      location: "Tadepalligudem, Andhra Pradesh",
      duration: "2023 - 2027 (Expected)",
      status: "pursuing",
    },
    {
      degree: "Higher Secondary Education",
      institution: "Sri Sai Aditya Jr. College",
      location: "Rajamahendravaram, Andhra Pradesh",
      duration: "2021 - 2023",
      achievement: "74.3% (743/1000)",
      status: "completed",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Bhashyam E.M High School",
      location: "Rajamahendravaram, Andhra Pradesh",
      duration: "2019 - 2020",
      achievement: "10 GPA (593/600)",
      status: "completed",
    },
  ];

  return (
    <section id="education" className="py-32 relative overflow-hidden bg-background">
      {/* Background blur orbs */}
      <div className="absolute bottom-1/4 right-1/3 w-[600px] h-[600px] bg-secondary/30 blur-orb animate-glow-pulse" style={{ animationDelay: "2s" }} />
      
      <div className="container mx-auto px-4">
        <div className="max-w-5xl mx-auto space-y-20 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">EDUCATION</h2>
            <div className="h-px w-32 bg-primary" />
          </div>

          <div className="space-y-16">
            {education.map((edu, index) => (
              <Card key={index} className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
                <div className="flex items-start gap-8">
                  <div className="flex flex-col items-center gap-4">
                    <div className="w-16 h-16 glass-effect flex items-center justify-center text-2xl font-light text-primary group-hover:scale-110 transition-transform duration-500">
                      0{index + 1}
                    </div>
                    {index < education.length - 1 && (
                      <div className="h-24 w-px bg-gradient-to-b from-primary/50 to-transparent" />
                    )}
                  </div>
                  <div className="flex-1 space-y-4 pt-4">
                    <div className="flex items-start justify-between flex-wrap gap-4">
                      <div className="space-y-2">
                        {edu.status === "pursuing" && (
                          <span className="inline-block px-4 py-1 text-xs font-light tracking-wider glass-effect text-primary mb-2">
                            CURRENTLY PURSUING
                          </span>
                        )}
                        <h3 className="text-3xl font-light tracking-wide">{edu.degree}</h3>
                        {edu.specialization && (
                          <p className="text-lg text-primary/80 font-light">{edu.specialization}</p>
                        )}
                        <p className="text-lg text-muted-foreground/70 font-light">{edu.institution}</p>
                      </div>
                      <span className="glass-effect text-sm font-light tracking-wide px-4 py-2">{edu.duration}</span>
                    </div>
                    <div className="flex flex-wrap gap-8 text-sm text-muted-foreground/70 font-light">
                      <div className="flex items-center gap-2">
                        <MapPin className="h-4 w-4" />
                        <span>{edu.location}</span>
                      </div>
                      {edu.achievement && (
                        <div className="flex items-center gap-2">
                          <span className="text-primary">Achievement:</span>
                          <span>{edu.achievement}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
