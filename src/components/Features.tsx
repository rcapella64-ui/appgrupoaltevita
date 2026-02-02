import {
  Users,
  FileCheck,
  Calendar,
  ClipboardList,
  MessageCircle,
  GraduationCap,
} from "lucide-react";

const features = [
  {
    icon: Users,
    title: "Gestão de Perfis",
    description: "Controle de acesso com Perfis, Gestor, Cuidador e Paciente.",
  },
  {
    icon: FileCheck,
    title: "Prescrições Seguras",
    description: "Armazene de forma segura os registros de prescrições médicas.",
  },
  {
    icon: Calendar,
    title: "Agenda Inteligente",
    description: "Calendário de consultas, exames e escalas de cuidadores.",
  },
  {
    icon: ClipboardList,
    title: "Prontuário Digital",
    description: "Histórico de evolução, intercorrências e registros de saúde.",
  },
  {
    icon: MessageCircle,
    title: "Chat Integrado",
    description: "Comunicação direta entre familiares e equipe de cuidadores.",
  },
  {
    icon: GraduationCap,
    title: "Cuidame Academy",
    description: "Trilhas de educação e treinamento para cuidadores e familiares.",
  },
];

const Features = () => {
  return (
    <section id="funcionalidades" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Tudo que você precisa em um só lugar
          </h2>
          <p className="text-muted-foreground">
            Funcionalidades pensadas para simplificar o cuidado
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="bg-white rounded-2xl p-6 border border-border hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <feature.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
