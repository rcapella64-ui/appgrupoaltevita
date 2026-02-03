import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Clock, Check } from "lucide-react";
import cuidameLogo from "@/assets/cuidame-logo.png";
import { motion } from "framer-motion";

const Familias = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden bg-gradient-to-br from-slate-50 via-white to-accent/5">
        {/* Futuristic Glassmorphism Background */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-cuidame-teal/10" />
          
          <motion.div 
            className="absolute top-20 right-[10%] w-32 h-32 rounded-3xl bg-white/40 backdrop-blur-xl border border-white/50 shadow-xl"
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div 
            className="absolute top-40 right-[25%] w-20 h-20 rounded-2xl bg-accent/20 backdrop-blur-lg border border-accent/30 shadow-lg"
            animate={{ y: [0, 15, 0], rotate: [0, -8, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
          />
          <motion.div 
            className="absolute bottom-32 left-[5%] w-40 h-40 rounded-[2rem] bg-cuidame-teal/15 backdrop-blur-xl border border-cuidame-teal/25 shadow-xl"
            animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          />
          <motion.div 
            className="absolute top-1/3 left-[15%] w-16 h-16 rounded-xl bg-white/50 backdrop-blur-md border border-white/60 shadow-md"
            animate={{ y: [0, 20, 0], x: [0, 10, 0], rotate: [0, 10, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
          />
          <motion.div 
            className="absolute -top-20 -left-20 w-80 h-80 rounded-full bg-gradient-to-br from-accent/20 to-cuidame-teal/10 backdrop-blur-3xl"
            animate={{ scale: [1, 1.1, 1], opacity: [0.5, 0.7, 0.5] }}
            transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          />
          
          <div className="absolute inset-0 bg-[radial-gradient(circle,rgba(27,67,50,0.08)_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Content */}
            <div>
              <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-6">
                Para Famílias
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 text-foreground">
                Sua paz de<br />
                espírito <span className="text-accent">cabe no<br />bolso.</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md">
                Saiba exatamente o que acontece na casa dos seus pais, mesmo estando longe.
              </p>

              {/* App Store Buttons */}
              <div className="flex flex-wrap gap-3">
                <a
                  href="https://apps.apple.com/us/app/cuidame-gestor-de-sa%C3%BAde/id6744027992"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none">Baixar na</div>
                    <div className="text-sm font-semibold leading-tight">App Store</div>
                  </div>
                </a>
                <a
                  href="#"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-4 py-2.5 rounded-lg hover:bg-foreground/90 transition-colors"
                >
                  <svg className="w-6 h-6" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"/>
                  </svg>
                  <div className="text-left">
                    <div className="text-[10px] leading-none">Disponível no</div>
                    <div className="text-sm font-semibold leading-tight">Google Play</div>
                  </div>
                </a>
              </div>
            </div>

            {/* Phone Mockups */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Main Phone */}
                <div className="relative w-[260px] md:w-[300px] h-[520px] md:h-[600px] bg-white rounded-[3rem] shadow-2xl border-8 border-foreground/10 overflow-hidden z-10">
                  <div className="absolute inset-0 bg-gradient-to-b from-primary to-primary/90">
                    <div className="flex justify-between items-center px-6 pt-3 text-white text-xs">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-white/80 rounded-sm"></div>
                      </div>
                    </div>
                    
                    <div className="p-4 mt-2">
                      <div className="flex items-center justify-center mb-6">
                        <img src={cuidameLogo} alt="Cuidame" className="h-8 brightness-0 invert" />
                      </div>
                      
                      <div className="bg-white rounded-2xl p-4 mb-3 shadow-lg">
                        <p className="text-primary font-semibold text-sm mb-1">Olá!</p>
                        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-3 mb-2">
                          <p className="text-xs text-foreground font-medium">Sou Cliente ou Colaborador do Grupo Altevita</p>
                          <p className="text-[10px] text-muted-foreground mt-1">Tenho um familiar ou paciente em uma unidade do Grupo Altevita</p>
                        </div>
                        <div className="bg-cyan-50 border border-cyan-200 rounded-xl p-3">
                          <p className="text-xs text-foreground font-medium">Não sou Cliente. Quero usar o app para cuidar da saúde de alguém</p>
                          <p className="text-[10px] text-muted-foreground mt-1">Versão para famílias, cuidadores e pacientes</p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-foreground/10 rounded-b-2xl"></div>
                </div>

                {/* Second Phone */}
                <div className="absolute -right-10 md:-right-16 top-8 w-[200px] md:w-[240px] h-[400px] md:h-[480px] bg-white rounded-[2.5rem] shadow-xl border-6 border-foreground/10 overflow-hidden">
                  <div className="absolute inset-0 bg-white">
                    <div className="bg-primary p-3">
                      <div className="flex items-center justify-center">
                        <img src={cuidameLogo} alt="Cuidame" className="h-6 brightness-0 invert" />
                      </div>
                    </div>
                    <div className="p-3">
                      <p className="text-xs font-semibold text-foreground mb-2">Deixe-me lhe apresentar o CUIDAME</p>
                      <div className="flex justify-center mb-2">
                        <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center">
                          <span className="text-2xl">💚</span>
                        </div>
                      </div>
                      <p className="text-[9px] text-muted-foreground text-center leading-relaxed">
                        Organize a saúde das pessoas sob seus cuidados, sejam familiares ou pacientes.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Como o Cuidame ajuda você Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Como o Cuidame ajuda você
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Funcionalidades pensadas para dar tranquilidade à sua família
            </p>
          </div>

          {/* Feature 1 - Left aligned */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Não pergunte, saiba.
              </h3>
              <p className="text-muted-foreground">
                Monitore se a medicação foi dada e veja os sinais vitais em tempo real.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[220px] h-[440px] bg-white rounded-[2.5rem] shadow-xl border-6 border-foreground/10 overflow-hidden">
                <div className="absolute inset-0 bg-white">
                  <div className="bg-primary p-3">
                    <img src={cuidameLogo} alt="Cuidame" className="h-5 brightness-0 invert mx-auto" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-semibold text-foreground mb-2">Acompanhamento Diário</p>
                    <div className="space-y-2">
                      <div className="bg-accent/10 rounded-lg p-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-medium">Pressão Arterial</span>
                          <span className="text-[9px] text-accent font-bold">120/80</span>
                        </div>
                      </div>
                      <div className="bg-accent/10 rounded-lg p-2">
                        <div className="flex justify-between items-center">
                          <span className="text-[9px] font-medium">Glicemia</span>
                          <span className="text-[9px] text-accent font-bold">95 mg/dL</span>
                        </div>
                      </div>
                      <div className="bg-green-100 rounded-lg p-2">
                        <div className="flex items-center gap-2">
                          <Check className="w-3 h-3 text-green-600" />
                          <span className="text-[9px] font-medium text-green-700">Medicação administrada</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Feature 2 - Right aligned */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative w-[220px] h-[440px] bg-white rounded-[2.5rem] shadow-xl border-6 border-foreground/10 overflow-hidden">
                <div className="absolute inset-0 bg-white">
                  <div className="bg-primary p-3">
                    <img src={cuidameLogo} alt="Cuidame" className="h-5 brightness-0 invert mx-auto" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-semibold text-foreground mb-2">Chat da Família</p>
                    <div className="space-y-2">
                      <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                        <p className="text-[8px] font-medium text-accent">Enfermeira Ana</p>
                        <p className="text-[8px]">Medicação das 8h administrada ✓</p>
                      </div>
                      <div className="bg-accent/20 rounded-lg p-2 max-w-[80%] ml-auto">
                        <p className="text-[8px]">Obrigada pela atualização!</p>
                      </div>
                      <div className="bg-gray-100 rounded-lg p-2 max-w-[80%]">
                        <p className="text-[8px] font-medium text-accent">Cuidadora Maria</p>
                        <p className="text-[8px]">Paciente se alimentou bem hoje</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <MessageSquare className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Comunicação sem ruído.
              </h3>
              <p className="text-muted-foreground">
                Um chat exclusivo para saúde. Nada de mensagens perdidas no WhatsApp pessoal.
              </p>
            </div>
          </div>

          {/* Feature 3 - Left aligned */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center mb-4">
                <FileText className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-3">
                Histórico na mão.
              </h3>
              <p className="text-muted-foreground">
                Leve o histórico completo de pressão, glicemia e humor para a consulta médica.
              </p>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative w-[220px] h-[440px] bg-white rounded-[2.5rem] shadow-xl border-6 border-foreground/10 overflow-hidden">
                <div className="absolute inset-0 bg-white">
                  <div className="bg-primary p-3">
                    <img src={cuidameLogo} alt="Cuidame" className="h-5 brightness-0 invert mx-auto" />
                  </div>
                  <div className="p-3">
                    <p className="text-[10px] font-semibold text-foreground mb-2">Histórico de Saúde</p>
                    <div className="space-y-2">
                      <div className="border border-border rounded-lg p-2">
                        <p className="text-[8px] font-medium">Janeiro 2026</p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[7px] bg-accent/10 px-1 rounded">12 registros</span>
                          <span className="text-[7px] bg-green-100 px-1 rounded text-green-700">Estável</span>
                        </div>
                      </div>
                      <div className="border border-border rounded-lg p-2">
                        <p className="text-[8px] font-medium">Dezembro 2025</p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[7px] bg-accent/10 px-1 rounded">15 registros</span>
                          <span className="text-[7px] bg-green-100 px-1 rounded text-green-700">Estável</span>
                        </div>
                      </div>
                      <div className="border border-border rounded-lg p-2">
                        <p className="text-[8px] font-medium">Novembro 2025</p>
                        <div className="flex gap-2 mt-1">
                          <span className="text-[7px] bg-accent/10 px-1 rounded">10 registros</span>
                          <span className="text-[7px] bg-yellow-100 px-1 rounded text-yellow-700">Atenção</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="precos" className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Preços transparentes
            </span>
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Escolha o plano ideal para <span className="text-accent">você</span>
            </h2>
            <p className="text-muted-foreground max-w-md mx-auto">
              Comece gratuitamente e faça upgrade quando precisar de mais recursos.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {/* Plano Gratuito */}
            <div className="bg-white rounded-2xl p-6 border border-border">
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
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 1 Paciente</li>
                  <li>• 1 Familiar (Gestor de Cuidado)</li>
                  <li>• 2 Cuidadores (Familiares ou Profissionais)</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-foreground mb-2">Funcionalidades:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>+ Prescrição Médica</li>
                  <li>+ Prescrição de Cuidados</li>
                  <li>+ Escala de cuidadores</li>
                  <li>+ Rotina de saúde</li>
                  <li>+ Registro e divisão de gastos</li>
                  <li>+ Conteúdos Básicos</li>
                </ul>
              </div>

              <Button variant="outline" className="w-full rounded-full">
                Criar Conta Grátis
              </Button>
            </div>

            {/* Plano Premium */}
            <div className="bg-white rounded-2xl p-6 border-2 border-accent relative">
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
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• 2 Pacientes</li>
                  <li>• 2 Familiares (Gestores de Cuidado)</li>
                  <li>• 2 Cuidadores (Familiares ou Profissionais)</li>
                </ul>
              </div>

              <div className="mb-6">
                <p className="text-xs font-semibold text-foreground mb-2">Funcionalidades:</p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>+ Todas do plano gratuito</li>
                  <li>+ Registros de consultas de saúde</li>
                  <li>+ Registros de exames</li>
                  <li>+ Agenda personalizada por paciente</li>
                  <li>+ Avaliações de Enfermagem</li>
                  <li>+ Conteúdos exclusivos</li>
                </ul>
              </div>

              <div className="bg-accent/10 rounded-lg p-3 mb-4 text-center">
                <p className="text-[10px] text-accent">
                  Aproveite todos os recursos do Plano Premium durante o mês de lançamento do aplicativo Cuidame (até 01/03/2026)
                </p>
              </div>

              <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-full">
                Assinar Premium →
              </Button>
            </div>

            {/* Usuário Adicional */}
            <div className="bg-white rounded-2xl p-6 border border-border">
              <p className="text-sm text-muted-foreground mb-1">Expanda seu plano</p>
              <h3 className="text-xl font-bold text-foreground mb-2">Inclua mais pessoas na sua conta</h3>
              <div className="mb-4">
                <span className="text-3xl font-bold text-accent">+ R$ 2,90</span>
                <span className="text-muted-foreground text-sm ml-1">/mês</span>
              </div>
              <p className="text-sm text-muted-foreground mb-6">
                por usuário adicional
              </p>
              
              <div className="mb-6">
                <p className="text-xs text-muted-foreground mb-3">
                  Você poderá cadastrar mais um usuário:
                </p>
                <ul className="space-y-1 text-xs text-muted-foreground">
                  <li>• +1 Paciente ou</li>
                  <li>• +1 Familiar (Gestores de Cuidado) ou</li>
                  <li>• +1 Cuidadores (Familiares ou Profissionais)</li>
                </ul>
              </div>

              <Button variant="outline" className="w-full rounded-full">
                Adicionar Usuário
              </Button>
            </div>
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
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6">
              Começar Grátis →
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full px-6"
            >
              Ver Preços
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Familias;
