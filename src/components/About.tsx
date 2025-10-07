import { Target, Lightbulb, Heart } from "lucide-react";
import { Card, CardContent } from "./ui/card";

const About = () => {
  return (
    <section id="about" className="py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            About <span className="text-gradient">Me</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-slide-in-left">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 glow-effect">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">Career Objective</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    B.Tech student specializing in AI and ML at Sri Vasavi Engineering College, 
                    seeking internships to apply and enhance my skills in Software Development. 
                    Passionate about real-time projects regarding the environment. 
                    I'm sure that I will give my best at your company.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all animate-slide-in-right">
            <CardContent className="p-8">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-primary/20 glow-effect">
                  <Lightbulb className="h-6 w-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-2xl font-bold mb-4">What Drives Me</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    I'm passionate about leveraging Artificial Intelligence and Machine Learning 
                    to solve real-world problems. My focus is on creating innovative solutions 
                    that make a positive impact on society and the environment.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        <Card className="bg-card/50 backdrop-blur border-primary/20 animate-fade-in">
          <CardContent className="p-8">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-lg bg-primary/20 glow-effect">
                <Heart className="h-6 w-6 text-primary" />
              </div>
              <div className="flex-1">
                <h3 className="text-2xl font-bold mb-4">Beyond Code</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">
                  When I'm not coding, you'll find me expressing creativity through performing arts. 
                  I've performed in cultural events including dance and skit performances, which have 
                  helped me develop strong presentation and teamwork skills.
                </p>
                <div className="flex flex-wrap gap-3">
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30">
                    🎭 Performing Arts
                  </span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30">
                    💃 Cultural Dance
                  </span>
                  <span className="px-4 py-2 rounded-full bg-primary/10 text-primary border border-primary/30">
                    🎪 Skit Performance
                  </span>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default About;
