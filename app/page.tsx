"use client";

import { useState } from "react";
import Header from "@/app/components/Header/page";
import { Carousel } from "@/app/components/Carousel/page";
import Service from "@/app/components/Service/page";
import Footer from "@/app/components/Footer/page";
import ContactSection from "@/app/components/ContactSection/page";
import AppBanner from "@/app/components/AppBanner/page";
import ProductOffers from "@/app/components/ProductOffers/page";
import News from "@/app/components/News/page";

export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [currentSlide, setCurrentSlide] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-gray-100">
      <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen} email={email} setEmail={setEmail} password={password} setPassword={setPassword} />
      <Carousel currentSlide={currentSlide} setCurrentSlide={setCurrentSlide} />
      <Service />
      <ProductOffers />
      <News />
      <AppBanner />
      <ContactSection />
      <Footer />
    </div>
  );
}
