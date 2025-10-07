import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-background">
      {/* Elegant blur orbs */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary blur-orb animate-float-slow" />
      <div className="absolute bottom-1/3 right-1/4 w-[600px] h-[600px] bg-secondary blur-orb animate-float-slow" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/2 right-1/3 w-[400px] h-[400px] bg-primary/60 blur-orb animate-glow-pulse" style={{ animationDelay: "1s" }} />

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto space-y-12 animate-reveal">
          <div className="space-y-6">
            <h1 className="text-6xl md:text-8xl lg:text-9xl font-light tracking-tight leading-none">
              KONISETTI<br />
              <span className="font-extralight">PARINITHA</span>
            </h1>
            <div className="h-px w-24 bg-primary" />
            <p className="text-xl md:text-2xl text-muted-foreground font-light tracking-wide">
              B.Tech Student | AI & ML Enthusiast | Software Developer
            </p>
          </div>

          <p className="text-base md:text-lg text-muted-foreground/80 max-w-2xl font-light leading-relaxed">
            Passionate about creating innovative solutions with Artificial Intelligence and Machine Learning. 
            Currently pursuing Computer Science Engineering at Sri Vasavi Engineering College.
          </p>

          <div className="flex flex-wrap gap-6 items-center pt-4">
            <Button
              onClick={() => scrollToSection("contact")}
              className="glass-effect hover:bg-primary/20 text-foreground px-10 py-7 text-base font-light tracking-wide group transition-all duration-500"
            >
              <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
              GET IN TOUCH
            </Button>
            <Button
              variant="ghost"
              onClick={() => scrollToSection("about")}
              className="px-10 py-7 text-base font-light tracking-wide hover:bg-transparent group"
            >
              <span className="flex items-center gap-3">
                EXPLORE
                <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
              </span>
            </Button>
          </div>

          <div className="flex gap-8 pt-12">
            <a
              href="https://www.linkedin.com/in/konisetti-parinitha"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-effect p-4 hover:bg-primary/10 transition-all duration-500 hover:scale-110 group"
            >
              <Linkedin className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="mailto:konisettiparinitha@gmail.com"
              className="glass-effect p-4 hover:bg-primary/10 transition-all duration-500 hover:scale-110 group"
            >
              <Mail className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
            <a
              href="tel:+918919358544"
              className="glass-effect p-4 hover:bg-primary/10 transition-all duration-500 hover:scale-110 group"
            >
              <Phone className="h-5 w-5 group-hover:text-primary transition-colors" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom info */}
      <div className="absolute bottom-8 left-8 text-sm text-muted-foreground/60 font-light tracking-wide">
        PORTFOLIO 2025
      </div>
      <div className="absolute bottom-8 right-8 text-sm text-muted-foreground/60 font-light tracking-wide">
        konisettiparinitha@gmail.com
      </div>
    </section>
  );
};

export default Hero;
