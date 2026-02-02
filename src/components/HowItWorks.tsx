import { motion } from "framer-motion";
import { UserPlus, Settings2, PlayCircle, BarChart } from "lucide-react";

const steps = [
  {
    step: "01",
    icon: UserPlus,
    title: "Cadastre-se",
    description:
      "Crie sua conta e configure o perfil do paciente com informações de saúde, contatos de emergência e preferências.",
  },
  {
    step: "02",
    icon: Settings2,
    title: "Configure o Cuidado",
    description:
      "Adicione prescrições, monte a escala de cuidadores e defina as rotinas diárias de acordo com as necessidades.",
  },
  {
    step: "03",
    icon: PlayCircle,
    title: "Execute e Registre",
    description:
      "A equipe de cuidado executa as tarefas e registra tudo no app. Família e gestores acompanham em tempo real.",
  },
  {
    step: "04",
    icon: BarChart,
    title: "Acompanhe e Melhore",
    description:
      "Visualize relatórios, identifique padrões e tome decisões baseadas em dados para melhorar o cuidado.",
  },
];

export function HowItWorks() {
  return (
    <section className="section-padding bg-primary text-primary-foreground relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-white rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-white rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium mb-4">
            Como Funciona
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Simples de começar, poderoso de usar
          </h2>
          <p className="text-lg text-white/80">
            Em poucos passos você configura todo o cuidado e sua equipe já pode
            começar a usar o Cuidame.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative text-center"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[60%] w-[80%] h-0.5 bg-white/20" />
              )}

              <div className="relative inline-flex flex-col items-center">
                <span className="text-6xl font-bold text-white/10 mb-4">
                  {step.step}
                </span>
                <div className="w-16 h-16 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center mb-5 -mt-16">
                  <step.icon className="w-8 h-8 text-white" />
                </div>
              </div>

              <h3 className="text-xl font-semibold mb-3">{step.title}</h3>
              <p className="text-white/70 leading-relaxed">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
