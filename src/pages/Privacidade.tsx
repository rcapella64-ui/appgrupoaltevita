import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { ShieldCheck, Lock, Eye, FileText, Users, Bell } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Coleta de Dados",
    content: `Coletamos apenas os dados necessários para fornecer nossos serviços de gestão de saúde:
    
• Dados de identificação (nome, e-mail, telefone)
• Dados de saúde do paciente (medicações, prescrições, evolução clínica)
• Dados de uso do aplicativo
• Informações do dispositivo para otimização da experiência

Todos os dados são coletados com seu consentimento explícito e podem ser atualizados ou excluídos a qualquer momento.`
  },
  {
    icon: Lock,
    title: "Segurança dos Dados",
    content: `A segurança dos seus dados é nossa prioridade máxima:

• Criptografia de ponta a ponta (AES-256)
• Servidores seguros com certificação ISO 27001
• Backups automáticos e redundantes
• Monitoramento 24/7 contra ameaças
• Autenticação de dois fatores disponível`
  },
  {
    icon: Users,
    title: "Compartilhamento de Dados",
    content: `Seus dados nunca são vendidos. O compartilhamento ocorre apenas:

• Com familiares e cuidadores autorizados por você
• Com profissionais de saúde mediante sua autorização
• Quando exigido por lei ou ordem judicial
• Com prestadores de serviço essenciais (sempre com contratos de confidencialidade)`
  },
  {
    icon: Eye,
    title: "Seus Direitos (LGPD)",
    content: `Conforme a Lei Geral de Proteção de Dados, você tem direito a:

• Acessar todos os seus dados pessoais
• Corrigir dados incompletos ou desatualizados
• Solicitar a exclusão dos seus dados
• Revogar consentimentos a qualquer momento
• Solicitar portabilidade dos dados
• Obter informações sobre compartilhamentos`
  },
  {
    icon: Bell,
    title: "Cookies e Rastreamento",
    content: `Utilizamos cookies para melhorar sua experiência:

• Cookies essenciais para funcionamento do app
• Cookies de preferências (idioma, tema)
• Cookies analíticos para melhorias (anonimizados)

Você pode gerenciar suas preferências de cookies nas configurações do aplicativo.`
  },
  {
    icon: ShieldCheck,
    title: "Retenção de Dados",
    content: `Mantemos seus dados apenas pelo tempo necessário:

• Dados de conta: enquanto você mantiver a conta ativa
• Dados de saúde: conforme regulamentação (mínimo 20 anos)
• Logs de acesso: 6 meses para segurança
• Após exclusão da conta: dados anonimizados para estatísticas

Você pode solicitar a exclusão completa a qualquer momento.`
  }
];

const Privacidade = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Transparência
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Política de <span className="text-accent">Privacidade</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-4">
            Sua privacidade é fundamental. Saiba como coletamos, usamos e protegemos seus dados.
          </p>
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
        </div>
      </section>

      {/* LGPD Badge */}
      <section className="py-8 bg-accent/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-border">
              <ShieldCheck className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">LGPD Compliant</span>
            </div>
            <div className="flex items-center gap-3 bg-white px-6 py-3 rounded-full border border-border">
              <Lock className="w-5 h-5 text-accent" />
              <span className="font-medium text-foreground">Dados Criptografados</span>
            </div>
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {sections.map((section, index) => (
              <div 
                key={index} 
                className="bg-white rounded-xl border border-border p-6 md:p-8"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-accent/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h2 className="text-xl font-semibold text-foreground mb-3">
                      {section.title}
                    </h2>
                    <div className="text-muted-foreground whitespace-pre-line leading-relaxed">
                      {section.content}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Dúvidas sobre Privacidade?
          </h2>
          <p className="text-muted-foreground mb-6">
            Nossa equipe de Proteção de Dados está disponível para esclarecer qualquer dúvida.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:privacidade@cuidame.app"
              className="inline-flex items-center justify-center gap-2 bg-accent text-white px-6 py-3 rounded-full hover:bg-accent/90 transition-colors"
            >
              <FileText className="w-5 h-5" />
              privacidade@cuidame.app
            </a>
            <a 
              href="/ajuda"
              className="inline-flex items-center justify-center gap-2 bg-foreground/10 text-foreground px-6 py-3 rounded-full hover:bg-foreground/20 transition-colors"
            >
              Central de Ajuda
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Privacidade;
