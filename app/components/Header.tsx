"use client"
import Link from "next/link";
import { X, User } from "lucide-react";
import { Button } from "@/app/components/button";
import { 
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent 
} from "@/app/components/dropdown-menu";
import { Input } from "@/app/components/input";

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

  return (
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
                <Button variant="ghost" className="flex items-center space-x-2 ">
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
          </nav>
        </div>
      </div>
    </header>
  );
} 