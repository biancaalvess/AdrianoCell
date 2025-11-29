"use client"

export default function Footer() {
  const instagramAdriano = "https://www.instagram.com/adrianoiphones_/"
  const instagramUPCell = "https://www.instagram.com/up_cell_hp/"

  return (
    <footer className="bg-black text-white py-8 px-4 border-t-2 border-[#D4AF37]">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-[#D4AF37] font-bold text-lg mb-2">Adriano Iphones</h3>
            <p className="text-sm text-white">Os melhores preços em smartphones e acessórios da região.</p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-[#D4AF37] font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2 text-sm text-white">
              <li>
                <a href="#servicos" className="hover:text-[#D4AF37] transition duration-300">
                  Serviços
                </a>
              </li>
              <li>
                <a href="#produtos" className="hover:text-[#D4AF37] transition duration-300">
                  Produtos
                </a>
              </li>
              <li>
                <a href="#localizacao" className="hover:text-[#D4AF37] transition duration-300">
                  Localização
                </a>
              </li>
            </ul>
          </div>

          {/* WhatsApp Contatos */}
          <div>
            <h4 className="text-[#D4AF37] font-bold mb-4">Entre em Contato</h4>
            <div className="space-y-2 text-sm text-white">
              <p>
                <a
                  href={instagramAdriano}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline transition duration-300"
                >
                  Adriano Iphones
                </a>
              </p>
              <p>
                <a
                  href={instagramUPCell}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#D4AF37] hover:underline transition duration-300"
                >
                  UPCell
                </a>
              </p>
            </div>
          </div>
        </div>

        <div className="border-t-2 border-[#D4AF37] pt-8 text-center">
          <p className="text-sm text-white">© 2025 Adriano Iphones & UPCell. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}
