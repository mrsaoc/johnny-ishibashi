import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { LanguageProvider } from "@/context/LanguageContext";

const inter = Inter({
    subsets: ["latin"],
    variable: "--font-sans",
    display: "swap",
});

const playfair = Playfair_Display({
    subsets: ["latin"],
    variable: "--font-serif",
    display: "swap",
});

export const metadata: Metadata = {
    title: "Johnny Ishibashi | Intérprete Internacional",
    description: "Três décadas de excelência em interpretação simultânea e consecutiva, conectando culturas nos maiores palcos do mundo.",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="pt-BR" className={`${inter.variable} ${playfair.variable} scroll-smooth`}>
        <body className="antialiased min-h-screen flex flex-col relative bg-[#F8F9FA] text-[#111111]">

        {/* Envolvemos toda a aplicação com o Provider de Idiomas */}
        <LanguageProvider>
            <Header />
            <main className="flex-grow flex flex-col pt-24">
                {children}
            </main>
            <Footer />
        </LanguageProvider>

        </body>
        </html>
    );
}