import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { FileText, Users, AlertTriangle, Scale, Ban, RefreshCw } from "lucide-react";

const sections = [
  {
    icon: FileText,
    title: "Aceitação dos Termos",
    content: `Ao acessar e utilizar o aplicativo Cuidame, você concorda com estes Termos de Uso:

• Estes termos constituem um acordo legal entre você e o Grupo Altevita
• Ao criar uma conta, você confirma ter lido e aceito integralmente estes termos
• Se você não concordar com algum termo, não utilize nossos serviços
• Reservamo-nos o direito de atualizar estes termos a qualquer momento

Recomendamos a leitura periódica para estar ciente de eventuais alterações.`
  },
  {
    icon: Users,
    title: "Uso do Serviço",
    content: `O Cuidame é uma plataforma de gestão de cuidados de saúde. Ao utilizá-la, você se compromete a:

• Fornecer informações verdadeiras e atualizadas no cadastro
• Manter a confidencialidade de sua senha e credenciais de acesso
• Utilizar o aplicativo apenas para fins legítimos de gestão de saúde
• Não compartilhar sua conta com terceiros não autorizados
• Notificar imediatamente sobre qualquer uso não autorizado da sua conta`
  },
  {
    icon: AlertTriangle,
    title: "Responsabilidades do Usuário",
    content: `Como usuário do Cuidame, você é responsável por:

• A precisão das informações de saúde inseridas no aplicativo
• A gestão adequada dos acessos concedidos a familiares e cuidadores
• O uso apropriado das funcionalidades de comunicação do app
• Manter backup de informações críticas de saúde
• Consultar sempre profissionais de saúde qualificados para decisões médicas

O Cuidame é uma ferramenta de apoio e não substitui orientação médica profissional.`
  },
  {
    icon: Scale,
    title: "Limitação de Responsabilidade",
    content: `O Grupo Altevita não se responsabiliza por:

• Decisões médicas tomadas com base nas informações do aplicativo
• Falhas de terceiros (provedores de internet, dispositivos, etc.)
• Danos indiretos resultantes do uso ou impossibilidade de uso do serviço
• Perda de dados devido a fatores fora de nosso controle
• Ações de outros usuários com quem você compartilhou acesso

Nosso compromisso é fornecer uma plataforma segura e funcional dentro das melhores práticas do mercado.`
  },
  {
    icon: Ban,
    title: "Condutas Proibidas",
    content: `É expressamente proibido utilizar o Cuidame para:

• Inserir informações falsas ou enganosas
• Violar a privacidade de outros usuários
• Transmitir vírus, malware ou códigos maliciosos
• Tentar acessar áreas restritas do sistema
• Utilizar o app para fins comerciais não autorizados
• Praticar qualquer atividade ilegal ou antiética

O descumprimento pode resultar em suspensão ou cancelamento da conta.`
  },
  {
    icon: RefreshCw,
    title: "Cancelamento e Rescisão",
    content: `Sobre o encerramento do uso do serviço:

• Você pode cancelar sua conta a qualquer momento pelo aplicativo
• O Grupo Altevita pode suspender contas que violem estes termos
• Após o cancelamento, seus dados serão tratados conforme nossa Política de Privacidade
• Assinaturas pagas não são reembolsáveis após o período de uso
• Dados de saúde podem ser retidos conforme exigências regulatórias

Recomendamos exportar seus dados antes de solicitar o cancelamento.`
  }
];

const Termos = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Legal
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Termos de <span className="text-primary">Uso</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-4">
            Leia atentamente os termos que regem o uso do aplicativo Cuidame.
          </p>
          <p className="text-sm text-muted-foreground">
            Última atualização: {new Date().toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
          </p>
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
                  <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-6 h-6 text-primary" />
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
            Dúvidas sobre os Termos?
          </h2>
          <p className="text-muted-foreground mb-6">
            Entre em contato com nossa equipe jurídica para esclarecimentos.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a 
              href="mailto:juridico@cuidame.app"
              className="inline-flex items-center justify-center gap-2 bg-primary text-white px-6 py-3 rounded-full hover:bg-primary/90 transition-colors"
            >
              <FileText className="w-5 h-5" />
              juridico@cuidame.app
            </a>
            <a 
              href="/privacidade"
              className="inline-flex items-center justify-center gap-2 bg-foreground/10 text-foreground px-6 py-3 rounded-full hover:bg-foreground/20 transition-colors"
            >
              Política de Privacidade
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Termos;
