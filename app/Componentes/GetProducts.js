import {
  getFirestore,
  collection,
  doc,
  getDocs,
  updateDoc,
  query,
  where,
  addDoc,
  deleteDoc
} from "firebase/firestore";
import { app } from "./../firebase/config";

const getProducts = async () => {
  const db = getFirestore(app);
  const products = [];

  try {
    const querySnapshot = await getDocs(collection(db, "Productos"));
    querySnapshot.forEach((doc) => {
      products.push(doc.data());
    });
    return products;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};

const getProductById = async (productId) => {
  try {
    const allProducts = await getProducts();

    const product = allProducts.find((p) => p.id === productId);

    if (product) {
      return product;
    } else {
      console.error("Product not found");
      return null;
    }
  } catch (error) {
    console.error("Error fetching product:", error);
    return null;
  }
};

const updateProduct = async (productId, updatedData) => {
  const db = getFirestore(app);
  console.log("id del producto", productId);
  console.log("datos", updatedData);

  try {
    const q = query(collection(db, "Productos"), where("id", "==", productId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.error("No se encontró el producto con el ID:", productId);
      return;
    }

    const productRef = doc(db, "Productos", querySnapshot.docs[0].id);
    
    await updateDoc(productRef, updatedData);
  } catch (error) {
    console.error("Error actualizando el producto:", error);
  }
};

const addProduct = async (newProduct) => {
  const db = getFirestore(app);

  try {
    const docRef = await addDoc(collection(db, "Productos"), newProduct);
    console.log("Producto agregado con ID:", docRef.id);
  } catch (error) {
    console.error("Error al agregar el producto:", error);
  }
};

const deleteProduct = async (productId) => {
  const db = getFirestore(app);

  try {
    const q = query(collection(db, "Productos"), where("id", "==", productId));
    const querySnapshot = await getDocs(q);
    if (querySnapshot.empty) {
      console.error("No se encontró el producto con el ID:", productId);
      return;
    }

    const productRef = doc(db, "Productos", querySnapshot.docs[0].id);
    
    await deleteDoc(productRef);
    console.log("Producto eliminado con ID:", productId);
  } catch (error) {
    console.error("Error eliminando el producto:", error);
  }
};

export { getProducts, getProductById, updateProduct, addProduct, deleteProduct };
