import { Check } from "lucide-react";
import loveSectionImage from "@/assets/love-section-family.jpg";

const benefits = [
  "Mantenha a saúde em tempo real",
  "Evite preocupações",
  "Monte a escala de cuidados",
  "Comunicação simplificada",
];

export function LoveSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative rounded-3xl overflow-hidden">
              {/* Green decorative frame */}
              <div className="absolute inset-0 border-[12px] border-accent/20 rounded-3xl pointer-events-none z-10" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl" />
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-cuidame-teal/20 rounded-full blur-2xl" />
              
              <img 
                src={loveSectionImage} 
                alt="Família multigeracional cuidando de idosa com carinho e amor" 
                className="aspect-[4/3] w-full object-cover rounded-2xl"
              />
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground mb-6">
              Cuidar de quem amamos é um ato de amor
            </h2>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Sabemos o quão difícil é equilibrar trabalho, vida pessoal e cuidado com nossos entes queridos. O Cuidame foi criado para dar a você tranquilidade, assegurando que você esteja sempre conectado com o cuidado de quem você ama.
            </p>

            <ul className="space-y-4">
              {benefits.map((benefit) => (
                <li key={benefit} className="flex items-center gap-3">
                  <div className="w-6 h-6 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-white" />
                  </div>
                  <span className="text-foreground font-medium">{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
