import { motion } from "framer-motion";
import {
  Clock,
  ShieldCheck,
  TrendingUp,
  Smartphone,
  Bell,
  FileCheck,
} from "lucide-react";

const benefits = [
  {
    icon: Clock,
    title: "Economia de Tempo",
    description:
      "Reduza o tempo gasto com planilhas e comunicações dispersas. Tudo centralizado em um só lugar.",
  },
  {
    icon: ShieldCheck,
    title: "Segurança e Rastreabilidade",
    description:
      "Histórico completo e auditável de todas as ações. Dados protegidos com criptografia.",
  },
  {
    icon: TrendingUp,
    title: "Melhoria na Qualidade",
    description:
      "Padronização de processos e acompanhamento de indicadores para um cuidado cada vez melhor.",
  },
  {
    icon: Smartphone,
    title: "Acesso em Qualquer Lugar",
    description:
      "Aplicativo disponível para iOS e Android. Gerencie o cuidado de onde você estiver.",
  },
  {
    icon: Bell,
    title: "Notificações Inteligentes",
    description:
      "Alertas personalizados para medicações, tarefas e eventos importantes. Nunca perca um compromisso.",
  },
  {
    icon: FileCheck,
    title: "Conformidade",
    description:
      "Atende às normas de saúde e proteção de dados. Relatórios prontos para auditorias.",
  },
];

export function Benefits() {
  return (
    <section id="beneficios" className="section-padding bg-background relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cuidame-teal/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-block px-4 py-2 rounded-full bg-secondary text-accent text-sm font-medium mb-4">
              Benefícios
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Por que escolher o{" "}
              <span className="text-gradient">Cuidame</span>?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Desenvolvido com foco na experiência do usuário e nas necessidades
              reais de quem cuida e é cuidado. Veja como podemos transformar a
              gestão de saúde da sua família.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
                <div className="w-10 h-10 rounded-lg bg-status-success/20 flex items-center justify-center">
                  <span className="text-status-success text-lg font-bold">✓</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Suporte Humanizado</p>
                  <p className="text-xs text-muted-foreground">Atendimento real, não robôs</p>
                </div>
              </div>
              <div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-secondary">
                <div className="w-10 h-10 rounded-lg bg-status-info/20 flex items-center justify-center">
                  <span className="text-status-info text-lg font-bold">↗</span>
                </div>
                <div>
                  <p className="font-semibold text-sm">Atualizações Constantes</p>
                  <p className="text-xs text-muted-foreground">Novidades todo mês</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Benefits Grid */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="grid sm:grid-cols-2 gap-5"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="p-5 rounded-xl bg-card border border-border card-hover"
              >
                <div className="w-11 h-11 rounded-lg bg-gradient-primary flex items-center justify-center mb-4">
                  <benefit.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-semibold mb-2">{benefit.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
