"use client"

import CustomButton from "./custom-button"
import { ArrowDown } from "lucide-react"

export default function Hero() {
  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="

  return (
    <section className="relative bg-black text-white min-h-screen flex items-center justify-center py-12 md:py-20 px-4 overflow-hidden border-b border-white/10">
      
      {/* BACKGROUND EFFECTS */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[url('/placeholder.svg')] opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px' }}></div>
        {/* Spotlight Central */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-[#c99420] opacity-10 blur-[120px] rounded-full"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto w-full flex flex-col items-center gap-8 md:gap-12">

        {/* --- IMAGEM DO PRODUTO (Com animação de flutuar restaurada) --- */}
        <div className="relative w-full flex justify-center mt-4 md:mt-0 animate-float">
          <div className="relative w-[280px] sm:w-[400px] md:w-[500px] lg:w-[600px] aspect-square flex justify-center items-center">
            
            {/* Círculo decorativo pulsando atrás */}
            <div className="absolute inset-0 border border-[#c99420]/20 rounded-full scale-110 animate-pulse-slow"></div>
            <div className="absolute inset-0 border border-white/5 rounded-full scale-125"></div>
            
            {/* Brilho Dourado Forte atrás da imagem */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#c99420]/20 blur-3xl rounded-full"></div>

            {/* Imagem do iPhone */}
            <img
              src="/images/adrianocell.png"
              alt="iPhone 15 Pro Max Titanium"
              className="relative w-full h-full object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] z-10 transition-all duration-500"
              style={{ 
                filter: "drop-shadow(0 0 30px rgba(201, 148, 32, 0.3)) scaleX(-1)",
                transform: "scale(1.05)"
              }}
            />
          </div>
        </div>

        {/* --- TEXTOS E BOTÕES (Com animação de entrada) --- */}
        <div className="text-center max-w-4xl px-2 animate-fade-in-up">
          <div className="inline-block mb-4 px-3 py-1 border border-[#c99420]/30 rounded-full bg-[#c99420]/10 backdrop-blur-sm">
            <span className="text-[#c99420] text-xs font-bold tracking-wider uppercase">Loja Oficial</span>
          </div>
          
          <h1 className="text-3xl sm:text-5xl md:text-7xl font-bold mb-6 tracking-tight leading-tight">
            A Experiência <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#c99420] via-[#fccb56] to-[#c99420] drop-shadow-sm">
              Apple Premium
            </span>
          </h1>
          
          <p className="text-white/60 text-sm sm:text-xl mb-8 md:mb-10 leading-relaxed max-w-2xl mx-auto font-light">
            Encontre o iPhone ideal para você com garantia de procedência, 
            melhor preço da região e atendimento exclusivo.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center items-center w-full">
            <div className="w-full sm:w-auto scale-100 sm:scale-110">
              <CustomButton href={whatsappAdriano} target="_blank" rel="noopener noreferrer" variant="primary">
                Comprar Agora
              </CustomButton>
            </div>
            <a 
              href="#produtos" 
              className="text-white hover:text-[#c99420] underline-offset-4 hover:underline transition-all text-sm font-medium flex items-center gap-2 mt-2 sm:mt-0"
            >
              Ver Catálogo <ArrowDown size={16} />
            </a>
          </div>
        </div>

      </div>

      {/* Estilos das Animações (Restaurados) */}
      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-15px); }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-pulse-slow {
          animation: pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite;
        }
        .animate-fade-in-up {
          animation: fadeInUp 1s ease-out forwards;
        }
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  )
}