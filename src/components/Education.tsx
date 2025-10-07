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
    <section id="education" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            <span className="text-gradient">Education</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-primary-glow to-primary" />

          <div className="space-y-12">
            {education.map((edu, index) => (
              <div
                key={index}
                className={`relative flex items-center ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } animate-fade-in`}
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 animate-glow z-10" />

                {/* Content card */}
                <div className={`w-full md:w-5/12 ${index % 2 === 0 ? "md:pr-12 pl-16 md:pl-0" : "md:pl-12 pl-16 md:pr-0"}`}>
                  <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:glow-effect group">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <div className="p-2 rounded-lg bg-primary/20 group-hover:scale-110 transition-transform">
                          <GraduationCap className="h-5 w-5 text-primary" />
                        </div>
                        <div className="flex-1">
                          {edu.status === "pursuing" && (
                            <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-primary/20 text-primary mb-2">
                              Currently Pursuing
                            </span>
                          )}
                          <h3 className="text-xl font-bold mb-1">{edu.degree}</h3>
                          {edu.specialization && (
                            <p className="text-sm text-primary mb-2">{edu.specialization}</p>
                          )}
                          <p className="font-semibold text-foreground/90">{edu.institution}</p>
                        </div>
                      </div>

                      <div className="space-y-2 text-sm text-muted-foreground">
                        <div className="flex items-center gap-2">
                          <MapPin className="h-4 w-4 text-primary" />
                          <span>{edu.location}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Calendar className="h-4 w-4 text-primary" />
                          <span>{edu.duration}</span>
                        </div>
                        {edu.achievement && (
                          <div className="mt-3 pt-3 border-t border-border">
                            <span className="font-semibold text-primary">Achievement: </span>
                            <span className="text-foreground">{edu.achievement}</span>
                          </div>
                        )}
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
