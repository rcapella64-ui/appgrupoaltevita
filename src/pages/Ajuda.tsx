import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { Search, MessageCircle, Mail, Phone } from "lucide-react";

const faqCategories = [
  {
    title: "Sobre o App",
    questions: [
      {
        question: "O que é o Cuidame?",
        answer: "O Cuidame é um aplicativo de gestão integrada de cuidados de saúde pessoais e familiares. Ele permite que você gerencie medicações, escalas de cuidadores, evolução clínica e comunicação familiar em um único app seguro e intuitivo."
      },
      {
        question: "Para quem é o Cuidame?",
        answer: "O Cuidame é ideal para famílias que cuidam de idosos ou pessoas que precisam de acompanhamento de saúde em casa, assim como para agências de home care que desejam profissionalizar sua operação."
      },
      {
        question: "O app está disponível para iOS e Android?",
        answer: "Sim! O Cuidame está disponível gratuitamente na App Store (iOS) e no Google Play (Android). Basta baixar e criar sua conta para começar."
      },
      {
        question: "Meus dados estão seguros?",
        answer: "Absolutamente! O Cuidame utiliza criptografia de ponta a ponta e está em conformidade com a LGPD (Lei Geral de Proteção de Dados). Todos os dados de saúde são armazenados de forma segura e só podem ser acessados por pessoas autorizadas."
      }
    ]
  },
  {
    title: "Planos e Pagamentos",
    questions: [
      {
        question: "Qual a diferença entre o plano Gratuito e Premium?",
        answer: "O plano Gratuito permite 1 paciente, 1 familiar gestor e 2 cuidadores, com funcionalidades básicas como prescrições e escalas. O plano Premium (R$ 9,90/mês) oferece 2 pacientes, 2 familiares, além de recursos avançados como registro de consultas, exames e avaliação de enfermagem."
      },
      {
        question: "Como funciona o usuário adicional?",
        answer: "Por R$ 2,90/mês, você pode adicionar mais um usuário ao seu plano (paciente, familiar ou cuidador). Ideal para famílias maiores que precisam de mais pessoas acompanhando o cuidado."
      },
      {
        question: "Posso cancelar minha assinatura a qualquer momento?",
        answer: "Sim! Você pode cancelar sua assinatura a qualquer momento diretamente pelo app. Não há multas ou taxas de cancelamento. Após o cancelamento, você continua tendo acesso aos recursos do plano até o final do período pago."
      },
      {
        question: "Quais formas de pagamento são aceitas?",
        answer: "Aceitamos cartão de crédito (Visa, Mastercard, American Express, Elo) e PIX. O pagamento é processado de forma segura através de parceiros certificados."
      }
    ]
  },
  {
    title: "Funcionalidades",
    questions: [
      {
        question: "Como cadastrar uma prescrição médica?",
        answer: "No app, acesse a seção 'Prescrições' e toque em 'Adicionar Prescrição'. Você pode inserir o medicamento, dosagem, horários e frequência. O app enviará lembretes automáticos nos horários programados."
      },
      {
        question: "Como funciona a escala de cuidadores?",
        answer: "Na seção 'Escalas', você pode criar turnos e atribuir cuidadores a cada período. O app notifica automaticamente cada cuidador sobre seus horários e permite que eles confirmem presença."
      },
      {
        question: "Posso anexar exames e documentos?",
        answer: "Sim! No plano Premium, você pode anexar fotos de exames, receitas médicas e outros documentos ao perfil do paciente. Tudo fica organizado e acessível para consultas e compartilhamento com profissionais de saúde."
      },
      {
        question: "Como funciona o chat integrado?",
        answer: "O chat do Cuidame é exclusivo para comunicação sobre saúde. Todos os envolvidos no cuidado (familiares, cuidadores, enfermeiros) podem trocar mensagens, fotos e atualizações em um único lugar, sem misturar com conversas pessoais."
      }
    ]
  },
  {
    title: "Para Empresas",
    questions: [
      {
        question: "O Cuidame atende agências de home care?",
        answer: "Sim! Temos um plano empresarial específico para agências de home care, com funcionalidades como gestão de escalas com geolocalização, auditoria jurídica, dashboard BI e capacitação automática de cuidadores."
      },
      {
        question: "Como solicitar uma demonstração?",
        answer: "Acesse a página 'Para Empresas' e preencha o formulário de contato. Nossa equipe entrará em contato para agendar uma demonstração personalizada e apresentar a melhor solução para sua agência."
      },
      {
        question: "O sistema emite relatórios para as famílias?",
        answer: "Sim! O Cuidame gera relatórios automáticos de acompanhamento que podem ser compartilhados com as famílias dos pacientes, aumentando a transparência e confiança no serviço prestado."
      }
    ]
  }
];

const Ajuda = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-sm font-medium rounded-full mb-4">
            Central de Ajuda
          </span>
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            Como podemos <span className="text-accent">ajudar?</span>
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Encontre respostas para suas dúvidas ou entre em contato com nossa equipe de suporte.
          </p>

          {/* Search */}
          <div className="max-w-md mx-auto relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
            <Input 
              placeholder="Buscar por uma pergunta..." 
              className="pl-12 h-12 rounded-full border-border"
            />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-2xl font-bold text-foreground mb-8 text-center">
            Perguntas Frequentes
          </h2>

          <div className="space-y-8">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
                  <span className="w-2 h-2 bg-accent rounded-full"></span>
                  {category.title}
                </h3>
                <Accordion type="single" collapsible className="bg-white rounded-xl border border-border">
                  {category.questions.map((item, index) => (
                    <AccordionItem key={index} value={`${categoryIndex}-${index}`} className="border-b last:border-b-0">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-accent/5 text-left">
                        <span className="text-foreground font-medium">{item.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4 text-muted-foreground">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-3">
              Ainda precisa de ajuda?
            </h2>
            <p className="text-muted-foreground">
              Nossa equipe está pronta para ajudar você
            </p>
          </div>

          <div className="grid sm:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <a 
              href="#" 
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <MessageCircle className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Chat</h3>
              <p className="text-sm text-muted-foreground">Converse conosco pelo app</p>
            </a>

            <a 
              href="mailto:suporte@cuidame.app" 
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Mail className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">E-mail</h3>
              <p className="text-sm text-muted-foreground">suporte@cuidame.app</p>
            </a>

            <a 
              href="tel:+5500000000000" 
              className="bg-background border border-border rounded-xl p-6 text-center hover:border-accent hover:shadow-lg transition-all group"
            >
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <Phone className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-semibold text-foreground mb-1">Telefone</h3>
              <p className="text-sm text-muted-foreground">Seg-Sex, 9h às 18h</p>
            </a>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary to-accent">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Pronto para começar?
          </h2>
          <p className="text-white/90 mb-8 max-w-lg mx-auto">
            Baixe o Cuidame agora e comece a cuidar de quem você ama com mais tranquilidade.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button className="bg-white text-primary hover:bg-white/90 rounded-full px-8">
              Baixar App →
            </Button>
            <Button 
              variant="outline" 
              className="bg-transparent border-white text-white hover:bg-white hover:text-primary rounded-full px-8"
              asChild
            >
              <a href="/precos">Ver Preços</a>
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Ajuda;
