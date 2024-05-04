"use client"
import React, { useState, useEffect } from "react";
import { getProducts } from "../../Componentes/GetProducts";
import Image from "next/image";
import Accionesbtn from "@/app/Componentes/Accionesbtn";
import BtnNuevoProductoYCerrarSesion from "@/app/Componentes/btnNuevoProductoYCerrarSesion";
import Loading from "@/app/Loading";
import { UseContext } from "@/app/Componentes/UseContext";
import { useContext } from "react";
import { useRouter } from "next/navigation";

const Page = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [productos, setProductos] = useState([]);
  const [listUpdated, setListUpdated] = useState(0);
  const {getAccessToken} = useContext(UseContext)
  const router = useRouter();

  useEffect(() => {
    const token = getAccessToken()
    if (token == "null"){
        router.push("/admin");
    }

    const fetchData = async () => {
      const fetchedProducts = await getProducts();
      setProductos(fetchedProducts);
      setIsLoading(false); 
    };

    fetchData();
  }, [listUpdated,getAccessToken,router]);

  const handleListUpdated = () => {
    setListUpdated(listUpdated+1)
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-2">Lista de Productos</h1>
      <BtnNuevoProductoYCerrarSesion />
      {isLoading ? (
        <Loading />
      ) : (
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="border border-gray-200 px-4 py-2">Título</th>
              <th className="border border-gray-200 px-4 py-2">Descripción</th>
              <th className="border border-gray-200 px-4 py-2">Imagen</th>
              <th className="border border-gray-200 px-4 py-2">Precio</th>
              <th className="border border-gray-200 px-4 py-2">Stock</th>
              <th className="border border-gray-200 px-4 py-2">Categoría</th>
              <th className="border border-gray-200 px-4 py-2">Acciones</th>
            </tr>
          </thead>
          <tbody>
            {productos.map((producto) => (
              <tr key={producto.id}>
                <td className="border border-gray-200 px-4 py-2">
                  {producto.title}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {producto.description}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  <Image
                    src={producto.image}
                    alt={"imagen de producto"}
                    height={100}
                    width={100}
                  />
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {producto.price}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {producto.stock}
                </td>
                <td className="border border-gray-200 px-4 py-2">
                  {producto.category}
                </td>
                <td className="border border-gray-200 px-4 py-2 flex-row">
                  <Accionesbtn productid={producto.id} foo={handleListUpdated}/>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default Page;
