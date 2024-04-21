"use client";
import React from "react";

const BtnForm = ({ nombre, email, direccion, ciudad, codigoPostal, guardarInputs }) => {
  const handleClick = () => {
    const inputs = { nombre, email, direccion, ciudad, codigoPostal };
    let inputsValidos = true;

    for (const key in inputs) {
      if (!inputs[key].trim()) {
        inputsValidos = false;
        break;
      }
    }

    if (inputsValidos) {
      guardarInputs(inputs);
    } else {
      alert("Por favor completa todos los campos del formulario.");
    }
  };

  return (
    <button
      onClick={handleClick}
      className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
    >
      Comprar
    </button>
  );
};

export default BtnForm;
