"use client"

import { MapPin } from "lucide-react";
import { Card } from "@/app/components/card";
import { Input } from "@/app/components/input";
import { Button } from "@/app/components/button";

export default function ContactSection() {
  return (
    <section id="contact" className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Contáctanos</h2>
        <div className="grid lg:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-semibold mb-6">Nuestras Sucursales</h3>
            <div className="space-y-6">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold">Sucursal San José</h4>
                  <p className="text-gray-600">123 Calle Principal, San José, Costa Rica</p>
                  <p className="text-gray-600">Tel: +506 234 567 890</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold">Sucursal Heredia</h4>
                  <p className="text-gray-600">456 Avenida Norte, Heredia, Costa Rica</p>
                  <p className="text-gray-600">Tel: +506 234 567 891</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold">Sucursal Alajuela</h4>
                  <p className="text-gray-600">789 Calle Oeste, Alajuela, Costa Rica</p>
                  <p className="text-gray-600">Tel: +506 234 567 892</p>
                </div>
              </div>
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-green-600 mr-2 mt-1" />
                <div>
                  <h4 className="font-semibold">Sucursal Cartago</h4>
                  <p className="text-gray-600">1011 Avenida Sur, Cartago, Costa Rica</p>
                  <p className="text-gray-600">Tel: +506 234 567 893</p>
                </div>
              </div>
            </div>
          </div>
          <div>
            <Card className="p-6">
              <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
              <div className="space-y-4">
                <Input placeholder="Nombre" className="w-full p-3 border rounded-md" />
                <Input placeholder="Correo electrónico" className="w-full p-3 border rounded-md" />
                <Input placeholder="Sucursal" className="w-full p-3 border rounded-md" />
                <textarea 
                  className="w-full p-3 border rounded-md" 
                  placeholder="Mensaje"
                  rows={4}
                ></textarea>
                <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                  Enviar mensaje
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
