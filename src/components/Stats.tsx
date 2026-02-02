import { Clock, Shield, Zap, Heart } from "lucide-react";

const stats = [
  {
    icon: Clock,
    value: "70%",
    label: "Menos tempo",
    description: "Reduza o tempo gasto com burocracia e comunicações dispersas",
  },
  {
    icon: Shield,
    value: "100%",
    label: "Rastreável",
    description: "Todo o histórico documentado para auditoria e segurança",
  },
  {
    icon: Zap,
    value: "3×",
    label: "Mais eficiência",
    description: "Equipes de cuidadores mais produtivas e comunicação fluida",
  },
  {
    icon: Heart,
    value: "95%",
    label: "Satisfação",
    description: "Famílias mais tranquilas e felizes com o cuidado",
  },
];

export function Stats() {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Resultados reais
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Transforme a forma como você <span className="text-accent italic">cuida</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            O Cuidame foi projetado para trazer resultados práticos reais para famílias, cuidadores e instituições de saúde.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat) => (
            <div
              key={stat.value}
              className="text-center p-6"
            >
              <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <stat.icon className="w-7 h-7 text-accent" />
              </div>
              <p className="text-4xl md:text-5xl font-bold text-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-sm font-semibold text-foreground mb-1">
                {stat.label}
              </p>
              <p className="text-xs text-muted-foreground">
                {stat.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
