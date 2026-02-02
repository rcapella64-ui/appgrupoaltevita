import { Button } from "./ui/button";

const CTA = () => {
  return (
    <section className="py-20 bg-primary">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-4">
          Pronto para transformar o cuidado?
        </h2>
        <p className="text-white/80 mb-8 max-w-xl mx-auto">
          Comece agora gratuitamente e descubra como é fácil cuidar de quem você ama.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-white text-primary hover:bg-white/90 rounded-full px-8"
          >
            Começar Grátis →
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-white text-white hover:bg-white/10 rounded-full px-8"
          >
            Saber Mais
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTA;
