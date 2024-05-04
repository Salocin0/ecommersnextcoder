"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { UseContext } from "./UseContext";
import { useContext } from "react";

const BtnNuevoProductoYCerrarSesion = () => {
  const router = useRouter();
  const { deleteAccessToken } = useContext(UseContext);
  const handleCreateProduct = () => {
    router.push("/admin/productos/crear");
  };
  const handleCerrarSesion = () => {
    deleteAccessToken()
    router.push("/admin");
  };

  return (
    <div className="my-4 flex">
      <button
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleCreateProduct}
      >
        Agregar Nuevo Producto
      </button>
      <button
        className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleCerrarSesion}
      >
        Cerrar Sesión
      </button>
    </div>
  );
};

export default BtnNuevoProductoYCerrarSesion;
