import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
  setDoc
} from "firebase/firestore";
import { db } from '../firebase/config';

const checkUserIdAndUpdateCart = async (cart, setCart, setTotalItems, userId) => {
  if (userId) {
    try {
      const cartRef = doc(db, 'Carrito', userId); 
      const cartDoc = await getDoc(cartRef);

      if (cartDoc.exists()) {
        const cartData = cartDoc.data().cart;
        setCart(cartData);
        setTotalItems(calculateTotalItems(cartData));
      } else {
        console.log("No se encontró el carrito en Firestore para el usuario actual.");
      }
    } catch (error) {
      console.error("Error al obtener el carrito desde Firestore:", error);
    }
  }
};

export { checkUserIdAndUpdateCart };
