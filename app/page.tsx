"use client";

import { useState, useEffect } from "react";
import { 
  Package, 
  Calculator,
  Facebook, 
  Twitter,
  Instagram,
  User, 
  MessageCircle,
  MapPin,
  ChevronRight,
  Download,
  ChevronLeft,
  Bell,
  FileText,
  DollarSign,
  ShieldCheck,
  X
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/dropdown-menu";
import { Button } from "@/components/button";
import { Input } from "@/components/input";
import { Card } from "@/components/card";
import Link from "next/link";

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

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-white">
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-green-600">Rapibox</span>
          </div>
          <button
            className="lg:hidden p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? (
              <button onClick={closeMenu} className="p-2">
                <X className="h-6 w-6 text-gray-800" />
              </button>
            ) : (
              <>
                <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-1 bg-gray-800 mb-1"></span>
                <span className="block w-6 h-1 bg-gray-800"></span>
              </>
            )}
          </button>
          <nav
            className={`${
              menuOpen ? "fixed inset-0 bg-white/90 flex flex-col items-center justify-center" : "hidden"
            } lg:flex lg:flex-row items-center space-x-6`}
          >
            <Link href="#services" className="text-gray-600 hover:text-green-600">
              Servicios
            </Link>
            <Link href="#benefits" className="text-gray-600 hover:text-green-600">
              Programas y beneficios
            </Link>
            <Link href="#tools" className="text-gray-600 hover:text-green-600">
              Herramientas
            </Link>
            <Link href="#contact" className="text-gray-600 hover:text-green-600">
              Contáctenos
            </Link>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="flex items-center space-x-2">
                  <User className="h-5 w-5" />
                  <span>Iniciar Sesión</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent className="w-64 p-4">
                <div className="space-y-4">
                  <Input
                    type="email"
                    placeholder="Correo electrónico"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                  <Input
                    type="password"
                    placeholder="Contraseña"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <Button className="w-full bg-green-600 hover:bg-green-700 text-white">
                    Ingresar
                  </Button>
                </div>
              </DropdownMenuContent>
            </DropdownMenu>
          </nav>
        </div>
      </div>
    </header>
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
        <button
          onClick={() => setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full"
        >
          <ChevronLeft className="h-6 w-6 text-white" />
        </button>
        <button
          onClick={() => setCurrentSlide((prev) => (prev + 1) % slides.length)}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-30 bg-white/20 hover:bg-white/30 p-2 rounded-full"
        >
          <ChevronRight className="h-6 w-6 text-white" />
        </button>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Nuestros Servicios</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <Package className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Casillero Virtual</h3>
              <p className="text-gray-600">Dirección personal en USA</p>
            </div>
            <div className="text-center">
              <Calculator className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Calculadora</h3>
              <p className="text-gray-600">Cotiza tu envío al instante</p>
            </div>
            <div className="text-center">
              <ShieldCheck className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Seguro de envíos</h3>
              <p className="text-gray-600">Protección para tus paquetes</p>
            </div>
            <div className="text-center">
              <DollarSign className="h-12 w-12 mx-auto text-green-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Pago en línea</h3>
              <p className="text-gray-600">Proceso seguro y rápido</p>
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Ofertas Destacadas</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "iPhone 15 Pro",
                price: "$999",
                image: "https://images.unsplash.com/photo-1696423736330-b7c9d6719649?auto=format&fit=crop&q=80&w=300"
              },
              {
                title: "MacBook Air M2",
                price: "$1199",
                image: "https://images.unsplash.com/photo-1517336714731-489689fd1ca8?auto=format&fit=crop&q=80&w=300"
              },
              {
                title: "AirPods Pro",
                price: "$249",
                image: "https://images.unsplash.com/photo-1588156979435-379b9d802b0a?auto=format&fit=crop&q=80&w=300"
              }
            ].map((product, index) => (
              <Card key={index} className="overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold mb-2">{product.title}</h3>
                  <p className="text-green-600 font-bold">{product.price}</p>
                  <Button className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white">
                    Ver detalles
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Últimas Noticias</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Nuevas rutas de envío disponibles",
                date: "2024-03-20",
                description: "Ampliamos nuestras rutas para mejor servicio"
              },
              {
                title: "Descuentos en envíos de tecnología",
                date: "2024-03-18",
                description: "50% off en envíos de smartphones y tablets"
              }
            ].map((item, index) => (
              <Card key={index} className="p-6">
                <div className="flex items-start">
                  <Bell className="h-8 w-8 text-green-600 mr-4 flex-shrink-0" />
                  <div>
                    <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                    <p className="text-gray-500 text-sm mb-2">{item.date}</p>
                    <p className="text-gray-600">{item.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>
      <section className="py-12 bg-green-600 text-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">Descarga nuestra aplicación</h2>
              <p className="text-lg mb-8">
                Gestiona tus envíos desde cualquier lugar. Rastrea tus paquetes, calcula costos y más.
              </p>
              <div className="flex space-x-4">
                <Button variant="secondary">
                  <Download className="mr-2 h-4 w-4" /> App Store
                </Button>
                <Button variant="secondary">
                  <Download className="mr-2 h-4 w-4" /> Google Play
                </Button>
              </div>
            </div>
            <div className="hidden lg:block">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=500"
                alt="Mobile App"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </section>
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
                    <h4 className="font-semibold">Sucursal Principal</h4>
                    <p className="text-gray-600">123 Calle Principal, Ciudad</p>
                    <p className="text-gray-600">Tel: +1 234 567 890</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 text-green-600 mr-2 mt-1" />
                  <div>
                    <h4 className="font-semibold">Sucursal Norte</h4>
                    <p className="text-gray-600">456 Avenida Norte, Ciudad</p>
                    <p className="text-gray-600">Tel: +1 234 567 891</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <Card className="p-6">
                <h3 className="text-xl font-semibold mb-4">Envíanos un mensaje</h3>
                <div className="space-y-4">
                  <Input placeholder="Nombre" />
                  <Input placeholder="Correo electrónico" />
                  <Input placeholder="Sucursal" />
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
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h4 className="text-lg font-semibold mb-4">Rapibox</h4>
              <p className="text-gray-400">Tu casillero de confianza para compras internacionales</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Enlaces rápidos</h4>
              <ul className="space-y-2">
                <li><Link href="#" className="text-gray-400 hover:text-white">Servicios</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Calculadora</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Preavisos</Link></li>
                <li><Link href="#" className="text-gray-400 hover:text-white">Mis paquetes</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Síguenos</h4>
              <div className="flex space-x-4">
                <Link href="#" className="hover:text-green-500">
                  <Facebook className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-green-500">
                  <Twitter className="h-6 w-6" />
                </Link>
                <Link href="#" className="hover:text-green-500">
                  <Instagram className="h-6 w-6" />
                </Link>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold mb-4">Newsletter</h4>
              <div className="flex">
                <Input 
                  placeholder="Tu correo electrónico" 
                  className="bg-gray-800 border-gray-700"
                />
                <Button className="ml-2 bg-green-600 hover:bg-green-700">
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </footer>
      <div className="fixed bottom-4 right-4">
        <Button className="rounded-full w-16 h-16 bg-green-600 hover:bg-green-700">
          <MessageCircle className="h-6 w-6" />
        </Button>
      </div>
    </div>
  );
} 