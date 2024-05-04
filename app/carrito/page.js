"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { UseContext } from "@/app/Componentes/UseContext";
import TarjetaProductoCarrito from "../Componentes/TarjetaProductoCarrito";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faRightToBracket } from "@fortawesome/free-solid-svg-icons";

const CarritoPage = () => {
  const { cart, removeFromCart, calcularTotalCarrito, addToCartQuantity } =
    useContext(UseContext);

  if (cart.length === 0) {
    return (
      <div className="flex items-center justify-center h-full">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">
            No hay productos en el carrito
          </h1>
          <Link href="/">
            <p className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded">
              Ir a inicio
            </p>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="flex flex-col items-center justify-center h-full mt-10 w-4/5 mx-auto">
      <h1 className="text-4xl font-bold mb-4">Productos en el carrito</h1>
      <div className="grid gap-2 w-full">
        {cart.map((item) => (
            <TarjetaProductoCarrito
              key={item.product.id}
              producto={item.product}
              cantidad={item.quantity}
              subtotal={item?.quantity * item.product?.price}
              onSumarCantidad={() => addToCartQuantity(item.product, 1)}
              onRestarCantidad={() => addToCartQuantity(item.product, -1)}
              onEliminarItem={() => removeFromCart(item.product)}
            />
        ))}
      </div>
      <h1 className="text-3xl font-bold my-4 ">
        Total del carrito: ${calcularTotalCarrito()?.toFixed(2)}
      </h1>
      <Link
        href={`/formCompra`}
        className="mb-4 w-1/4 bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
      >
        <p className="text-center">Finalizar compra <FontAwesomeIcon icon={faRightToBracket} style={{paddingLeft:10}}/></p>
      </Link>
    </div>
  );
};

export default CarritoPage;
