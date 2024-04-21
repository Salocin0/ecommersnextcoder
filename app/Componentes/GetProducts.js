import {
  getFirestore,
  collection,
  doc,
  getDoc,
  getDocs,
} from "firebase/firestore";
import app from "./../firebase/config";

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
  

export { getProducts, getProductById };
