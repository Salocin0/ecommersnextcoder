import React, { useContext } from 'react';
import Image from 'next/image';
import BotoneraProducto from "./../../Componentes/BotoneraProducto";
import BtnCarrito from '@/app/Componentes/BtnCarrito';
import { UseContext } from '@/app/Componentes/UseContext';
import { getProductById } from '@/app/Componentes/GetProducts';

const DetalleProductoPage = async ({ params }) => {
  const id = Number(params.uuid);
  const producto = await getProductById(id);

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { title, image, price, description } = producto;

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-semibold mb-10 mt-10">{title}</h1>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
        <div className="w-full md:w-1/2">
          <Image src={image} alt={title} width={300} height={200} style={{ width: "auto", height: "auto" }}/>
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <p>{description}</p>
            <p className="text-2xl font-bold mt-2">Precio ${price}</p>
          </div>
          <BotoneraProducto/>
          <BtnCarrito/>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductoPage;
