import React from 'react';
import Link from 'next/link';

const CarritoPage = () => {
  return (
    <div className="flex items-center justify-center h-full">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">No hay productos en el carrito</h1>
        <Link href="/">
          <p className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Ir a inicio
          </p>
        </Link>
      </div>
    </div>
  );
};

export default CarritoPage;
