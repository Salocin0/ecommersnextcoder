"use client";
import React, { useEffect, useState } from "react";
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import { app } from "../firebase/config";
import { useRouter } from "next/navigation";
import { UseContext } from "../Componentes/UseContext";
import { useContext } from "react";

function Page() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const auth = getAuth(app);
  const router = useRouter();
  const { setAccessToken,getAccessToken,deleteAccessToken } = useContext(UseContext);

  useEffect(() => {
    const token = getAccessToken()
    console.log(token)
    if(token!=="null"){
      if(token ==undefined){
        deleteAccessToken()
      }else{
        router.push("/admin/productos");
      }
    }
  }, [getAccessToken,router,deleteAccessToken]);


  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log(user)
      if (user) {
        setAccessToken(user.accessToken)
        router.push("/admin/productos");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <div className="flex items-center justify-center h-full">
      <div className="bg-white p-4 rounded shadow-md w-full sm:w-96 mx-auto my-20 border border-gray-300">
        <h1 className="text-2xl font-bold mb-4">
          Inicio de sesión de administrador
        </h1>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-2">
              Email:
            </label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="password" className="block mb-2">
              Contraseña:
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
              className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          >
            Iniciar sesión
          </button>
        </form>
      </div>
    </div>
  );
}

export default Page;
