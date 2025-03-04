"use client";

import { User, Menu } from 'lucide-react';
import { useEffect, useState } from 'react';
import Link from 'next/link';

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
  const [showLogin, setShowLogin] = useState(false);
  const closeMenu = () => {
    setMenuOpen(false);
    setShowLogin(false);
  };

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

  const menuItems = [
    { href: '#services', label: 'Servicios' },
    { href: '#benefits', label: 'Programas y beneficios' },
    { href: '#tools', label: 'Herramientas' },
    { href: '#contact', label: 'Contáctenos' },
    { href: '#calculator', label: 'Calculadora' },
    { href: '#notices', label: 'Preavisos' },
    { href: '#packages', label: 'Mis paquetes' },
    { href: '#exemption', label: 'Exoneración' },
    { href: '#payment', label: 'Pago en línea' }
  ];

  const LoginForm = () => (
    <div className="space-y-3">
      <input
        type="email"
        placeholder="Correo electrónico"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <input
        type="password"
        placeholder="Contraseña"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
      />
      <button className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700 transition-colors duration-200">
        Ingresar
      </button>
    </div>
  );

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-green-100">
      <div className="max-w-[2000px] mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center flex-shrink-0">
            <span className="text-xl font-bold text-green-600">Rapibox</span>
          </div>
          
          <button
            className="lg:hidden relative z-50 w-10 h-10 focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Menu className={`w-6 h-6 text-green-600 transition-transform duration-300 ${menuOpen ? 'transform rotate-90' : ''}`} />
          </button>

          <div className={`
            ${menuOpen ? 'fixed inset-0 bg-white/98 backdrop-blur-sm flex items-center justify-center' : 'hidden'}
            lg:relative lg:flex lg:items-center lg:bg-transparent
          `}>
            <nav className={`
              relative z-50 flex flex-col items-center space-y-8
              ${menuOpen ? 'p-8' : ''}
              bg-white/80 rounded-lg lg:bg-transparent lg:p-0
              lg:flex-row lg:items-center lg:space-y-0 lg:space-x-1 xl:space-x-2 2xl:space-x-4
            `}>
              {menuItems.map((item, index) => (
                <Link
                  key={index}
                  href={item.href}
                  className="text-[13px] xl:text-sm 2xl:text-base text-gray-700 hover:text-green-600 transition-colors duration-200 px-2"
                  onClick={closeMenu}
                >
                  {item.label}
                </Link>
              ))}
              <div className="lg:hidden flex flex-col items-center space-y-4">
                <button 
                  className="flex items-center space-x-2 bg-green-600 text-white px-6 py-2 rounded-lg hover:bg-green-700 transition-colors duration-200"
                  onClick={() => setShowLogin(!showLogin)}
                >
                  <User className="w-5 h-5" />
                  <span>Mi perfil</span>
                </button>
                {showLogin && (
                  <div className="w-64 bg-white rounded-lg shadow-lg border border-green-100 p-4">
                    <LoginForm />
                  </div>
                )}
              </div>
            </nav>

            <div className="hidden lg:block relative flex-shrink-0 ml-4">
              <button 
                className="flex items-center space-x-2 text-gray-700 hover:text-green-600 transition-colors duration-200 px-4 py-2"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                <User className="w-5 h-5" />
                <span>Mi perfil</span>
              </button>
              {menuOpen && (
                <div className="absolute right-0 mt-2 w-64 bg-white rounded-lg shadow-lg border border-green-100 p-4">
                  <LoginForm />
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}