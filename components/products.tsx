"use client"

import CustomButton from "./custom-button"

export default function Products() {
  const products = [
    {
      name: "iPhone",
      description: "Os melhores iPhones com os preços mais competitivos",
    },
    {
      name: "Samsung",
      description: "Smartphones Samsung de alta qualidade",
    },
    {
      name: "Xiaomi",
      description: "Tecnologia Xiaomi com melhor custo-benefício",
    },
    {
      name: "Realme",
      description: "Realme - inovação e performance garantidas",
    },
    {
      name: "Acessórios",
      description: "Capas, películas, carregadores e muito mais",
    },
  ]

  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="

  return (
    <section id="produtos" className="bg-black py-24 px-4 border-b border-white/20">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-5xl md:text-6xl font-bold text-white text-center mb-6 text-balance">
          Nossos <span className="text-[#c99420]">Produtos</span>
        </h2>
        <p className="text-white/80 text-center mb-16 max-w-2xl mx-auto text-lg">
          Explore nossa coleção completa de smartphones e acessórios
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-black border-2 border-white/30 rounded-lg p-8 text-white flex flex-col justify-between hover:border-[#c99420] hover:shadow-2xl hover:shadow-[#c99420]/30 hover:scale-105 transition duration-300"
            >
              <div>
                <h3 className="text-3xl font-bold mb-3 text-white">{product.name}</h3>
                <p className="text-white/70 text-base mb-6">{product.description}</p>
              </div>
              <CustomButton href={whatsappAdriano} target="_blank" rel="noopener noreferrer" variant="primary">
                Compre Aqui
              </CustomButton>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
