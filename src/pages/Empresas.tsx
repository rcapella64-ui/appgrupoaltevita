import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, MessageSquare, GraduationCap, BarChart3, Check } from "lucide-react";
import cuidameLogo from "@/assets/cuidame-logo.png";
import empresasHeroMockup from "@/assets/empresas-hero-mockup.png";
import { motion } from "framer-motion";

const Empresas = () => {
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
                Para Empresas
              </span>
              
              <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 text-foreground">
                O Sistema<br />
                Operacional da<br />
                sua <span className="text-accent">Agência de<br />Home Care.</span>
              </h1>

              <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md">
                Escale sua operação, reduza riscos jurídicos e entregue relatórios de alta fidelidade para as famílias.
              </p>

              <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-full px-6">
                Agendar Demonstração →
              </Button>
            </div>

            {/* Desktop & Phone Mockup Image */}
            <motion.div 
              className="relative flex justify-center lg:justify-end cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.03, y: -5 }}
              transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
            >
              <img 
                src={empresasHeroMockup} 
                alt="App Cuidame mostrando painel de gerenciamento e app mobile" 
                className="w-full max-w-[550px] lg:max-w-[650px] h-auto drop-shadow-2xl transition-shadow duration-300 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Diferenciais Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-3">
              Diferenciais para sua operação
            </h2>
            <p className="text-muted-foreground">
              Ferramentas profissionais para gestão completa de home care
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: MapPin,
                title: "Gestão de Escalas",
                description: "Elimine furos e saiba quem está no plantão via geolocalização."
              },
              {
                icon: MessageSquare,
                title: "Auditoria Jurídica",
                description: "Todo registro é imutável. Proteja seu CNPJ contra processos."
              },
              {
                icon: GraduationCap,
                title: "Capacitação Automática",
                description: "Vídeos educativos obrigatórios para cuidadores."
              },
              {
                icon: BarChart3,
                title: "Dashboard BI",
                description: "Indicadores de satisfação e adesão em tempo real."
              }
            ].map((item, index) => (
              <div key={index} className="bg-background border border-border rounded-xl p-6 text-center hover:shadow-lg transition-shadow">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Solicite uma proposta Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Solicite uma proposta
              </h2>
              <p className="text-muted-foreground mb-8">
                Preencha o formulário e nossa equipe entrará em contato para entender suas necessidades e apresentar a melhor solução para sua agência.
              </p>

              <ul className="space-y-4">
                {[
                  "Demonstração personalizada",
                  "Proposta sob medida",
                  "Suporte dedicado",
                  "Implementação assistida"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="w-5 h-5 bg-accent rounded-full flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                    <span className="text-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Form */}
            <div className="bg-white rounded-2xl p-6 md:p-8 shadow-lg border border-border">
              <form className="space-y-4">
                <div>
                  <Label htmlFor="nome" className="text-foreground">Nome</Label>
                  <Input 
                    id="nome" 
                    placeholder="Seu nome completo" 
                    className="mt-1"
                  />
                </div>

                <div>
                  <Label htmlFor="empresa" className="text-foreground">Empresa</Label>
                  <Input 
                    id="empresa" 
                    placeholder="Nome da sua empresa" 
                    className="mt-1"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="pacientes" className="text-foreground">Nº Pacientes</Label>
                    <Input 
                      id="pacientes" 
                      placeholder="Ex: 50" 
                      className="mt-1"
                    />
                  </div>
                  <div>
                    <Label htmlFor="telefone" className="text-foreground">Telefone</Label>
                    <Input 
                      id="telefone" 
                      placeholder="(00) 00000-0000" 
                      className="mt-1"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email" className="text-foreground">E-mail Corporativo</Label>
                  <Input 
                    id="email" 
                    type="email" 
                    placeholder="seu@empresa.com" 
                    className="mt-1"
                  />
                </div>

                <Button className="w-full bg-accent text-white hover:bg-accent/90 rounded-full mt-4">
                  Solicitar Proposta →
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Empresas;
