import React from 'react';
import Link from 'next/link';

const BtnDetalle = ({ product }) => {
  return (
    <Link href={`/detalle/${product.id}`}>
      <p className="bg-white border border-black text-black font-bold py-2 px-4 rounded inline-block mt-3 w-full text-center">
        Ver Más
      </p>
    </Link>
  );
};

export default BtnDetalle;
