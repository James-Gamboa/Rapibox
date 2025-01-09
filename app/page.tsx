"use client";

import { useState, useEffect } from "react";
import Header from "@/app/components/Header";
import { Carousel } from "@/app/components/carousel";
import { ServiceGrid } from "@/app/components/ServiceGrid";
import Footer from "@/app/components/Footer";
import ContactSection from "@/app/components/ContactSection";
import AppBanner from "@/app/components/AppBanner";
import ProductOffers from "@/app/components/ProductOffers";
import News from "@/app/components/News";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    setCurrentSlide(0);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <ServiceGrid />
      <ProductOffers />
      <News />
      <AppBanner />
      <ContactSection />
      <Footer />
    </div>
  );
}
