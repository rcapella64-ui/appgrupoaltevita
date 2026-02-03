import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "./ui/button";
import cuidameLogo from "@/assets/cuidame-logo.png";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";

const APP_STORE_URL = "https://apps.apple.com/us/app/cuidame-gestor-de-sa%C3%BAde/id6744027992";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt";

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
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const detectOS = () => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    
    if (/android/i.test(userAgent)) {
      return "android";
    }
    
    if (/iPad|iPhone|iPod/.test(userAgent) && !(window as any).MSStream) {
      return "ios";
    }
    
    return "desktop";
  };

  const handleDownloadClick = () => {
    const os = detectOS();
    
    if (os === "android") {
      window.open(GOOGLE_PLAY_URL, "_blank");
    } else if (os === "ios") {
      window.open(APP_STORE_URL, "_blank");
    } else {
      setIsDialogOpen(true);
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled
            ? "bg-white/50 backdrop-blur-xl shadow-lg shadow-black/5 py-3 border-b border-white/20"
            : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          <a href="/" className="flex items-center">
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
          <a href="https://appaltevitacare.com.br/" target="_blank" rel="noopener noreferrer" className="text-sm font-medium text-foreground/70 hover:text-primary transition-colors">
            Entrar
          </a>
            <Button 
              className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6"
              onClick={handleDownloadClick}
            >
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
              <a href="https://appaltevitacare.com.br/" target="_blank" rel="noopener noreferrer" className="text-base font-medium text-foreground/70 py-2">
                Entrar
              </a>
                <Button 
                  className="w-full bg-primary text-primary-foreground rounded-full"
                  onClick={handleDownloadClick}
                >
                  Começar Grátis
                </Button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Download Dialog */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle className="text-center text-xl">Baixe o App Cuidame</DialogTitle>
          </DialogHeader>
          <div className="flex flex-col gap-4 py-4">
            <p className="text-center text-muted-foreground text-sm">
              Escolha a loja do seu dispositivo:
            </p>
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Baixar na</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>
            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 bg-foreground text-background px-5 py-3 rounded-xl hover:bg-foreground/90 transition-colors"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Disponível no</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default Navbar;
