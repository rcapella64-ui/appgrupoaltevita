import { motion } from "framer-motion";
import { ArrowRight, Heart, Shield, Users } from "lucide-react";
import { Button } from "./ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero overflow-hidden pt-20">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-10 w-72 h-72 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-cuidame-teal/20 rounded-full blur-3xl" />
      </div>

      <div className="container-wide relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.1 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary text-sm font-medium text-accent mb-6"
            >
              <Heart className="w-4 h-4" />
              Gestão Integrada de Cuidados
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
              Cuidar de quem você{" "}
              <span className="text-gradient">ama</span> ficou mais{" "}
              <span className="text-gradient-accent">simples</span>
            </h1>

            <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0">
              O Cuidame centraliza o planejamento, execução e comunicação do
              cuidado de saúde pessoal e familiar, com segurança e rastreabilidade.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button
                size="lg"
                className="bg-gradient-primary text-primary-foreground hover:opacity-90 transition-opacity text-base px-8"
              >
                Começar Gratuitamente
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="text-base px-8 border-2"
              >
                Conhecer Funcionalidades
              </Button>
            </div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center lg:justify-start gap-8 mt-12 pt-8 border-t border-border"
            >
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-primary">10k+</p>
                <p className="text-sm text-muted-foreground">Famílias atendidas</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-accent">98%</p>
                <p className="text-sm text-muted-foreground">Satisfação</p>
              </div>
              <div className="text-center lg:text-left">
                <p className="text-3xl font-bold text-cuidame-teal">24/7</p>
                <p className="text-sm text-muted-foreground">Suporte disponível</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="relative">
              {/* Main Card */}
              <div className="relative bg-card rounded-3xl shadow-card p-8 border border-border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Acompanhamento Diário</h3>
                    <p className="text-sm text-muted-foreground">Sinais vitais registrados</p>
                  </div>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-status-success/20 flex items-center justify-center">
                        <span className="text-status-success text-lg">✓</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Medicação 8h</p>
                        <p className="text-xs text-muted-foreground">Realizado por Maria</p>
                      </div>
                    </div>
                    <span className="text-xs text-status-success font-medium">Concluído</span>
                  </div>
                  
                  <div className="flex items-center justify-between p-4 rounded-xl bg-secondary">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-status-warning/20 flex items-center justify-center">
                        <span className="text-status-warning text-lg">⏱</span>
                      </div>
                      <div>
                        <p className="font-medium text-sm">Verificar sinais vitais</p>
                        <p className="text-xs text-muted-foreground">Agendado para 14h</p>
                      </div>
                    </div>
                    <span className="text-xs text-status-warning font-medium">Pendente</span>
                  </div>
                </div>
              </div>

              {/* Floating Cards */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-6 -right-6 bg-card rounded-2xl shadow-card p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <Shield className="w-8 h-8 text-accent" />
                  <div>
                    <p className="font-semibold text-sm">Dados Seguros</p>
                    <p className="text-xs text-muted-foreground">Criptografia end-to-end</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-6 -left-6 bg-card rounded-2xl shadow-card p-4 border border-border"
              >
                <div className="flex items-center gap-3">
                  <Users className="w-8 h-8 text-cuidame-teal" />
                  <div>
                    <p className="font-semibold text-sm">Equipe Conectada</p>
                    <p className="text-xs text-muted-foreground">Chat em tempo real</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
