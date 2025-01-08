import React from 'react';
import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      image: "https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?auto=format&fit=crop&q=80&w=800",
      date: "Mar 15, 2024",
      title: "Nuevas rutas de envío disponibles",
      excerpt: "Ampliamos nuestras rutas para llegar a más destinos..."
    },
    {
      image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
      date: "Mar 12, 2024",
      title: "Guía de compras internacionales",
      excerpt: "Aprende a comprar de forma segura en tiendas extranjeras..."
    },
    {
      image: "https://images.unsplash.com/photo-1565732828362-909e6d53f916?auto=format&fit=crop&q=80&w=800",
      date: "Mar 10, 2024",
      title: "Nuevos servicios premium",
      excerpt: "Conoce nuestros nuevos servicios exclusivos..."
    }
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-12">
          Últimas Noticias
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {news.map((item, index) => (
            <article
              key={index}
              className="bg-white rounded-xl overflow-hidden shadow-lg transition duration-300 hover:shadow-xl border border-green-100"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center text-green-600 mb-2">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span className="text-sm">{item.date}</span>
                </div>
                <h3 className="text-xl font-semibold text-green-700 mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 mb-4">{item.excerpt}</p>
                <button className="flex items-center text-green-600 hover:text-green-700 transition duration-300">
                  Leer más
                  <ArrowRight className="w-4 h-4 ml-2" />
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default News;