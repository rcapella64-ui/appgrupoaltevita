import { motion } from "framer-motion";
import { Button } from "./ui/button";

const Navbar = () => {
  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold text-sm">M</span>
          </div>
          <span className="font-semibold text-lg">Modern</span>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Recursos
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Preços
          </a>
          <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
            Sobre
          </a>
        </div>

        <div className="flex items-center gap-4">
          <Button variant="ghost" className="hidden sm:inline-flex">
            Entrar
          </Button>
          <Button>Começar</Button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
