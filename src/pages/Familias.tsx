import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { MessageSquare, FileText, Clock, Check } from "lucide-react";
import cuidameLogo from "@/assets/cuidame-logo.png";
import familiasHeroMockup from "@/assets/familias-hero-mockup.png";
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
                  href="https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt"
                  target="_blank"
                  rel="noopener noreferrer"
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

            {/* Phone Mockup Image */}
            <motion.div 
              className="relative flex justify-center lg:justify-end cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <img 
                src={familiasHeroMockup} 
                alt="App Cuidame em dois smartphones mostrando tela de seleção de perfil e apresentação do app" 
                className="w-full max-w-[500px] lg:max-w-[600px] h-auto drop-shadow-2xl transition-shadow duration-300 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Como o Cuidame ajuda você Section */}
      <section className="py-24 bg-gradient-to-b from-white via-accent/5 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
              Funcionalidades
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Como o Cuidame <span className="text-accent">ajuda você</span>
            </h2>
            <p className="text-muted-foreground max-w-lg mx-auto text-lg">
              Funcionalidades pensadas para dar tranquilidade à sua família
            </p>
          </motion.div>

          {/* Features Grid */}
          <div className="grid md:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <motion.div
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-cuidame-teal rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <Clock className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Não pergunte, saiba.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Monitore se a medicação foi dada e veja os sinais vitais em tempo real.
                </p>
                
                {/* Mini Preview */}
                <div className="bg-accent/5 rounded-xl p-4 space-y-2">
                  <div className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
                    <span className="text-xs font-medium text-foreground">Pressão Arterial</span>
                    <span className="text-xs text-accent font-bold">120/80</span>
                  </div>
                  <div className="flex justify-between items-center bg-white rounded-lg p-2 shadow-sm">
                    <span className="text-xs font-medium text-foreground">Glicemia</span>
                    <span className="text-xs text-accent font-bold">95 mg/dL</span>
                  </div>
                  <div className="flex items-center gap-2 bg-green-50 rounded-lg p-2">
                    <Check className="w-4 h-4 text-green-600" />
                    <span className="text-xs font-medium text-green-700">Medicação administrada</span>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-cuidame-teal rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <MessageSquare className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Comunicação sem ruído.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Um chat exclusivo para saúde. Nada de mensagens perdidas no WhatsApp.
                </p>
                
                {/* Chat Preview */}
                <div className="bg-accent/5 rounded-xl p-4 space-y-2">
                  <div className="bg-white rounded-lg p-2 shadow-sm max-w-[85%]">
                    <p className="text-[10px] font-semibold text-accent">Enfermeira Ana</p>
                    <p className="text-xs text-foreground">Medicação das 8h administrada ✓</p>
                  </div>
                  <div className="bg-accent/20 rounded-lg p-2 shadow-sm max-w-[75%] ml-auto">
                    <p className="text-xs text-foreground">Obrigada pela atualização!</p>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm max-w-[85%]">
                    <p className="text-[10px] font-semibold text-accent">Cuidadora Maria</p>
                    <p className="text-xs text-foreground">Paciente almoçou bem hoje 🍽️</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              className="group relative bg-white rounded-3xl p-8 shadow-lg border border-border/50 hover:shadow-xl hover:border-accent/30 transition-all duration-300"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ y: -5 }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent/5 to-transparent rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="w-14 h-14 bg-gradient-to-br from-accent to-cuidame-teal rounded-2xl flex items-center justify-center mb-6 shadow-lg shadow-accent/20">
                  <FileText className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold text-foreground mb-3">
                  Histórico na mão.
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Leve o histórico completo para a consulta médica com um toque.
                </p>
                
                {/* History Preview */}
                <div className="bg-accent/5 rounded-xl p-4 space-y-2">
                  <div className="bg-white rounded-lg p-2 shadow-sm border-l-4 border-accent">
                    <p className="text-xs font-semibold text-foreground">Janeiro 2026</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-accent/10 px-2 py-0.5 rounded-full">12 registros</span>
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Estável</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm border-l-4 border-accent/60">
                    <p className="text-xs font-semibold text-foreground">Dezembro 2025</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-accent/10 px-2 py-0.5 rounded-full">15 registros</span>
                      <span className="text-[10px] bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Estável</span>
                    </div>
                  </div>
                  <div className="bg-white rounded-lg p-2 shadow-sm border-l-4 border-yellow-400">
                    <p className="text-xs font-semibold text-foreground">Novembro 2025</p>
                    <div className="flex gap-2 mt-1">
                      <span className="text-[10px] bg-accent/10 px-2 py-0.5 rounded-full">10 registros</span>
                      <span className="text-[10px] bg-yellow-100 text-yellow-700 px-2 py-0.5 rounded-full">Atenção</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
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
