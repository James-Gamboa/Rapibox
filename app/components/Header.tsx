"use client";
import Link from "next/link";
import { X, User, Menu } from "lucide-react";
import { Button } from "@/app/components/button";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent 
} from "@/app/components/dropdown-menu";
import { Input } from "@/app/components/input";
import { useEffect } from "react";

interface HeaderProps {
  menuOpen: boolean;
  setMenuOpen: (value: boolean) => void;
  email: string;
  setEmail: (value: string) => void;
  password: string;
  setPassword: (value: string) => void;
}

export default function Header({ 
  menuOpen, 
  setMenuOpen, 
  email, 
  setEmail, 
  password, 
  setPassword 
}: HeaderProps) {
  const closeMenu = () => setMenuOpen(false);
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [menuOpen]);

  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <span className="ml-2 text-xl font-bold text-green-600">Rapibox</span>
          </div>
          <button
            className="lg:hidden relative z-50 w-10 h-10 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="absolute w-6 transform left-1/2 -translate-x-1/2">
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  menuOpen ? 'rotate-45 translate-y-2.5' : '-translate-y-2'
                }`}
              />
              <span
                className={`absolute h-0.5 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  menuOpen ? 'w-0 opacity-0' : 'w-6 opacity-100'
                }`}
              />
              <span
                className={`absolute h-0.5 w-6 bg-gray-800 transform transition-all duration-300 ease-in-out ${
                  menuOpen ? '-rotate-45 -translate-y-2.5' : 'translate-y-2'
                }`}
              />
            </div>
          </button>
          <div
            className={`${
              menuOpen
                ? 'fixed inset-0 flex flex-col items-center justify-center'
                : 'hidden'
            } lg:relative lg:flex lg:flex-row lg:items-center lg:space-x-6 lg:bg-transparent`}
          >
            {menuOpen && (
              <div className="fixed inset-0 bg-white/95 backdrop-blur-sm" onClick={closeMenu} />
            )}
            <nav className={`
              relative z-50 flex flex-col items-center space-y-8 lg:space-y-0 lg:flex-row lg:space-x-6
              ${menuOpen ? 'animate-fadeIn' : ''}
              bg-white/80 p-8 rounded-lg shadow-lg lg:bg-transparent lg:p-0 lg:shadow-none
            `}>
              <Link 
                href="#services" 
                className="text-2xl lg:text-base text-gray-800 hover:text-green-600 transition-colors duration-200"
                onClick={closeMenu}
              >
                Servicios
              </Link>
              <Link 
                href="#benefits" 
                className="text-2xl lg:text-base text-gray-800 hover:text-green-600 transition-colors duration-200"
                onClick={closeMenu}
              >
                Programas y beneficios
              </Link>
              <Link 
                href="#tools" 
                className="text-2xl lg:text-base text-gray-800 hover:text-green-600 transition-colors duration-200"
                onClick={closeMenu}
              >
                Herramientas
              </Link>
              <Link 
                href="#contact" 
                className="text-2xl lg:text-base text-gray-800 hover:text-green-600 transition-colors duration-200"
                onClick={closeMenu}
              >
                Contáctenos
              </Link>
              
              <div className="lg:hidden">
                <Button 
                  variant="default" 
                  className="bg-green-600 hover:bg-green-700 text-white px-8 py-2"
                  onClick={closeMenu}
                >
                  Iniciar Sesión
                </Button>
              </div>
            </nav>
            <div className="hidden lg:block">
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="ghost" className="flex items-center space-x-2">
                    <User className="h-5 w-5" />
                    <span>Iniciar Sesión</span>
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent className="w-64 p-4 bg-white">
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
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}