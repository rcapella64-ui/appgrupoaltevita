import { ArrowRight, Users, Building2 } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Para Cuidar de Familiares",
    description: "Cuide de idosos, doentes ou pessoas com necessidades especiais em casa com ajuda de cuidadores e profissionais de saúde.",
    link: "#familias",
    linkText: "Conhecer solução",
  },
  {
    icon: Building2,
    title: "Para Agências de Home Care",
    description: "Gestão de equipes, auditoria de prontuário e padronização de processos para empresas de cuidados domiciliares.",
    link: "#empresas",
    linkText: "Conhecer solução",
  },
];

export function WhoAreYou() {
  return (
    <section id="quem-e-voce" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Quem é você?
          </h2>
          <p className="text-muted-foreground">
            Escolha o perfil que melhor se encaixa nas suas necessidades
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {audiences.map((item) => (
            <div
              key={item.title}
              className="bg-white border border-border rounded-2xl p-6 hover:shadow-lg transition-shadow group"
            >
              <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4">
                <item.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {item.description}
              </p>
              <a
                href={item.link}
                className="inline-flex items-center gap-2 text-sm font-medium text-accent hover:text-accent/80 transition-colors group-hover:gap-3"
              >
                {item.linkText}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
