import { Calendar, ArrowRight } from 'lucide-react';

const News = () => {
  const news = [
    {
      image: "https://i.postimg.cc/xTn91TBH/gestion-rutas-1-12.avif",
      date: "Enero 15, 2025",
      title: "Nuevas rutas de envío disponibles",
      excerpt: "Ampliamos nuestras rutas para llegar a más destinos..."
    },
    {
      image: "https://i.postimg.cc/NF7YkW25/photo-1586528116311-ad8dd3c8310d.avif",
      date: "Enero 12, 2025",
      title: "Guía de compras internacionales",
      excerpt: "Aprende a comprar de forma segura en tiendas extranjeras..."
    },
    {
      image: "https://i.postimg.cc/4dcXmKJv/the-concept-of-providing-a-five-star-premium-service-businessman-showing-award-high-standards-are-gu.jpg",
      date: "Enero 10, 2025",
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