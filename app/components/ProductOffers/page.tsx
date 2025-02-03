import { Package2, Tag, ShoppingCart } from "lucide-react";

const ProductOffers = () => {
  const offers = [
    {
      title: "Envío Gratis",
      description: "En tu primera compra internacional",
      price: "₡0",
      icon: <Package2 className="w-8 h-8 text-white" />
    },
    {
      title: "50% Descuento",
      description: "En tarifas de casillero",
      price: "-50%",
      icon: <Tag className="w-8 h-8 text-white" />
    },
    {
      title: "Compra Asistida",
      description: "Te ayudamos con tus compras",
      price: "₡5000",
      icon: <ShoppingCart className="w-8 h-8 text-white" />
    }
  ];

  return (
    <section className="py-12 bg-green-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-green-600 text-center mb-12">
          Ofertas Especiales
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-green-500 to-green-600 rounded-xl shadow-lg p-6 transform transition duration-500 hover:scale-105"
            >
              <div className="flex flex-col items-center text-center">
                <div className="bg-green-400 bg-opacity-30 rounded-full p-3 mb-4">
                  {offer.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">
                  {offer.title}
                </h3>
                <p className="text-green-50 mb-4">{offer.description}</p>
                <span className="text-2xl font-bold text-white">
                  {offer.price}
                </span>
                <button className="mt-4 bg-white text-green-600 px-6 py-2 rounded-full hover:bg-green-50 transition duration-300">
                  Aprovechar Oferta
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductOffers;