import { Geist, Geist_Mono } from "next/font/google";
import { Footer, NavBar, WppBtn } from "./components";
import "./globals.scss";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Agencia de Desarrollo de Software | Apps, Web, SEO & UX/UI",
  description: "Impulsamos tu negocio con desarrollo de aplicaciones móviles, sitios web a medida, SEO efectivo y diseño UX/UI enfocado en la experiencia del usuario. Innovación digital para crecer.",
  keywords:'desarrollo de software, aplicaciones móviles, desarrollo web, agencia de software, diseño UX/UI, SEO, soluciones digitales, transformación digital, programación a medida'
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        <NavBar />
        {children}
        <WppBtn />
        <Footer />
      </body>
    </html>
  );
}
