import { Mail, Phone, Linkedin, MapPin } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "konisettiparinitha@gmail.com",
      link: "mailto:konisettiparinitha@gmail.com",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 89193 58544",
      link: "tel:+918919358544",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "konisetti-parinitha",
      link: "https://www.linkedin.com/in/konisetti-parinitha",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Andhra Pradesh, India",
      link: null,
    },
  ];

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-background">
      {/* Background blur orbs */}
      <div className="absolute bottom-1/4 left-1/4 w-[600px] h-[600px] bg-secondary/30 blur-orb animate-glow-pulse" />
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto space-y-20 animate-fade-in">
          <div className="space-y-6">
            <h2 className="text-5xl md:text-7xl font-light tracking-tight">CONTACT</h2>
            <div className="h-px w-32 bg-primary" />
            <p className="text-lg text-muted-foreground/70 font-light max-w-2xl">
              I'm always open to new opportunities and collaborations. 
              Feel free to reach out!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {contactInfo.map((contact, index) => (
              <Card
                key={contact.label}
                className="glass-effect p-8 border-0 hover:bg-white/5 transition-all duration-500 group"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {contact.link ? (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-start gap-6"
                  >
                    <contact.icon className="h-6 w-6 text-primary group-hover:scale-110 transition-transform duration-500" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground/50 mb-2 font-light tracking-wider uppercase">{contact.label}</p>
                      <p className="text-lg font-light group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-start gap-6">
                    <contact.icon className="h-6 w-6 text-primary" />
                    <div className="flex-1">
                      <p className="text-xs text-muted-foreground/50 mb-2 font-light tracking-wider uppercase">{contact.label}</p>
                      <p className="text-lg font-light">{contact.value}</p>
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center pt-12">
            <div className="flex flex-wrap gap-6 justify-center">
              <Button
                asChild
                className="glass-effect hover:bg-primary/20 text-foreground px-10 py-7 text-base font-light tracking-wide group transition-all duration-500"
              >
                <a href="mailto:konisettiparinitha@gmail.com">
                  <Mail className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  SEND EMAIL
                </a>
              </Button>
              <Button
                asChild
                variant="ghost"
                className="px-10 py-7 text-base font-light tracking-wide hover:bg-transparent group"
              >
                <a
                  href="https://www.linkedin.com/in/konisetti-parinitha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-3 h-5 w-5 group-hover:scale-110 transition-transform" />
                  LINKEDIN
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
