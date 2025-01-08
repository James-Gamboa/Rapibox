"use client"

import { Facebook, Twitter, Instagram, ChevronRight } from "lucide-react";
import { Button } from "@/app/components/button";
import { Input } from "@/app/components/input";
import Link from "next/link";

const quickLinks = [
  { title: "Servicios", href: "#" },
  { title: "Calculadora", href: "#" },
  { title: "Preavisos", href: "#" },
  { title: "Mis paquetes", href: "#" }
];

const socialLinks = [
  { icon: Facebook, href: "#" },
  { icon: Twitter, href: "#" },
  { icon: Instagram, href: "#" }
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Rapibox</h4>
            <p className="text-gray-400">
              Tu casillero de confianza para compras internacionales
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
            <ul className="space-y-2">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <Link href={link.href} className="text-gray-400 hover:text-white">
                    {link.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <Link key={index} href={social.href} className="hover:text-green-500">
                  <social.icon className="h-6 w-6" />
                </Link>
              ))}
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
            <div className="flex">
              <Input 
                placeholder="Tu correo electrónico" 
                className="w-full p-3 border rounded-md bg-gray-800 border-gray-700"
              />
              <Button 
                variant="default"
                className="ml-2 bg-green-600 hover:bg-green-700"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
} 