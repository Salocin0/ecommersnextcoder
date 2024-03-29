"use client";
import Image from "next/image";
import BtnCarrito from "./BtnCarrito";
import BtnDetalle from "./BtnDetalle";

const ProductCard = ({ product }) => {
  const handleAddToCart = (event) => {
    event.stopPropagation();
    console.log("Agregando al carrito:", product);
  };

  if (!product || !product.image) {
    return null;
  }

  const { title, description, price } = product;

  return (
    <article
      className="rounded-lg shadow-lg p-4 flex items-center gap-4 border border-gray-300"
      style={{ height: "300px" }}
    >
      <div className="w-48 h-48 sm:h-auto flex-shrink-0 flex justify-center">
        <Image
          src={product.image}
          alt="Imagen de producto"
          width={150}
          height={100}
        />
      </div>
      <div className="flex-1">
        <h2 className="text-lg font-semibold mb-2 line-clamp-2">{title}</h2>
        <p className="text-gray-600 mb-2 line-clamp-3">{description}</p>
        <p className="text-gray-800 font-bold text-lg">Precio: ${price}</p>
        <BtnCarrito onClick={handleAddToCart} />
        <BtnDetalle product={product}/>
      </div>
    </article>
  );
};

export default ProductCard;
