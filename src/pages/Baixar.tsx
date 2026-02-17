import { useEffect, useState } from "react";
import { QRCodeSVG } from "qrcode.react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const APP_STORE_URL = "https://apps.apple.com/br/app/cuidame-gestor-de-sa%C3%BAde/id6744027992";
const GOOGLE_PLAY_URL = "https://play.google.com/store/apps/details?id=br.com.cuidame&hl=pt";
const BAIXAR_URL = "https://appgrupoaltevita.lovable.app/baixar";

const Baixar = () => {
  const [showFallback, setShowFallback] = useState(false);

  useEffect(() => {
    const ua = navigator.userAgent || navigator.vendor || (window as any).opera;

    if (/iPad|iPhone|iPod/.test(ua) && !(window as any).MSStream) {
      window.location.href = APP_STORE_URL;
      return;
    }

    if (/android/i.test(ua)) {
      window.location.href = GOOGLE_PLAY_URL;
      return;
    }

    setShowFallback(true);
  }, []);

  if (!showFallback) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <p className="text-muted-foreground animate-pulse">Redirecionando...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navbar />
      <main className="flex-1 flex items-center justify-center px-4 pt-24 pb-16">
        <div className="max-w-md w-full text-center space-y-8">
          <div className="space-y-3">
            <h1 className="text-3xl font-bold text-accent">
              Baixe o Cuidame
            </h1>
            <p className="text-muted-foreground">
              A segurança do Grupo Altevita, agora no seu celular.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 rounded-2xl hover:bg-foreground/90 transition-all hover:scale-105"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Baixar na</div>
                <div className="text-lg font-semibold">App Store</div>
              </div>
            </a>

            <a
              href={GOOGLE_PLAY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 bg-foreground text-background px-6 py-4 rounded-2xl hover:bg-foreground/90 transition-all hover:scale-105"
            >
              <svg className="w-8 h-8" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.9 20.18,13.18L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z" />
              </svg>
              <div className="text-left">
                <div className="text-xs opacity-80">Disponível no</div>
                <div className="text-lg font-semibold">Google Play</div>
              </div>
            </a>
          </div>

          <div className="flex flex-col items-center gap-3 p-6 bg-secondary rounded-2xl">
            <p className="text-sm font-medium text-foreground">Escaneie com seu celular</p>
            <div className="bg-white p-3 rounded-xl">
              <QRCodeSVG
                value={BAIXAR_URL}
                size={160}
                fgColor="#1b4332"
                level="H"
              />
            </div>
            <p className="text-xs text-muted-foreground">Aponte a câmera para o QR Code</p>
          </div>

          <p className="text-xs text-muted-foreground">
            Problemas com o download? Aponte a câmera do seu celular para o QR Code acima.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Baixar;
