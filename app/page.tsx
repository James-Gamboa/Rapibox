"use client"

import { useState } from "react";
import Header from "@/app/components/Header";
import { Carousel } from "@/app/components/carousel";
import { ServiceGrid } from "@/app/components/ServiceGrid";
import Footer from "@/app/components/Footer";
import ContactSection from "@/app/components/ContactSection";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const slides = [
    {
      image: "https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&fit=crop&q=80&w=1200&h=500",
      title: "Envíos Internacionales Seguros",
      description: "Compra en USA y recibe en tu país"
    },
    {
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=1200&h=500",
      title: "Entregas Rápidas",
      description: "Recibe tus paquetes en tiempo récord"
    },
    {
      image: "https://images.unsplash.com/photo-1580674285054-bed31e145f59?auto=format&fit=crop&q=80&w=1200&h=500",
      title: "Precios Competitivos",
      description: "Las mejores tarifas del mercado"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <Carousel slides={slides} currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <ServiceGrid />
      <ContactSection />
      <Footer />
    </div>
  );
} 