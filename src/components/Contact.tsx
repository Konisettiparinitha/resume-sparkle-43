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
    <section id="contact" className="py-20 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center space-y-4 mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-glow mx-auto rounded-full" />
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm always open to new opportunities and collaborations. 
            Feel free to reach out!
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 animate-fade-in">
          {contactInfo.map((contact, index) => (
            <Card
              key={contact.label}
              className="bg-card/50 backdrop-blur border-primary/20 hover:border-primary/50 transition-all hover:scale-105 group animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-6">
                {contact.link ? (
                  <a
                    href={contact.link}
                    target={contact.link.startsWith("http") ? "_blank" : undefined}
                    rel={contact.link.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="flex items-center gap-4"
                  >
                    <div className="p-3 rounded-lg bg-primary/20 group-hover:bg-primary/30 transition-colors glow-effect">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-semibold group-hover:text-primary transition-colors">
                        {contact.value}
                      </p>
                    </div>
                  </a>
                ) : (
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-lg bg-primary/20">
                      <contact.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-muted-foreground mb-1">{contact.label}</p>
                      <p className="font-semibold">{contact.value}</p>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="mt-12 bg-gradient-to-br from-primary/10 to-primary-glow/10 border-primary/30 animate-fade-in-up">
          <CardContent className="p-8 text-center">
            <h3 className="text-2xl font-bold mb-4">Ready to Work Together?</h3>
            <p className="text-muted-foreground mb-6">
              Looking for opportunities in software development, AI/ML projects, or internships.
              Let's create something amazing together!
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button
                asChild
                className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg glow-effect"
              >
                <a href="mailto:konisettiparinitha@gmail.com">
                  <Mail className="mr-2 h-5 w-5" />
                  Send Email
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="px-8 py-6 text-lg border-primary/50 hover:bg-primary/10"
              >
                <a
                  href="https://www.linkedin.com/in/konisetti-parinitha"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Linkedin className="mr-2 h-5 w-5" />
                  Connect on LinkedIn
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

export default Contact;
