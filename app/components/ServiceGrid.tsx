import { Package, Calculator, ShieldCheck, DollarSign } from "lucide-react";

export const ServiceGrid = () => {
  return (
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
  );
};

export default ServiceGrid; 