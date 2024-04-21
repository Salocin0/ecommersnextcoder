"use client"
import { useContext } from "react";
import { UseContext } from "./UseContext";

const BtnCarrito = ({producto}) => {
  const { addToCartQuantity} = useContext(UseContext);
    return (
      <button
        onClick={()=>{addToCartQuantity(producto,1)}}
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
      >
        Agregar al carrito
      </button>
    );
  };
  
  export default BtnCarrito;
  