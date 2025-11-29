"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="
  const whatsappUPCell = "https://api.whatsapp.com/send?phone=5575997147670"

  return (
    <header className="bg-black text-white sticky top-0 z-50 shadow-lg border-b-2 border-white">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="text-3xl font-bold text-white">Adriano</span>
          <span className="text-sm text-white border-l-2 border-white pl-2">Iphones</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#servicos" className="hover:text-[#c99420] transition duration-300">
            Serviços
          </a>
          <a href="#produtos" className="hover:text-[#c99420] transition duration-300">
            Produtos
          </a>
          <a href="#localizacao" className="hover:text-[#c99420] transition duration-300">
            Localização
          </a>
        </nav>

        {/* CTA Button */}
        <a
          href={whatsappAdriano}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#c99420] text-black px-6 py-2 rounded font-semibold hover:shadow-lg hover:shadow-[#c99420]/50 transition duration-300"
        >
          Compre Agora
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white">
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black px-4 py-4 flex flex-col gap-4 border-t-2 border-white">
          <a href="#servicos" className="hover:text-[#c99420] transition duration-300">
            Serviços
          </a>
          <a href="#produtos" className="hover:text-[#c99420] transition duration-300">
            Produtos
          </a>
          <a href="#localizacao" className="hover:text-[#c99420] transition duration-300">
            Localização
          </a>
          <a
            href={whatsappAdriano}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c99420] text-black px-6 py-2 rounded font-semibold text-center hover:shadow-lg hover:shadow-[#c99420]/50 transition duration-300"
          >
            Compre Agora
          </a>
        </nav>
      )}
    </header>
  )
}
