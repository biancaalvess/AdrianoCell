"use client"

import { Smartphone, Truck, Shield, Headset } from "lucide-react"

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: "E o meu antigo celular?",
      description: "Aceitamos seu usado como parte do pagamento!",
    },
    {
      icon: Truck,
      title: "Posso comprar online?",
      description: "Sim! Entregas rápidas e seguras para toda região, consulte seu endereço",
    },
    {
      icon: Shield,
      title: "Produtos Novos e SemiNovos",
      description: "SemiNovo com 3 meses de garantia e Novo com 1 ano de garantia",
    },
    {
      icon: Headset,
      title: "Suporte Completo",
      description: "Atendimento ao cliente via WhatsApp",
    },
  ]

  return (
    <section className="bg-black py-8 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-lg md:text-xl font-bold text-white text-center mb-1 text-balance">
          Nossos <span className="text-white/60">Serviços</span>
        </h2>
        <p className="text-white/50 text-center mb-6 max-w-2xl mx-auto text-xs">
          Oferecemos uma experiência completa em compra de smartphones
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-3">
          {services.map((service, index) => {
            const Icon = service.icon
            return (
              <div
                key={index}
                className="bg-black border border-white/20 rounded-lg p-3 text-white hover:border-white/40 transition duration-300"
              >
                <Icon className="w-6 h-6 text-white/60 mb-2" />
                <h3 className="text-sm font-bold mb-1">{service.title}</h3>
                <p className="text-white/50 text-xs">{service.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
