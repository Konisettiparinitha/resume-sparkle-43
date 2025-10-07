import { Target, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden bg-background">
      {/* Background blur orbs */}
      <div className="absolute top-1/4 right-1/4 w-[400px] h-[400px] bg-secondary/40 blur-orb animate-glow-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto space-y-16 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">ABOUT ME</h2>
            <div className="h-px w-32 bg-primary" />
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-light tracking-wide">Career Objective</h3>
                <p className="text-muted-foreground/70 leading-relaxed font-light">
                  B.Tech student specializing in AI and ML at Sri Vasavi Engineering College, 
                  seeking internships to apply and enhance my skills in Software Development. 
                  Passionate about real-time projects regarding the environment.
                </p>
              </div>
            </Card>

            <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-light tracking-wide">What Drives Me</h3>
                <p className="text-muted-foreground/70 leading-relaxed font-light">
                  I'm passionate about leveraging Artificial Intelligence and Machine Learning 
                  to solve real-world problems. My focus is on creating innovative solutions 
                  that make a positive impact on society and the environment.
                </p>
              </div>
            </Card>

            <Card className="glass-effect p-12 border-0 hover:bg-white/5 transition-all duration-500 group">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="h-px w-12 bg-primary group-hover:w-20 transition-all duration-500" />
                  <Heart className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-light tracking-wide">Beyond Code</h3>
                <p className="text-muted-foreground/70 leading-relaxed font-light mb-4">
                  When I'm not coding, you'll find me expressing creativity through performing arts. 
                  Cultural events, dance, and skit performances have helped me develop strong presentation skills.
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
