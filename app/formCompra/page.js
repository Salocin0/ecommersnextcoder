"use client"
import React, { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { UseContext } from "../Componentes/UseContext";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const FormCompra = () => {
  const { comprarCarrito } = useContext(UseContext);
  const router = useRouter();

  const [inputs, setInputs] = useState({
    nombre: "",
    email: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  const [errors, setErrors] = useState({
    nombre: "",
    email: "",
    direccion: "",
    ciudad: "",
    codigoPostal: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    const errorsCopy = { ...errors };
    if (inputs.nombre.trim().length < 3) {
      errorsCopy.nombre = "El nombre debe tener al menos 3 caracteres";
    } else {
      errorsCopy.nombre = "";
    }
    const emailPattern = /[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
    if (!emailPattern.test(inputs.email.trim())) {
      errorsCopy.email = "Ingresa un correo electrónico válido";
    } else {
      errorsCopy.email = "";
    }
    const requiredLength = 4;
    if (inputs.direccion.trim().length < requiredLength) {
      errorsCopy.direccion = "La dirección debe tener al menos 4 caracteres";
    } else {
      errorsCopy.direccion = "";
    }
    if (inputs.ciudad.trim().length < requiredLength) {
      errorsCopy.ciudad = "La ciudad debe tener al menos 4 caracteres";
    } else {
      errorsCopy.ciudad = "";
    }
    if (inputs.codigoPostal.trim().length < requiredLength) {
      errorsCopy.codigoPostal = "El código postal debe tener al menos 4 caracteres";
    } else {
      errorsCopy.codigoPostal = "";
    }
    setErrors(errorsCopy);
    const hasErrors = Object.values(errorsCopy).some((error) => error !== "");
    if (hasErrors) {
      Object.values(errorsCopy).forEach((error) => {
        if (error !== "") {
          toast.error(error, {
            position: "bottom-right",theme: "dark"});
        }
      });
    } else {
      console.log("Inputs válidos:", inputs);
      comprarCarrito(inputs);
      toast.success("Compra realizada con éxito", {position: "bottom-right",theme: "dark"})
      setTimeout(() => {
        router.push("/"); 
      }, 1500);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputs({ ...inputs, [name]: value });
  };

  return (
    <div className="flex flex-col items-center justify-center h-full mt-5">
      <h1 className="text-2xl font-semibold mb-4">Formulario de Compra</h1>
      <form className="w-full max-w-lg" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="nombre" className="block text-sm font-medium text-gray-700">
            Nombre
          </label>
          <input
            type="text"
            id="nombre"
            name="nombre"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              errors.nombre && "border-red-500"
            }`}
            value={inputs.nombre}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Correo Electrónico
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              errors.email && "border-red-500"
            }`}
            value={inputs.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="direccion" className="block text-sm font-medium text-gray-700">
            Dirección
          </label>
          <input
            type="text"
            id="direccion"
            name="direccion"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              errors.direccion && "border-red-500"
            }`}
            value={inputs.direccion}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="ciudad" className="block text-sm font-medium text-gray-700">
            Ciudad
          </label>
          <input
            type="text"
            id="ciudad"
            name="ciudad"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              errors.ciudad && "border-red-500"
            }`}
            value={inputs.ciudad}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label htmlFor="codigoPostal" className="block text-sm font-medium text-gray-700">
            Código Postal
          </label>
          <input
            type="text"
            id="codigoPostal"
            name="codigoPostal"
            className={`mt-1 block w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none sm:text-sm ${
              errors.codigoPostal && "border-red-500"
            }`}
            value={inputs.codigoPostal}
            onChange={handleChange}
          />
        </div>
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white py-2 px-4 rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-100"
        >
          Comprar
        </button>
      </form>
      <ToastContainer />
    </div>
  );
};

export default FormCompra;
