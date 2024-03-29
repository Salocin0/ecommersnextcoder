import React from 'react';

const BotoneraProducto = ({ cantidad, restarCantidad, sumarCantidad }) => {
  return (
    <div className="flex items-center justify-center mb-4">
      <button
        onClick={restarCantidad}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-l focus:outline-none"
      >
        -
      </button>
      <span className="bg-gray-100 px-4 py-2 font-bold">{cantidad}</span>
      <button
        onClick={sumarCantidad}
        className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded-r focus:outline-none"
      >
        +
      </button>
    </div>
  );
};

export default BotoneraProducto;
