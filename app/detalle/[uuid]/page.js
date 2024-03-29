"use client"
import React, { useState } from 'react';
import Image from 'next/image';
import productsData from '../../../data/data.json';
import BotoneraProducto from "./../../Componentes/BotoneraProducto";
import BtnCarrito from '@/app/Componentes/BtnCarrito';

const DetalleProductoPage = ({ params }) => {
  const [cantidad, setCantidad] = useState(0);
  const id = Number(params.uuid);
  const producto = productsData.find((product) => product.id === id);
  console.log(producto,id)

  if (!producto) {
    return <div>Producto no encontrado</div>;
  }

  const { title, image, price, description } = producto;
  

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  return (
    <div className="flex flex-col items-center justify-center h-full">
      <h1 className="text-4xl font-semibold mb-10">{title}</h1>
      <div className="flex flex-col md:flex-row gap-4 w-full md:w-3/4">
        <div className="w-full md:w-1/2">
          <Image src={image} alt={title} width={300} height={200} />
        </div>
        <div className="w-full md:w-1/2">
          <div className="mb-4">
            <p>{description}</p>
            <p className="text-2xl font-bold mt-2">Precio ${price}</p>
          </div>
          <BotoneraProducto
            cantidad={cantidad}
            restarCantidad={restarCantidad}
            sumarCantidad={sumarCantidad}
          />
          <BtnCarrito/>
        </div>
      </div>
    </div>
  );
};

export default DetalleProductoPage;
