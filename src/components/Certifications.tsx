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
    <section id="certifications" className="py-32 relative overflow-hidden bg-background">
      {/* Background blur orbs */}
      <div className="absolute top-1/3 left-1/3 w-[500px] h-[500px] bg-primary/20 blur-orb animate-float-slow" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-20 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">CERTIFICATIONS</h2>
            <div className="h-px w-32 bg-primary" />
          </div>

          {/* Internship Highlight */}
          <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
            <div className="flex items-start gap-8">
              <Briefcase className="h-8 w-8 text-primary group-hover:scale-110 transition-transform duration-500" />
              <div className="flex-1">
                <span className="glass-effect px-4 py-1 text-xs font-light tracking-wider text-primary mb-4 inline-block">
                  INTERNSHIP
                </span>
                <h3 className="text-3xl font-light tracking-wide mb-2">{internship.company}</h3>
                <p className="text-lg text-muted-foreground/70 font-light">{internship.role}</p>
              </div>
            </div>
          </Card>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Certifications */}
            <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-light tracking-wide">Certifications</h3>
                <div className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="mt-1 text-xs text-muted-foreground/50 font-light min-w-[24px]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground/70 group-hover/item:text-foreground transition-colors">
                        {cert}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>

            {/* Achievements */}
            <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
              <div className="space-y-8">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                  <Trophy className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-3xl font-light tracking-wide">Achievements</h3>
                <div className="space-y-4">
                  {achievements.map((achievement, index) => (
                    <div key={index} className="flex items-start gap-4 group/item hover:translate-x-2 transition-transform duration-300">
                      <div className="mt-1 text-xs text-muted-foreground/50 font-light min-w-[24px]">
                        {String(index + 1).padStart(2, '0')}
                      </div>
                      <p className="text-sm font-light leading-relaxed text-muted-foreground/70 group-hover/item:text-foreground transition-colors">
                        {achievement}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
