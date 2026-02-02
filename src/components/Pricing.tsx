import { Check } from "lucide-react";
import { Button } from "./ui/button";

const freePlanFeatures = [
  "1 Paciente",
  "2 Usuários (1 Gestor ou 1 Cuidador)",
  "2 Famílias no Dashboard do Cuidador",
  "3 Cuidadores (Familiares ou Profissionais)",
];

const freeFeatures = [
  "Prescrição Médica",
  "Prescrição de Cuidados",
  "Escala de cuidados",
  "Rotina do quer",
  "Registro de vitais de sinais",
  "Conteúdos Básicos",
];

const premiumPlanFeatures = [
  "Todas do plano gratuito +",
  "Usuário de apoio e criação",
  "Acesso aos relatórios de saúde",
  "Registro de exames",
  "Acesso personalizado por paciente",
  "Avaliação de Enfermagem",
  "Conteúdos exclusivos",
];

export function Pricing() {
  return (
    <section id="precos" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Preços transparentes
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para <span className="text-accent">você</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comece gratuitamente e faça upgrade quando precisar de mais recursos.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-12 items-start">
          {/* Free Plan */}
          <div className="bg-white rounded-2xl border border-border p-6 hover:shadow-lg transition-shadow">
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">Plano Gratuito</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">Grátis</span>
                <span className="text-muted-foreground text-sm">para sempre</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Perfeito para quem quer testar o Cuidame
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Limites</p>
              <ul className="space-y-2">
                {freePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-muted-foreground">•</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Funcionalidades</p>
              <ul className="space-y-2">
                {freeFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <Button variant="outline" className="w-full rounded-full">
              Criar Conta Grátis
            </Button>
          </div>

          {/* Premium Plan */}
          <div className="bg-white rounded-2xl border-2 border-accent p-6 shadow-lg relative">
            <div className="absolute -top-3 left-1/2 -translate-x-1/2">
              <span className="bg-accent text-white text-xs font-semibold px-4 py-1 rounded-full">
                Recomendado
              </span>
            </div>

            <div className="mb-6">
              <h3 className="text-lg font-semibold text-foreground mb-1">Plano Premium</h3>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-bold text-foreground">9,90</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Perfeito para quem quer o máximo do Cuidame
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">Funcionalidades</p>
              <ul className="space-y-2">
                {premiumPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <p className="text-xs text-muted-foreground mb-4 text-center">
              Aproveite os recursos do Plano anualmente pela metade. Acesse por R$7.00/mês
            </p>

            <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
              Assinar Premium
            </Button>

            <p className="text-xs text-muted-foreground mt-4 text-center">
              Ver todos os detalhes nos planos →
            </p>
          </div>

          {/* Additional Users */}
          <div className="bg-secondary/50 rounded-2xl p-6">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Inclua mais pessoas na sua conta
            </h3>
            <div className="flex items-baseline gap-1 mb-4">
              <span className="text-2xl font-bold text-foreground">+ R$ 2,90</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>
            
            <p className="text-sm text-muted-foreground mb-4">
              Cada pessoa adicionada tem acesso a:
            </p>

            <ul className="space-y-2 mb-6">
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                1 Paciente
              </li>
              <li className="flex items-center gap-2 text-sm text-foreground">
                <Check className="w-4 h-4 text-accent flex-shrink-0" />
                1 Familiar / Gestor ou Cuidador ou Profissional
              </li>
            </ul>

            <Button variant="outline" className="w-full rounded-full">
              Criar usuário incluso
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
