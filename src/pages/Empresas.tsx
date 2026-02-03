import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { MapPin, MessageSquare, GraduationCap, BarChart3, Check } from "lucide-react";
import cuidameLogo from "@/assets/cuidame-logo.png";

const Empresas = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center pt-20 overflow-hidden">
        {/* Background curve */}
        <div className="absolute top-0 right-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-0 right-0 w-[70%] h-[120%] bg-gradient-to-br from-accent/30 via-accent/20 to-cuidame-teal/10 rounded-bl-[100%] -translate-y-[10%]" />
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

            {/* Desktop Mockup */}
            <div className="relative flex justify-center lg:justify-end">
              <div className="relative">
                {/* Laptop Frame */}
                <div className="relative w-[400px] md:w-[500px] h-[280px] md:h-[320px] bg-foreground/10 rounded-t-lg overflow-hidden shadow-2xl">
                  {/* Screen */}
                  <div className="absolute inset-2 bg-white rounded overflow-hidden">
                    <div className="bg-primary p-2 flex items-center gap-2">
                      <img src={cuidameLogo} alt="Cuidame" className="h-4 brightness-0 invert" />
                      <span className="text-white text-xs">Gerenciamento de Pré-registros</span>
                    </div>
                    <div className="p-3 text-xs">
                      <div className="flex gap-4">
                        <div className="flex-1">
                          <div className="bg-gray-100 rounded p-2 mb-2">
                            <p className="text-[10px] font-medium">Escalas</p>
                          </div>
                          <div className="space-y-1">
                            <div className="bg-gray-50 p-1 rounded text-[8px]">Maria Silva - Cuidador</div>
                            <div className="bg-gray-50 p-1 rounded text-[8px]">João Santos - Enfermeiro</div>
                            <div className="bg-gray-50 p-1 rounded text-[8px]">Ana Costa - Cuidador</div>
                          </div>
                        </div>
                        <div className="flex-1">
                          <div className="bg-accent/20 rounded p-2 mb-2">
                            <p className="text-[10px] font-medium text-accent">Usuários Ativos</p>
                          </div>
                          <div className="space-y-1">
                            <div className="flex items-center gap-1 text-[8px]">
                              <div className="w-4 h-4 bg-accent/30 rounded-full"></div>
                              <span>Benedita Cruz</span>
                              <span className="ml-auto bg-accent text-white px-1 rounded text-[6px]">Ativo</span>
                            </div>
                            <div className="flex items-center gap-1 text-[8px]">
                              <div className="w-4 h-4 bg-accent/30 rounded-full"></div>
                              <span>Roberto Lima</span>
                              <span className="ml-auto bg-accent text-white px-1 rounded text-[6px]">Ativo</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* Laptop Base */}
                <div className="w-[420px] md:w-[540px] h-4 bg-foreground/20 rounded-b-lg mx-auto"></div>
                <div className="w-[180px] md:w-[200px] h-2 bg-foreground/15 rounded-b mx-auto"></div>

                {/* Phone overlay */}
                <div className="absolute -right-4 md:right-0 bottom-0 w-[140px] md:w-[160px] h-[280px] md:h-[320px] bg-white rounded-[2rem] shadow-xl border-4 border-foreground/10 overflow-hidden">
                  <div className="absolute inset-0 bg-white">
                    <div className="bg-primary p-2">
                      <img src={cuidameLogo} alt="Cuidame" className="h-4 brightness-0 invert mx-auto" />
                    </div>
                    <div className="p-2">
                      <p className="text-[8px] font-semibold text-foreground mb-2">Escalas de Hoje</p>
                      <div className="space-y-1">
                        <div className="bg-accent/10 p-1.5 rounded text-[7px]">
                          <p className="font-medium">08:00 - 14:00</p>
                          <p className="text-muted-foreground">Maria - Paciente João</p>
                        </div>
                        <div className="bg-accent/10 p-1.5 rounded text-[7px]">
                          <p className="font-medium">14:00 - 20:00</p>
                          <p className="text-muted-foreground">Ana - Paciente Maria</p>
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
