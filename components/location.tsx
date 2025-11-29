"use client"

import { MapPin, Phone, Clock } from "lucide-react"
import CustomButton from "./custom-button"

export default function Location() {
  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="
  const whatsappUPCell = "https://api.whatsapp.com/send?phone=5575997147670"

  return (
    <section id="localizacao" className="bg-black text-white py-12 px-4 border-b border-white/10">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-balance">
          <span className="text-white/60">Localização</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* Adriano Iphones */}
          <div className="bg-black border border-white/20 text-white p-5 rounded-lg hover:border-white/40 transition duration-300">
            <h3 className="text-lg font-bold mb-3 text-white/80">Adriano Iphones</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-white/60" />
                <div>
                  <p className="font-semibold text-sm">Endereço</p>
                  <p className="text-white/70 text-xs">Praça Érico damacena, Ao lado de Neném do Bolo - Sítio do Quinto/BA</p>
                  <p className="text-white/70 text-xs">Av. 07 de Setembro, em frente a Feira Livre - Heliópolis/BA</p>

                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-1 text-white/60" />
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <a
                    href={whatsappAdriano}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c99420] hover:underline font-bold text-xs"
                  >
                    (75) 99888-5439
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* UPCell */}
          <div className="bg-black border border-white/20 text-white p-5 rounded-lg hover:border-white/40 transition duration-300">
            <h3 className="text-lg font-bold mb-3 text-white/80">UPCell</h3>
            <div className="space-y-3">
              <div className="flex items-start gap-2">
                <MapPin className="w-4 h-4 flex-shrink-0 mt-1 text-white/60" />
                <div>
                  <p className="font-semibold text-sm">Endereço</p>
                  <p className="text-white/70 text-xs">Av. Helvecio Pereira de Santana, ao lado da Lotérica - Heliópolis/BA</p>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <Phone className="w-4 h-4 flex-shrink-0 mt-1 text-white/60" />
                <div>
                  <p className="font-semibold text-sm">WhatsApp</p>
                  <a
                    href={whatsappUPCell}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[#c99420] hover:underline font-bold text-xs"
                  >
                    (75) 99714-7670
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-black border border-white/20 text-white p-5 rounded-lg hover:border-white/40 transition duration-300">
          <div className="flex items-start gap-2 mb-3">
            <Clock className="w-4 h-4 flex-shrink-0 mt-1 text-white/60" />
            <div>
              <h3 className="font-bold text-sm text-white/80">Horário de Funcionamento</h3>
              <p className="text-white/70 text-xs mt-1">
                Segunda - Sexta - Todas as Lojas: 08h - 18h
                <br />
                Sábado Helípolis: 8h - 16h
                <br></br>
                Sítio do Quinto (Sábado): Fechado
                <br />
                Domingo Sítio do Quinto: 08h - 15h
                <br></br>
                Heliópolis (Domingo): Fechado
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}