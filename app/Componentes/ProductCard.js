"use client";
import Image from "next/image";
import BtnCarrito from "./BtnCarrito";
import BtnDetalle from "./BtnDetalle";
import React, { useContext } from "react";
import { UseContext } from "./UseContext";

const ProductCard = ({ product }) => {
  const { addToCartQuantity } = useContext(UseContext);
  const handleAddToCart = () => {
    addToCartQuantity(product, 1);
  };
  
  if (!product || !product.image) {
    return null;
  }

  const { title, description, price } = product;

  return (
    <article className="rounded-lg shadow-lg p-4 flex items-center gap-4 border border-gray-300">
      <div className="flex justify-center">
        <Image
          src={product.image}
          alt="Imagen de producto"
          width={100}
          height={100}
          style={{ width: "auto", height: "auto" }}
          priority
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-3">{description}</p>
        <p className="text-gray-800 font-bold text-lg">Precio: ${price}</p>
        <BtnCarrito producto={product}/>
        <BtnDetalle product={product} />
      </div>
    </article>
  );
};

export default ProductCard;
