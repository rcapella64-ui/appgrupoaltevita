import { motion } from "framer-motion";
import { Shield, UserCog, Heart, User } from "lucide-react";

const profiles = [
  {
    icon: Shield,
    title: "Administrador",
    description:
      "Acesso completo ao sistema. Gerencia usuários, configura permissões, visualiza relatórios e mantém a segurança da plataforma.",
    features: [
      "Gestão completa de usuários",
      "Dashboard com métricas",
      "Configurações do sistema",
      "Relatórios avançados",
    ],
    gradient: "from-primary to-primary/80",
  },
  {
    icon: UserCog,
    title: "Gestor de Cuidados",
    description:
      "Familiares ou enfermeiros responsáveis. Coordenam o plano de cuidados, gerenciam escalas e acompanham a evolução do paciente.",
    features: [
      "Criação de prescrições",
      "Gestão de escalas",
      "Comunicação com equipe",
      "Histórico clínico",
    ],
    gradient: "from-accent to-cuidame-teal",
  },
  {
    icon: Heart,
    title: "Cuidador",
    description:
      "Profissionais que executam o cuidado diário. Registram atividades, sinais vitais e mantêm a comunicação com a equipe.",
    features: [
      "Registro de atividades",
      "Checklist de tarefas",
      "Chat com a equipe",
      "Conteúdos educativos",
    ],
    gradient: "from-cuidame-teal to-cyan-500",
  },
  {
    icon: User,
    title: "Paciente",
    description:
      "Visão simplificada do próprio cuidado. Acessa sua rotina, medicamentos, consultas e conteúdos educativos personalizados.",
    features: [
      "Visualização de rotina",
      "Lembretes de medicação",
      "Agenda de consultas",
      "Material educativo",
    ],
    gradient: "from-blue-500 to-indigo-500",
  },
];

export function Profiles() {
  return (
    <section id="perfis" className="section-padding bg-secondary/30">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-card text-accent text-sm font-medium mb-4">
            Perfis de Acesso
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Uma experiência <span className="text-gradient">personalizada</span>{" "}
            para cada papel
          </h2>
          <p className="text-lg text-muted-foreground">
            Cada usuário tem acesso às funcionalidades adequadas ao seu papel,
            garantindo segurança e eficiência no cuidado.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
          {profiles.map((profile, index) => (
            <motion.div
              key={profile.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl border border-border overflow-hidden card-hover"
            >
              {/* Gradient Header */}
              <div
                className={`h-2 bg-gradient-to-r ${profile.gradient}`}
              />
              
              <div className="p-6 lg:p-8">
                <div className="flex items-start gap-4 mb-5">
                  <div
                    className={`w-14 h-14 rounded-xl bg-gradient-to-br ${profile.gradient} flex items-center justify-center flex-shrink-0`}
                  >
                    <profile.icon className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{profile.title}</h3>
                    <p className="text-muted-foreground text-sm leading-relaxed">
                      {profile.description}
                    </p>
                  </div>
                </div>

                <div className="space-y-3">
                  {profile.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-sm"
                    >
                      <div className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${profile.gradient}`} />
                      <span className="text-foreground/80">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
