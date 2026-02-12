import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, Sparkles, Zap, Users, Crown } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

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

const PricingCards = () => (
  <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto items-stretch">
    {/* Plano Básico */}
    <div className="bg-card rounded-2xl border border-border p-7 flex flex-col card-hover">
      <div className="flex items-center gap-2 mb-4">
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center">
          <Zap className="w-5 h-5 text-accent" />
        </div>
        <h3 className="text-lg font-bold text-foreground">Plano Básico</h3>
      </div>

      <div className="mb-1">
        <span className="text-sm text-muted-foreground line-through">R$ 9,90</span>
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
          {basicPlanFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
              <Check className="w-4 h-4 text-accent flex-shrink-0" />
              {f}
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
    <div className="bg-card rounded-2xl border-2 border-accent p-7 flex flex-col relative shadow-card md:scale-105">
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
          <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-0">-40%</Badge>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">R$</span>
          <span className="text-4xl font-extrabold text-foreground">29,90</span>
          <span className="text-muted-foreground text-sm">/mês</span>
        </div>
        <p className="text-xs text-accent font-medium mt-1">Desconto de lançamento</p>
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
          {premiumPlanFeatures.map((f) => (
            <li key={f} className="flex items-center gap-2.5 text-sm text-foreground">
              <Check className="w-4 h-4 text-accent flex-shrink-0" />
              {f}
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
          <Badge variant="secondary" className="text-[10px] bg-accent/10 text-accent border-0">Desconto</Badge>
        </div>
        <div className="flex items-baseline gap-1">
          <span className="text-sm text-muted-foreground">R$</span>
          <span className="text-4xl font-extrabold text-foreground">2,90</span>
          <span className="text-muted-foreground text-sm">/mês</span>
        </div>
        <p className="text-xs text-accent font-medium mt-1">por usuário adicional</p>
      </div>

      <div className="w-full h-px bg-border my-5" />

      <div className="mb-6">
        <p className="text-xs font-semibold text-foreground uppercase tracking-wider mb-3">Cadastre mais um usuário:</p>
        <ul className="space-y-2.5">
          <li className="flex items-center gap-2.5 text-sm text-foreground">
            <Check className="w-4 h-4 text-accent flex-shrink-0" /> +1 Paciente
          </li>
          <li className="flex items-center gap-2.5 text-sm text-foreground">
            <Check className="w-4 h-4 text-accent flex-shrink-0" /> +1 Cuidador (Familiar ou Profissional)
          </li>
          <li className="flex items-center gap-2.5 text-sm text-foreground">
            <Check className="w-4 h-4 text-accent flex-shrink-0" /> +1 Administrador da Conta
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
);

const Precos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Preços transparentes
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal para <span className="text-gradient-accent">você</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comece com o Básico e evolua quando precisar. Sem surpresas, sem taxas escondidas.
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-12 bg-secondary/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="familias" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="familias" className="rounded-full">Para Famílias</TabsTrigger>
              <TabsTrigger value="empresas" className="rounded-full">Para Empresas</TabsTrigger>
            </TabsList>

            <TabsContent value="familias">
              <PricingCards />
            </TabsContent>

            <TabsContent value="empresas">
              <div className="max-w-3xl mx-auto">
                <div className="bg-card rounded-2xl p-8 border-2 border-accent text-center shadow-card">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                    Para Agências de Home Care
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Plano Empresarial</h3>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    Solução completa para gestão de agências de home care. Preços personalizados de acordo com o número de pacientes e funcionalidades necessárias.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Gestão de Escalas", "Auditoria Jurídica", "Dashboard BI"].map((i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" />{i}</li>
                      ))}
                    </ul>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      {["Capacitação Automática", "Suporte Dedicado", "Implementação Assistida"].map((i) => (
                        <li key={i} className="flex items-center gap-2"><Check className="w-4 h-4 text-accent" />{i}</li>
                      ))}
                    </ul>
                  </div>
                  <Button className="bg-accent text-accent-foreground hover:bg-accent/90 rounded-full px-8" asChild>
                    <a href="/empresas">Solicitar Proposta →</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-16 bg-background">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">Ainda tem dúvidas?</h2>
          <p className="text-muted-foreground mb-6">
            Confira nossa página de ajuda ou entre em contato conosco.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button variant="outline" className="rounded-full" asChild>
              <a href="/ajuda">Ver Perguntas Frequentes</a>
            </Button>
            <Button className="bg-primary text-primary-foreground rounded-full">
              Falar com Suporte
            </Button>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-gradient-primary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Aproveite o lançamento!
          </h2>
          <p className="text-white/90 mb-8 max-w-lg mx-auto">
            Comece grátis por 3 meses no Plano Básico ou aproveite o desconto de lançamento no Premium.
          </p>
          <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
            Começar Grátis →
          </Button>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Precos;
