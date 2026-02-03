import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import cuidameLogo from "@/assets/cuidame-logo.png";

const Familias = () => {
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
                  href="#"
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

      {/* Plans Link */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <a 
            href="#precos" 
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 transition-colors font-medium"
          >
            Ver todos os detalhes dos planos
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </a>
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
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full px-6"
            >
              Começar Grátis →
            </Button>
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-6">
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
