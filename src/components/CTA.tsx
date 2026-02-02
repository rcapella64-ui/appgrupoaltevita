import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative p-12 md:p-16 rounded-3xl card-gradient border border-border text-center overflow-hidden"
        >
          {/* Background glow */}
          <div className="absolute inset-0 bg-glow opacity-50 pointer-events-none" />
          
          <div className="relative z-10">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Pronto para começar?
            </h2>
            <p className="text-muted-foreground text-lg max-w-xl mx-auto mb-8">
              Junte-se a milhares de empresas que já transformaram seus produtos digitais.
            </p>
            <Button size="lg" className="glow group">
              Iniciar gratuitamente
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
