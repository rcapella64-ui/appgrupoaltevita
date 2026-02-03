import heroMockup from "@/assets/hero-mockup.png";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-gradient-to-br from-white via-accent/5 to-cuidame-teal/10">
      {/* Modern gradient mesh background */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Primary gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-accent/8 to-cuidame-teal/15" />
        
        {/* Animated gradient orbs */}
        <motion.div 
          className="absolute -top-32 -right-32 w-[500px] h-[500px] rounded-full bg-gradient-radial from-accent/25 via-accent/10 to-transparent"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.6, 0.8, 0.6],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute top-1/2 -left-24 w-[400px] h-[400px] rounded-full bg-gradient-radial from-cuidame-teal/20 via-cuidame-teal/5 to-transparent"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.7, 0.5],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div 
          className="absolute -bottom-20 right-1/3 w-[350px] h-[350px] rounded-full bg-gradient-radial from-accent/15 via-accent/5 to-transparent"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        
        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(27,67,50,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(27,67,50,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-bold leading-tight mb-6 text-foreground">
              App Completo<br />
              para o <span className="text-accent">Cuidado</span> de<br />
              Quem Você Ama.
            </h1>

            <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-md">
              Gerencie medicações, escalas de cuidadores, evolução clínica e comunicação familiar em um único app seguro e intuitivo.
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

          {/* Phone Mockup Image */}
          <motion.div 
            className="relative flex justify-center lg:justify-end cursor-pointer"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.03, y: -5 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.3 }}
          >
            <img 
              src={heroMockup} 
              alt="App Cuidame em dois smartphones mostrando tela de login e seleção de perfil" 
              className="w-full max-w-[500px] lg:max-w-[600px] h-auto drop-shadow-2xl transition-shadow duration-300 hover:drop-shadow-[0_35px_35px_rgba(0,0,0,0.25)]"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
