import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import cuidameLogo from "@/assets/cuidame-logo.png";

const navLinks = [
  { href: "/", label: "Início" },
  { href: "/familias", label: "Para Famílias" },
  { href: "/empresas", label: "Para Empresas" },
  { href: "/precos", label: "Preços" },
  { href: "/ajuda", label: "Ajuda" },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-xl shadow-lg shadow-black/5 py-3 border-b border-white/20"
          : "bg-transparent py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <a href="#" className="flex items-center">
          <img src={cuidameLogo} alt="Cuidame" className="h-8 md:h-10" />
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
        </nav>

        <div className="hidden lg:flex items-center gap-4">
          <a href="#" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Entrar
          </a>
          <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
            Começar Grátis
          </Button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden p-2 text-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden absolute top-full left-0 right-0 bg-background border-b border-border shadow-lg">
          <nav className="px-4 py-6 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-base font-medium text-foreground/70 hover:text-primary transition-colors py-2"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 pt-4 border-t border-border">
              <a href="#" className="text-base font-medium text-foreground/70 py-2">
                Entrar
              </a>
              <Button className="w-full bg-primary text-primary-foreground rounded-full">
                Começar Grátis
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
