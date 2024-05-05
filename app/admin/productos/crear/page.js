"use client";
import React, { useState,useEffect } from "react";
import { addProduct } from "@/app/Componentes/GetProducts";
import { useRouter } from "next/navigation";
import { UseContext } from "@/app/Componentes/UseContext";
import { useContext } from "react";

function Page() {
  const router = useRouter();
  const [producto, setProducto] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
    id: Math.floor(Math.random() * 1000000),
  });
  const {getAccessToken} = useContext(UseContext)

  useEffect(() => {
    const token = getAccessToken()
    if(token=="null" || !token){
      router.push("/admin");
  }

  }, [getAccessToken,router]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await addProduct(producto);
      router.push("/admin/productos");
    } catch (error) {
      console.error("Error al agregar el producto:", error);
    }
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Crear Nuevo Producto</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">
            Título:
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={producto.title}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="description" className="block mb-2">
            Descripción:
          </label>
          <textarea
            id="description"
            name="description"
            value={producto.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">
            Precio:
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={producto.price}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="stock" className="block mb-2">
            Stock:
          </label>
          <input
            type="number"
            id="stock"
            name="stock"
            value={producto.stock}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2">
            Link de la imagen:
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={producto.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">
            Categoría:
          </label>
          <select
            id="category"
            name="category"
            value={producto.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="">Selecionar...</option>
            <option value="menclothing">Ropa Hombre</option>
            <option value="womenclothing">Ropa Mujer</option>
            <option value="electronics">Electrónica</option>
            <option value="jewelery">Joyería</option>
          </select>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Guardar
        </button>
      </form>
    </div>
  );
}

export default Page;
