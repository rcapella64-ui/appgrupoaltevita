import { motion } from "framer-motion";
import { Zap, Shield, Layers, Globe, Rocket, Code } from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Ultra Rápido",
    description: "Performance otimizada para carregar em milissegundos, não segundos.",
  },
  {
    icon: Shield,
    title: "Seguro",
    description: "Proteção de nível empresarial com criptografia de ponta a ponta.",
  },
  {
    icon: Layers,
    title: "Escalável",
    description: "Cresce com você, de startup a empresa global sem fricção.",
  },
  {
    icon: Globe,
    title: "Global",
    description: "CDN distribuída mundialmente para alcance instantâneo.",
  },
  {
    icon: Rocket,
    title: "Moderno",
    description: "Construído com as tecnologias mais recentes do mercado.",
  },
  {
    icon: Code,
    title: "Developer First",
    description: "APIs intuitivas e documentação excepcional para devs.",
  },
];

const Features = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Tudo que você precisa
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Ferramentas poderosas para construir produtos excepcionais
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-6 rounded-2xl card-gradient border border-border hover:border-primary/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <feature.icon className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
