"use client"

import * as React from "react"
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"
import CustomButton from "./custom-button"

export default function Products() {
  const products = [
    {
      name: "iPhone 11",
      image: "/images/iphone11.png",
    },
    {
      name: "Samsung Galaxy A07",
      image: "/images/samsung07.png",
    },
    {
      name: "Iphone 13",
      image: "/images/iphone13.png",
    },
    {
      name: "Note 60",
      image: "/images/note60.png",
    },
    {
      name: "Iphone 16",
      image: "/images/iphone16.png",
    },
    {
      name: "Redmi 15",
      image: "/images/redmi15.png",
    },
    {
      name: "Iphone 12",
      image: "/images/iphone12.png",
    },
  ]

  const whatsappAdriano = "https://api.whatsapp.com/send?phone=5575998885439&text="

  return (
    <section id="produtos" className="bg-black py-16 px-4 border-b border-white/20">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        <h2 className="text-4xl md:text-5xl font-bold text-white text-center mb-4 text-balance">
          Nossos <span className="text-[#c99420]">Produtos</span>
        </h2>
        <p className="text-white/80 text-center mb-12 max-w-2xl mx-auto text-sm">
          Explore nossa coleção completa de smartphones e acessórios
        </p>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full max-w-6xl" // Aumentei a largura máxima do carrossel
        >
          <CarouselContent>
            {products.map((product, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <Card className="bg-[#1a1a1a] border-white/10 hover:border-[#c99420] transition-all duration-300 h-full">
                    <CardContent className="flex flex-col items-center justify-between p-6 h-[550px]"> {/* Aumentei a altura do card */}
                      <div className="relative w-full flex-1 flex items-center justify-center mb-6 overflow-hidden">
                        <img
                          src={product.image}
                          alt={product.name}
                          // Aumentei drasticamente a altura da imagem (max-h-80 = 320px)
                          className="max-h-80 w-auto object-contain drop-shadow-md hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold text-white mb-2">{product.name}</h3>
                        <p className="text-white/60 text-base line-clamp-2">{product.description}</p>
                      </div>

                      <div className="scale-110"> {/* Botão um pouco maior também */}
                        <CustomButton
                          href={whatsappAdriano}
                          target="_blank"
                          rel="noopener noreferrer"
                          variant="primary"
                        >
                          Compre Agora
                        </CustomButton>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-black bg-[#c99420] border-none hover:bg-[#c99420]/80 hidden md:flex w-12 h-12" /> {/* Setas maiores */}
          <CarouselNext className="text-black bg-[#c99420] border-none hover:bg-[#c99420]/80 hidden md:flex w-12 h-12" />
        </Carousel>
      </div>
    </section>
  )
}