import { ArrowDown, Github, Linkedin, Mail, Phone } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background gradient */}
      <div className="absolute inset-0 bg-[var(--gradient-hero)] opacity-50" />
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-primary-glow/20 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h1 className="text-5xl md:text-7xl font-bold">
              Hi, I'm <span className="text-gradient">Konisetti Parinitha</span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground">
              B.Tech Student | AI & ML Enthusiast | Software Developer
            </p>
          </div>

          <p className="text-lg text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Passionate about creating innovative solutions with Artificial Intelligence and Machine Learning. 
            Currently pursuing Computer Science Engineering at Sri Vasavi Engineering College.
          </p>

          <div className="flex flex-wrap gap-4 justify-center items-center">
            <Button
              onClick={() => scrollToSection("contact")}
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect"
            >
              <Mail className="mr-2 h-5 w-5" />
              Get In Touch
            </Button>
            <Button
              variant="outline"
              onClick={() => scrollToSection("about")}
              className="px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
            >
              Learn More
              <ArrowDown className="ml-2 h-5 w-5 animate-bounce" />
            </Button>
          </div>

          <div className="flex gap-6 justify-center pt-8">
            <a
              href="https://www.linkedin.com/in/konisetti-parinitha"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all hover:scale-110 hover:glow-effect"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="mailto:konisettiparinitha@gmail.com"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all hover:scale-110 hover:glow-effect"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+918919358544"
              className="p-3 rounded-full bg-card hover:bg-primary/20 transition-all hover:scale-110 hover:glow-effect"
            >
              <Phone className="h-6 w-6" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
