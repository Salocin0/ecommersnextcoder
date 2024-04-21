import React from "react";
import Image from "next/image";

const TarjetaProductoCarrito = ({
  producto,
  cantidad,
  subtotal,
  onSumarCantidad,
  onRestarCantidad,
  onEliminarItem,
}) => {
  return (
    <div
      className="bg-white p-4 rounded shadow-md w-full flex gap-2 border border-gray-300"
    >
      <Image
        src={producto.image}
        alt={producto.title}
        className="object-cover justify-center pb-2"
        width={100}
        height={100}
        style={{ width: "auto", height: "auto" }}
      />
      <div className="flex flex-col justify-center flex-grow w-full">
        <h2 className="text-lg font-semibold text-center">{producto.title}</h2>
      </div>

      <div className="flex flex-col justify-center flex-grow w-1/4">
        <p className="text-gray-800 font-bold">P/U: ${producto.price?.toFixed(2)}</p>
      </div>
      <div className="flex flex-col justify-center flex-grow w-1/4">
        <p className="text-gray-800 font-bold">Total: ${subtotal?.toFixed(2)}</p>
      </div>
      <div className="flex justify-between items-center w-1/6">
        <div className="flex">
          <button
            onClick={onRestarCantidad}
            className="border border-gray-300 rounded-l w-5"
          >
            -
          </button>
          <p className="text-gray-800 font-bold border-t border-b border-gray-300 px-2 py-1">{cantidad}</p>
          <button
            onClick={onSumarCantidad}
            className="border border-gray-300 rounded-r w-5"
          >
            +
          </button>
        </div>
      </div>
      <div className="flex justify-between pe-8 items-center">
        <button
          onClick={onEliminarItem}
          className="bg-red-600 text-white rounded p-2"
        >
          Eliminar
        </button>
      </div>
    </div>
  );
};

export default TarjetaProductoCarrito;
