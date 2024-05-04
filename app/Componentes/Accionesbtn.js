"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/navigation";
import { deleteProduct } from "@/app/Componentes/GetProducts";

export default function Accionesbtn({ productid, foo }) {
  const router = useRouter();
  const [showModal, setShowModal] = useState(false);

  const handleEliminarProducto = () => {
    setShowModal(true);
  };

  const handleCancelarEliminacion = () => {
    setShowModal(false);
  };

  const handleConfirmarEliminacion = () => {
    deleteProduct(productid);
    foo();
    setShowModal(false);
  };

  const handleModificarProducto = () => {
    router.push(`/admin/productos/modificar/${productid}`);
  };

  return (
    <div className="flex">
      <button
        className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
        onClick={handleEliminarProducto}
      >
        <FontAwesomeIcon icon={faTrashCan} />
      </button>
      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
        onClick={handleModificarProducto}
      >
        <FontAwesomeIcon icon={faPenToSquare} />
      </button>

      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-4 rounded shadow-md">
            <p className="mb-2">¿Estás seguro de eliminar este producto?</p>
            <div className="flex justify-between">
              <button
                className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded mr-2"
                onClick={handleConfirmarEliminacion}
              >
                Confirmar
              </button>
              <button
                className="bg-gray-500 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded"
                onClick={handleCancelarEliminacion}
              >
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
