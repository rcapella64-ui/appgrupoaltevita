import { motion } from "framer-motion";
import {
  Users,
  Pill,
  Calendar,
  ClipboardCheck,
  Stethoscope,
  MessageCircle,
  GraduationCap,
  BarChart3,
  Settings,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestão de Usuários",
    description:
      "Crie e administre pacientes, gestores e cuidadores com controle fino de acessos e permissões.",
    color: "bg-blue-500/10 text-blue-600",
  },
  {
    icon: Pill,
    title: "Prescrições Médicas",
    description:
      "Registre medicamentos, rotinas de cuidado e intervenções com horários e recorrência.",
    color: "bg-emerald-500/10 text-emerald-600",
  },
  {
    icon: Calendar,
    title: "Agenda e Escalas",
    description:
      "Gerencie eventos, consultas e escalas de cuidadores com visão em calendário e notificações.",
    color: "bg-purple-500/10 text-purple-600",
  },
  {
    icon: ClipboardCheck,
    title: "Registro de Cuidados",
    description:
      "Cuidadores registram atividades, sinais vitais e evoluções com histórico auditável.",
    color: "bg-orange-500/10 text-orange-600",
  },
  {
    icon: Stethoscope,
    title: "Acompanhamento Clínico",
    description:
      "Centralize registros de consultas, exames e avaliações com anexos organizados.",
    color: "bg-pink-500/10 text-pink-600",
  },
  {
    icon: MessageCircle,
    title: "Comunicação Integrada",
    description:
      "Chat em grupo entre cuidadores, enfermeiros e familiares com troca de arquivos.",
    color: "bg-cyan-500/10 text-cyan-600",
  },
  {
    icon: GraduationCap,
    title: "Conteúdos Educativos",
    description:
      "Trilhas e aulas em vídeo atribuídas ao paciente com controle de progresso.",
    color: "bg-yellow-500/10 text-yellow-600",
  },
  {
    icon: BarChart3,
    title: "Dashboard e Relatórios",
    description:
      "Indicadores de uso, adesão, intercorrências e dados operacionais para gestão.",
    color: "bg-indigo-500/10 text-indigo-600",
  },
  {
    icon: Settings,
    title: "Configurações",
    description:
      "Gestão de dados pessoais, notificações, privacidade e canal de suporte.",
    color: "bg-gray-500/10 text-gray-600",
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const Features = () => {
  return (
    <section id="funcionalidades" className="section-padding bg-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-secondary text-accent text-sm font-medium mb-4">
            Funcionalidades
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Tudo que você precisa para{" "}
            <span className="text-gradient">cuidar melhor</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            O Cuidame oferece um conjunto completo de ferramentas para gerenciar
            todos os aspectos do cuidado de saúde de forma integrada e eficiente.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={itemVariants}
              className="group p-6 lg:p-8 rounded-2xl bg-card border border-border card-hover"
            >
              <div
                className={`w-14 h-14 rounded-xl ${feature.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform`}
              >
                <feature.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Features;
