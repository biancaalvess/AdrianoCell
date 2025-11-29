"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="

  return (
    // Adicionei um backdrop-blur para dar um efeito de vidro no menu ao rolar a página
    <header className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-md border-b border-white/10 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* LOGO */}
        <div className="flex items-center gap-2">
          {/* Se você tiver uma imagem da logo, descomente a linha abaixo e coloque o caminho correto */}
          {/* <img src="/images/logo.png" alt="Adriano Iphones" className="h-10 w-auto object-contain" /> */}
          
          {/* Por enquanto, mantive um texto estilizado que parece uma logo */}
          <div className="flex flex-col leading-none">
            <span className="text-2xl font-bold text-[#c99420] tracking-tight">Adriano</span>
            <span className="text-sm text-white font-light tracking-[0.2em] uppercase">iPhones</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {["Serviços", "Produtos", "Localização"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`} 
              className="text-sm font-medium text-white/80 hover:text-[#c99420] transition-colors duration-300"
            >
              {item}
            </a>
          ))}
        </nav>

        {/* CTA Button */}
        <a
          href={whatsappAdriano}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:block bg-[#c99420] text-black px-6 py-2 rounded-full font-bold text-sm hover:bg-white hover:text-black transition duration-300 shadow-[0_0_15px_rgba(201,148,32,0.3)] hover:shadow-[0_0_20px_rgba(255,255,255,0.4)]"
        >
          Fale Conosco
        </a>

        {/* Mobile Menu Button */}
        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden text-white hover:text-[#c99420] transition">
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <nav className="md:hidden bg-black/95 backdrop-blur-xl absolute top-full left-0 right-0 border-b border-white/10 p-6 flex flex-col gap-6 animate-in slide-in-from-top-5">
          {["Serviços", "Produtos", "Localização"].map((item) => (
            <a 
              key={item}
              href={`#${item.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "")}`}
              className="text-lg font-medium text-white hover:text-[#c99420] transition-colors"
              onClick={() => setMobileMenuOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href={whatsappAdriano}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-[#c99420] text-black py-3 rounded-lg font-bold text-center hover:bg-white transition duration-300"
          >
            Fale Conosco
          </a>
        </nav>
      )}
    </header>
  )
}