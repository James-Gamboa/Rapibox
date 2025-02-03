"use client";

import { useEffect } from "react";
import { Button } from "@/app/components/Button/page";

interface CarouselProps {
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const Carousel = ({ currentSlide, setCurrentSlide }: CarouselProps) => {
  const slides = [
    {
      image: "https://i.postimg.cc/9FbCRHjk/claudio-schwarz-q8k-R-ie6-Wn-I-unsplash.jpg",
      title: "Envíos Internacionales Seguros",
      description: "Compra en USA y recibe en tu país"
    },
    {
      image: "https://i.postimg.cc/XNwVWy14/amazon-paquetes-mensajeria-entregas.jpg",
      title: "Entregas Rápidas",
      description: "Recibe tus paquetes en tiempo récord"
    },
    {
      image: "https://i.postimg.cc/yxzs9VdM/paquetes-perdidos-perdida-clientes-1140x641.webp",
      title: "Precios Competitivos",
      description: "Las mejores tarifas del mercado"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, [setCurrentSlide, slides.length]);

  return (
    <section className="relative bg-gray-900 h-[500px] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            currentSlide === index ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="absolute inset-0 bg-black/40 z-10" />
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 z-20 flex items-center justify-center text-white text-center">
            <div className="container px-4">
              <h1 className="text-4xl lg:text-6xl font-bold mb-4">{slide.title}</h1>
              <p className="text-xl mb-8">{slide.description}</p>
              <Button variant="secondary" size="lg">
                Comenzar ahora
              </Button>
            </div>
          </div>
        </div>
      ))}
    </section>
  );
};