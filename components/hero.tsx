"use client"

import CustomButton from "./custom-button"

export default function Hero() {
  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="

  return (
    <section className="bg-black text-white py-20 px-4 border-b border-white/20">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="flex flex-col gap-8">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Os Melhores <span className="text-[#c99420]">Iphones</span> e Acessórios
            </h1>
            <p className="text-white/80 text-lg mb-6 leading-relaxed">
              Qualidade garantida com os melhores preços do mercado. Entrega rápida e atendimento de excelência.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <CustomButton href={whatsappAdriano} target="_blank" rel="noopener noreferrer" variant="primary">
              Compre Aqui
            </CustomButton>
            <CustomButton href="#produtos" variant="secondary">
              Ver Produtos
            </CustomButton>
          </div>
        </div>

        {/* Right Image with Mirror Effect */}
        <div className="flex justify-center items-center">
          <div className="relative">
            {/* Gold glow background */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#c99420]/20 to-[#c99420]/10 rounded-full blur-3xl"></div>

            {/* Mirror effect with flip */}
            <div className="relative">
              <img
                src="/images/apple-iphone-15-pro-1-removebg-preview.png"
                alt="iPhone 15 Pro"
                className="w-full max-w-md object-contain drop-shadow-2xl filter drop-shadow-[0_0_30px_rgba(201,148,32,0.4)]"
                style={{ filter: "drop-shadow(0 0 40px rgba(201, 148, 32, 0.6)) scaleX(-1)" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
