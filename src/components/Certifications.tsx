import { Award, Briefcase, Trophy } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Badge } from "./ui/badge";

const Certifications = () => {
  const certifications = [
    "Getting started with Artificial Intelligence - IBM",
    "NPTEL Online Course - Introduction to Internet of Things",
    "Internship Certificate - PLASMID INNOVATION PRIVATE LIMITED (JAVA Programming)",
    "Workshop - Version control using GIT (Swecha Freedom Fest)",
    "Workshop - Prompt Engineering (Swecha Freedom Fest)",
    "Introduction to C - Sololearn",
  ];

  const achievements = [
    "Participated in Hackwave 1.0 (Mini hackathon) by Unstop",
    "Participated in Smart India Hackathon (SIH)",
    "Participated in Avinya Hack Overflow-2k24 (24hrs hackathon)",
    "Participated in Teacher's Day Celebration (Performed skit)",
  ];

  const internship = {
    company: "PLASMID INNOVATION PRIVATE LIMITED",
    role: "Java Programming Language",
    type: "Internship",
  };

  return (
    <section id="certifications" className="py-20 px-4 bg-card/30">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Certifications & <span className="text-gradient">Achievements</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        {/* Internship Highlight */}
        <Card className="mb-12 bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/30 animate-scale-in">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-4 rounded-xl bg-primary/20 glow-effect">
                <Briefcase className="h-8 w-8 text-primary" />
              </div>
              <div className="flex-1">
                <Badge className="mb-3 bg-primary/20 text-primary border-primary/30">
                  {internship.type}
                </Badge>
                <h3 className="text-2xl font-bold mb-2">{internship.company}</h3>
                <p className="text-lg text-muted-foreground">{internship.role}</p>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div className="animate-slide-in-left">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Award className="h-6 w-6 text-primary" />
              Certifications
            </h3>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:translate-x-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Award className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed flex-1">{cert}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div className="animate-slide-in-right">
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
              <Trophy className="h-6 w-6 text-primary" />
              Achievements
            </h3>
            <div className="space-y-4">
              {achievements.map((achievement, index) => (
                <Card
                  key={index}
                  className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:translate-x-2 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <CardContent className="p-4 flex items-start gap-3">
                    <div className="mt-1 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Trophy className="h-4 w-4 text-primary" />
                    </div>
                    <p className="text-sm leading-relaxed flex-1">{achievement}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
