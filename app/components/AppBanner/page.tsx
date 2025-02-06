import { Smartphone, Download, Star } from "lucide-react";
import Image from 'next/image';

const AppBanner = () => {
  return (
    <section className="bg-gradient-to-br from-green-500 to-green-600 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="text-white">
            <h2 className="text-3xl font-bold mb-6">
              Descarga nuestra app y lleva Rapibox contigo
            </h2>
            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="bg-green-400 bg-opacity-30 rounded-full p-2 mr-4">
                  <Star className="w-6 h-6" />
                </div>
                <p>Rastrea tus paquetes en tiempo real</p>
              </div>
              <div className="flex items-center">
                <div className="bg-green-400 bg-opacity-30 rounded-full p-2 mr-4">
                  <Smartphone className="w-6 h-6" />
                </div>
                <p>Notificaciones instantáneas sobre tus envíos</p>
              </div>
              <div className="flex items-center">
                <div className="bg-green-400 bg-opacity-30 rounded-full p-2 mr-4">
                  <Download className="w-6 h-6" />
                </div>
                <p>Gestiona tus compras desde cualquier lugar</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg flex items-center hover:bg-green-50 transition duration-300">
                <img
                  src="https://i.postimg.cc/jSkTc62Q/Hamzasaleem-Stock-Style-3-App-store-512.png"
                  alt="App Store"
                  className="w-6 h-6 mr-2"
                />
                App Store
              </button>
              <button className="bg-white text-green-600 px-8 py-3 rounded-lg flex items-center hover:bg-green-50 transition duration-300">
                <img
                  src="https://i.postimg.cc/bvDhBG2X/Dtafalonso-Android-L-Play-Store-512.png"
                  alt="Play Store"
                  className="w-6 h-6 mr-2"
                />
                Play Store
              </button>
            </div>
          </div>
          <div className="relative">
            <Image
              src="https://i.postimg.cc/0NF8kGq2/photo-1512941937669-90a1b58e7e9c.avif"
              alt="Rapibox Mobile App"
              className="rounded-lg shadow-2xl mx-auto"
              layout="fill"
              objectFit="cover"
            />
            <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex items-center">
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
                <Star className="w-5 h-5 text-green-500" />
              </div>
              <p className="text-sm text-gray-600 mt-1">4.9 en tiendas de apps</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AppBanner;