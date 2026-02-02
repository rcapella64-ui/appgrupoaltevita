import { ShieldCheck, Lock } from "lucide-react";

export function Trust() {
  return (
    <section className="py-16 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-2">
            Confiança é a nossa base
          </h2>
          <p className="text-muted-foreground">
            Seus dados estão seguros conosco
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-8">
          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <ShieldCheck className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">LGPD Compliant</p>
              <p className="text-xs text-muted-foreground">Lei Geral de Proteção de Dados</p>
            </div>
          </div>

          <div className="flex items-center gap-3 bg-white px-6 py-4 rounded-xl border border-border">
            <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center">
              <Lock className="w-5 h-5 text-accent" />
            </div>
            <div>
              <p className="font-semibold text-foreground text-sm">Dados Criptografados</p>
              <p className="text-xs text-muted-foreground">Proteção end-to-end</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
