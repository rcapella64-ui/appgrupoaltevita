import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const Precos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Preços transparentes
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Escolha o plano ideal para <span className="text-accent">você</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comece gratuitamente e faça upgrade quando precisar de mais recursos. Sem surpresas, sem taxas escondidas.
          </p>
        </div>
      </section>

      {/* Pricing Tabs */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs defaultValue="familias" className="w-full">
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2 mb-12">
              <TabsTrigger value="familias" className="rounded-full">Para Famílias</TabsTrigger>
              <TabsTrigger value="empresas" className="rounded-full">Para Empresas</TabsTrigger>
            </TabsList>

            {/* Famílias Pricing */}
            <TabsContent value="familias">
              <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
                {/* Plano Gratuito */}
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Para começar</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">Plano Gratuito</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-foreground">Grátis</span>
                    <span className="text-muted-foreground text-sm ml-1">para sempre</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Ideal para famílias iniciando o cuidado
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Contas:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        1 Paciente
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        1 Familiar (Gestor de Cuidado)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        2 Cuidadores
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">Funcionalidades:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Prescrições Médicas
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Prescrição de Cuidados
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Escala de cuidadores
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Rotinas de saúde
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Registro de gastos
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Conteúdos Básicos
                      </li>
                    </ul>
                  </div>

                  <Button variant="outline" className="w-full rounded-full">
                    Criar Conta Grátis
                  </Button>
                </div>

                {/* Plano Premium */}
                <div className="bg-background rounded-2xl p-6 border-2 border-accent relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                    <span className="bg-accent text-white text-xs font-medium px-3 py-1 rounded-full">
                      Recomendado
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">Mais recursos</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">Plano Premium</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-accent">R$ 9,90</span>
                    <span className="text-muted-foreground text-sm ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    Para famílias que querem mais controle
                  </p>
                  
                  <div className="mb-4">
                    <p className="text-xs font-semibold text-foreground mb-2">Contas:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        2 Pacientes
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        2 Familiares (Gestores)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        2 Cuidadores
                      </li>
                    </ul>
                  </div>

                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">Funcionalidades:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Tudo do plano gratuito
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Registro de consultas
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Registro de exames
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Agenda personalizada
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Avaliação de Enfermagem
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        Conteúdos exclusivos
                      </li>
                    </ul>
                  </div>

                  <div className="bg-accent/10 rounded-lg p-3 mb-4 text-center">
                    <p className="text-[10px] text-accent">
                      🎉 Grátis durante o lançamento (até 01/03/2026)
                    </p>
                  </div>

                  <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-full">
                    Assinar Premium →
                  </Button>
                </div>

                {/* Usuário Adicional */}
                <div className="bg-background rounded-2xl p-6 border border-border">
                  <p className="text-sm text-muted-foreground mb-1">Expanda seu plano</p>
                  <h3 className="text-xl font-bold text-foreground mb-2">Usuário Adicional</h3>
                  <div className="mb-4">
                    <span className="text-3xl font-bold text-accent">+ R$ 2,90</span>
                    <span className="text-muted-foreground text-sm ml-1">/mês</span>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">
                    por usuário adicional
                  </p>
                  
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-foreground mb-2">Você pode adicionar:</p>
                    <ul className="space-y-2 text-sm text-muted-foreground">
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        +1 Paciente
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        +1 Familiar (Gestor)
                      </li>
                      <li className="flex items-center gap-2">
                        <Check className="w-4 h-4 text-accent" />
                        +1 Cuidador
                      </li>
                    </ul>
                  </div>

                  <p className="text-xs text-muted-foreground mb-6">
                    Ideal para famílias maiores que precisam de mais pessoas acompanhando o cuidado.
                  </p>

                  <Button variant="outline" className="w-full rounded-full">
                    Adicionar Usuário
                  </Button>
                </div>
              </div>
            </TabsContent>

            {/* Empresas Pricing */}
            <TabsContent value="empresas">
              <div className="max-w-3xl mx-auto">
                <div className="bg-background rounded-2xl p-8 border-2 border-accent text-center">
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
                    Para Agências de Home Care
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-4">Plano Empresarial</h3>
                  <p className="text-muted-foreground mb-8 max-w-lg mx-auto">
                    Solução completa para gestão de agências de home care. Preços personalizados de acordo com o número de pacientes e funcionalidades necessárias.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4 mb-8 text-left max-w-md mx-auto">
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">Inclui:</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          Gestão de Escalas
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          Auditoria Jurídica
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          Dashboard BI
                        </li>
                      </ul>
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2">&nbsp;</p>
                      <ul className="space-y-2 text-sm text-muted-foreground">
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          Capacitação Automática
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          Suporte Dedicado
                        </li>
                        <li className="flex items-center gap-2">
                          <Check className="w-4 h-4 text-accent" />
                          Implementação Assistida
                        </li>
                      </ul>
                    </div>
                  </div>

                  <Button className="bg-accent text-white hover:bg-accent/90 rounded-full px-8" asChild>
                    <a href="/empresas">Solicitar Proposta →</a>
                  </Button>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* FAQ Preview */}
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

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Aproveite o lançamento!
          </h2>
          <p className="text-white/90 mb-8 max-w-lg mx-auto">
            Aproveite todos os recursos do Plano Premium durante o mês de lançamento do aplicativo Cuidame (até 01/03/2026)
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
