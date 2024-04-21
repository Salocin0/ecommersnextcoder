"use client";
import React, { createContext, useEffect, useState } from "react";
import { checkUserIdAndUpdateCart } from "./GetSavedCart";
import { v4 as uuidv4 } from "uuid";
import { db } from "../firebase/config";
import { getDoc,setDoc,doc } from "firebase/firestore";

const UseContext = createContext();

const MyProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalItems, setTotalItems] = useState(0);
  const [cantidad, setCantidad] = useState(1);

  useEffect(() => {
    const idusuario=localStorage.getItem("userId");
    if (idusuario) {
      const docRef = doc(db, "Carritos", idusuario);
        const carritoPromise = getDoc(docRef);
        carritoPromise.then((snapshot) => {
          const carritoData = snapshot.data();
          if (carritoData) {
            setCart(carritoData.productos);
            setTotalItems(calculateTotalItems(carritoData.productos));
          }
        })
    } else {
      console.log("No se encontró ningún userID en el localStorage");
      const newUserId = uuidv4();
      localStorage.setItem("userId", newUserId);
    }
  }, []);

  const guardarCarrito = async (userID, carrito) => {
    const docRef = doc(db, "Carritos", userID);
    await setDoc(docRef, { productos: carrito })
  };

  const guardarPedidos = async (userID, carrito, datosUsuarios) => {
    const docRef = doc(db, "Pedidos", userID+Date.now());
    await setDoc(docRef, { productos: carrito,Comprador:datosUsuarios })
  };

  const addToCart = (product) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += cantidad;
    } else {
      updatedCart.push({ product, quantity: cantidad });
    }

    setCart(updatedCart);
    setTotalItems(calculateTotalItems(updatedCart));
    guardarCarrito(localStorage.getItem("userId"), updatedCart);
  };

  const removeFromCart = (product) => {
    const removedItem = cart.find((item) => item.product.id === product.id);
    const updatedCart = cart.filter((item) => item.product.id !== product.id);

    setCart(updatedCart);
    setTotalItems(calculateTotalItems(updatedCart));
    guardarCarrito(localStorage.getItem("userId"), updatedCart);
  };

  const addToCartQuantity = (product, quantity) => {
    const updatedCart = [...cart];
    const existingItem = updatedCart.find(
      (item) => item.product.id === product.id
    );

    if (existingItem) {
      existingItem.quantity += quantity;
      if (existingItem.quantity <= 0) {
        removeFromCart(product);
        guardarCarrito(localStorage.getItem("userId"), cart);
      } else {
        setCart(updatedCart);
        setTotalItems(calculateTotalItems(updatedCart));
        guardarCarrito(localStorage.getItem("userId"), updatedCart);
      }
    } else {
      updatedCart.push({ product, quantity: quantity });
      setCart(updatedCart);
      setTotalItems(calculateTotalItems(updatedCart));
      guardarCarrito(localStorage.getItem("userId"), updatedCart);
    }
  };

  const sumarCantidad = () => {
    setCantidad(cantidad + 1);
  };

  const restarCantidad = () => {
    if (cantidad > 1) {
      setCantidad(cantidad - 1);
    }
  };

  const calcularTotalCarrito = () => {
    let total = 0;
    cart.forEach((item) => {
      total += item.product.price * item.quantity;
    });
    return total;
  };

  const calculateTotalItems = (cart) => {
    let total = 0;
    if (Array.isArray(cart)) {
      for (let i = 0; i < cart.length; i++) {
        if (cart[i].quantity && !isNaN(cart[i].quantity)) {
          total += parseInt(cart[i].quantity);
        }
      }
    }
    return total;
  };
  
  const vaciarCarrito = () => {
    setCart([]);
    setTotalItems(0);
    guardarCarrito(localStorage.getItem("userId"), []);
  };

  const comprarCarrito = async (inputs) => {
    await guardarPedidos(localStorage.getItem("userId"), cart, inputs)
    vaciarCarrito();
    
  };

  return (
    <UseContext.Provider
      value={{
        cart,
        addToCart,
        totalItems,
        removeFromCart,
        cantidad,
        sumarCantidad,
        restarCantidad,
        addToCartQuantity,
        calcularTotalCarrito,
        comprarCarrito,
      }}
    >
      {children}
    </UseContext.Provider>
  );
};

export { UseContext, MyProvider };
