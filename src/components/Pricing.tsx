import { Check } from "lucide-react";
import { Button } from "./ui/button";

const freePlanAccounts = [
  "1 Paciente",
  "1 Familiar (Gestor de Cuidado)",
  "2 Cuidadores (Familiares ou Profissionais)",
];

const freePlanFeatures = [
  "Prescrição Médica",
  "Prescrição de Cuidados",
  "Escala de cuidadores",
  "Rotina de saúde",
  "Registro e divisão de gastos",
  "Conteúdos Básicos",
];

const premiumPlanAccounts = [
  "2 Pacientes",
  "2 Familiares (Gestores de Cuidado)",
  "2 Cuidadores (Familiares ou Profissionais)",
];

const premiumPlanFeatures = [
  "Todas do plano gratuito",
  "Registros de consultas de saúde",
  "Registros de exames",
  "Agenda personalizada por paciente",
  "Avaliações de Enfermagem",
  "Conteúdos exclusivos",
];

const additionalUserFeatures = [
  "+1 Pacientes ou",
  "+1 Familiar (Gestores de Cuidado) ou",
  "+1 Cuidadores (Familiares ou Profissionais)",
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
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold text-foreground">Grátis</span>
                <span className="text-muted-foreground text-sm">para sempre</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Ideal para famílias iniciando o cuidado
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground mb-3">Contas:</p>
              <ul className="space-y-2">
                {freePlanAccounts.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-muted-foreground">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground mb-3">Funcionalidades:</p>
              <ul className="space-y-2">
                {freePlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-muted-foreground">+</span>
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
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-bold text-foreground">9,90</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mt-2">
                Para famílias que querem mais controle
              </p>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground mb-3">Contas:</p>
              <ul className="space-y-2">
                {premiumPlanAccounts.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                    <span className="text-muted-foreground">•</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground mb-3">Funcionalidades:</p>
              <ul className="space-y-2">
                {premiumPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-foreground">
                    <span className="text-muted-foreground">+</span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-accent/10 rounded-lg p-3 mb-4 text-center">
              <p className="text-xs text-accent">
                Aproveite todos os recursos do Plano Premium durante o mês de lançamento do aplicativo Cuidame (até 01/03/2026)
              </p>
            </div>

            <Button className="w-full bg-accent hover:bg-accent/90 text-white rounded-full">
              Assinar Premium →
            </Button>
          </div>

          {/* Additional Users */}
          <div className="bg-secondary/30 rounded-2xl p-6 border border-dashed border-border">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Inclua mais pessoas na sua conta
            </h3>
            <div className="flex items-baseline gap-1 mb-2">
              <span className="text-2xl font-bold text-accent">+ R$ 2,90</span>
              <span className="text-muted-foreground text-sm">/mês</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6">
              por usuário adicional
            </p>
            
            <p className="text-sm text-foreground mb-4">
              Você poderá cadastrar mais um usuário:
            </p>

            <ul className="space-y-2 mb-6">
              {additionalUserFeatures.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-foreground">
                  <span className="text-muted-foreground">•</span>
                  {item}
                </li>
              ))}
            </ul>

            <Button variant="outline" className="w-full rounded-full bg-accent/10 border-accent/30 text-accent hover:bg-accent/20">
              Adicionar Usuário
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
