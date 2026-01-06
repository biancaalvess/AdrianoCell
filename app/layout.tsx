import type React from "react";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import StyledComponentsRegistry from "@/lib/styled-components-registry";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });
const _geistMono = Geist_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adriano Iphones - Melhores Preços em Smartphones",
  description:
    "Compre iPhones, Samsung, Xiaomi, Realme e acessórios com os melhores preços e garantia total.",
  generator: "",
  icons: {
    icon: "/adrianocell.png",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`font-sans antialiased`}>
        <StyledComponentsRegistry>
          {children}
          <Analytics />
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
