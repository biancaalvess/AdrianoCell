import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import Products from "@/components/products"
import Location from "@/components/location"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="bg-black">
      <Header />
      <Hero />
      <Products />
      <Services />
      <Location />
      <Footer />
    </main>
  )
}
