import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-16 relative overflow-hidden bg-background border-t border-white/5">
      <div className="container mx-auto px-4 text-center">
        <p className="text-muted-foreground/50 font-light tracking-wide">
          © {new Date().getFullYear()} Konisetti Parinitha. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
