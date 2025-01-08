"use client";

import * as React from "react";
import { useEffect } from "react";
import { Button } from "@/app/components/button";

interface CarouselProps {
  slides: {
    image: string;
    title: string;
    description: string;
  }[];
  currentSlide: number;
  setCurrentSlide: React.Dispatch<React.SetStateAction<number>>;
}

export const Carousel = ({ slides, currentSlide, setCurrentSlide }: CarouselProps) => {
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