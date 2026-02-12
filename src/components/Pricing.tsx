import { Check, Sparkles, Zap, Users, Crown } from "lucide-react";
import { Button } from "./ui/button";
import { Badge } from "./ui/badge";

const basicPlanUsers = [
  "1 Paciente",
  "2 Cuidadores (Familiar ou Profissional)",
  "1 Administrador da Conta",
];

const basicPlanFeatures = [
  "Prescrição Médica",
  "Prescrição de Cuidado",
  "Escala de Cuidados",
  "Rotina de Saúde",
  "Registro e Divisão de Gastos",
  "Conteúdos Básicos",
];

const premiumPlanUsers = [
  "2 Pacientes",
  "4 Cuidadores (Familiar ou Profissional)",
  "1 Administrador da Conta",
];

const premiumPlanFeatures = [
  "Todos do Básico",
  "Registros de Consultas de Saúde",
  "Registros de Exames",
  "Agenda personalizada por paciente",
  "Conteúdos Exclusivos",
];

export function Pricing() {
  return (
    <section id="precos" className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-4">
          <span className="inline-block px-4 py-1.5 rounded-full bg-accent/10 text-accent text-sm font-medium mb-4">
            Preços transparentes
          </span>
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-4">
            Escolha o plano ideal para <span className="text-gradient-accent">você</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comece com o Básico e evolua quando precisar. Sem surpresas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mt-12 items-stretch">
          {/* Plano Básico */}
          <div className="bg-card rounded-2xl border border-border p-7 flex flex-col card-hover">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Zap className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Plano Básico</h3>
            </div>

            <div className="mb-1">
              <div className="flex items-end gap-1">
                <span className="text-sm text-muted-foreground line-through">R$ 9,90</span>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-extrabold text-gradient">Grátis</span>
              </div>
              <p className="text-xs text-accent font-medium mt-1">
                por 3 meses · depois R$ 9,90/mês
              </p>
            </div>

            <div className="w-full h-px bg-border my-5" />

            <div className="mb-5">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-accent" /> Usuários
              </p>
              <ul className="space-y-2.5">
                {basicPlanUsers.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" /> Funcionalidades
              </p>
              <ul className="space-y-2.5">
                {basicPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Button variant="outline" className="w-full rounded-full text-accent border-accent/30 hover:bg-accent/10">
                Começar Grátis
              </Button>
            </div>
          </div>

          {/* Plano Premium */}
          <div className="bg-card rounded-2xl border-2 border-accent p-7 flex flex-col relative shadow-card lg:scale-105">
            <div className="absolute -top-3.5 left-1/2 -translate-x-1/2">
              <Badge className="bg-accent text-accent-foreground shadow-lg px-4 py-1 text-xs">
                <Crown className="w-3 h-3 mr-1" /> Mais Popular
              </Badge>
            </div>

            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-gradient-accent flex items-center justify-center">
                <Crown className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Plano Premium</h3>
            </div>

            <div className="mb-1">
              <div className="flex items-end gap-2">
                <span className="text-sm text-muted-foreground line-through">R$ 49,90</span>
                <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-0">
                  -40%
                </Badge>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-extrabold text-foreground">29,90</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>
              <p className="text-xs text-accent font-medium mt-1">
                Desconto de lançamento
              </p>
            </div>

            <div className="w-full h-px bg-accent/20 my-5" />

            <div className="mb-5">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Users className="w-3.5 h-3.5 text-accent" /> Usuários
              </p>
              <ul className="space-y-2.5">
                {premiumPlanUsers.map((item) => (
                  <li key={item} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3 flex items-center gap-1.5">
                <Sparkles className="w-3.5 h-3.5 text-accent" /> Funcionalidades
              </p>
              <ul className="space-y-2.5">
                {premiumPlanFeatures.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5 text-sm text-foreground">
                    <Check className="w-4 h-4 text-accent flex-shrink-0" />
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-auto">
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground rounded-full font-semibold shadow-lg">
                Assinar Premium →
              </Button>
            </div>
          </div>

          {/* Usuários Adicionais */}
          <div className="bg-card rounded-2xl border border-border p-7 flex flex-col card-hover">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-lg font-bold text-foreground">Usuários Adicionais</h3>
            </div>

            <p className="text-xs text-muted-foreground mb-3">Disponível para qualquer plano</p>

            <div className="mb-1">
              <div className="flex items-end gap-2">
                <span className="text-sm text-muted-foreground line-through">R$ 4,90</span>
                <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-0">
                  Desconto
                </Badge>
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-sm text-muted-foreground">R$</span>
                <span className="text-4xl font-extrabold text-foreground">2,90</span>
                <span className="text-muted-foreground text-sm">/mês</span>
              </div>
              <p className="text-xs text-accent font-medium mt-1">
                por usuário adicional
              </p>
            </div>

            <div className="w-full h-px bg-border my-5" />

            <div className="mb-6">
              <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">
                Cadastre mais um usuário:
              </p>
              <ul className="space-y-2.5">
                <li className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  +1 Paciente
                </li>
                <li className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  +1 Cuidador (Familiar ou Profissional)
                </li>
                <li className="flex items-center gap-2.5 text-sm text-foreground">
                  <Check className="w-4 h-4 text-accent flex-shrink-0" />
                  +1 Administrador da Conta
                </li>
              </ul>
            </div>

            <p className="text-xs text-muted-foreground mb-6">
              Ideal para famílias maiores que precisam de mais pessoas acompanhando o cuidado.
            </p>

            <div className="mt-auto">
              <Button variant="outline" className="w-full rounded-full text-accent border-accent/30 hover:bg-accent/10">
                Adicionar Usuário
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
