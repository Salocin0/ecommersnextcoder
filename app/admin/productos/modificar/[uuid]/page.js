"use client"
import React, { useEffect, useState } from "react";
import { getProductById, updateProduct } from "@/app/Componentes/GetProducts";
import { useRouter } from "next/navigation";
import { UseContext } from "@/app/Componentes/UseContext";
import { useContext } from "react";

function Page({ params }) {
  const uuid = Number(params.uuid);
  const router = useRouter();
  const [producto, setProducto] = useState({
    title: "",
    description: "",
    price: "",
    stock: "",
    image: "",
    category: "",
  });
  const {getAccessToken} = useContext(UseContext)

  useEffect(() => {
    const token = getAccessToken()
    if (token == "null"){
        router.push("/admin");
    }

    const fetchData = async () => {
      const productoToUpdate = await getProductById(uuid);
      if (productoToUpdate) {
        setProducto(productoToUpdate);
      }
    };

    fetchData();
  }, [getAccessToken,router,uuid]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProducto((prevProducto) => ({
      ...prevProducto,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await updateProduct(uuid,producto);
    router.push("/admin/productos");
  };

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Modificar Producto</h1>
      <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
        <div className="mb-4">
          <label htmlFor="title" className="block mb-2">Título:</label>
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
          <label htmlFor="description" className="block mb-2">Descripción:</label>
          <textarea
            id="description"
            name="description"
            ype="text"
            value={producto.description}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="price" className="block mb-2">Precio:</label>
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
          <label htmlFor="stock" className="block mb-2">Stock:</label>
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
          <label htmlFor="imageLink" className="block mb-2">Link de la imagen:</label>
          <input
            type="text"
            id="imageLink"
            name="imageLink"
            value={producto.image}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="category" className="block mb-2">Categoría:</label>
          <select
            id="category"
            name="category"
            value={producto.category}
            onChange={handleChange}
            className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
          >
            <option value="menclothing">Ropa Hombre</option>
            <option value="womenclothing">Ropa Mujer</option>
            <option value="electronics">Electronica</option>
            <option value="jewelery">Joyeria</option>
          </select>
        </div>
        <button type="submit" className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Guardar</button>
      </form>
    </div>
  );
}

export default Page;
