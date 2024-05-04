import React from "react";
import ProductCard from "./ProductCard";
import { getProducts } from "./GetProducts";

const ProductList = async ({ categoria }) => {
  const products = await getProducts();
  let filteredProducts = products;

  if (categoria) {
    filteredProducts = products.filter(
      (product) => product.category === categoria && product.stock > 0
    );
  } else {
    filteredProducts = products.filter((product) => product.stock > 0);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 px-4 py-8">
      {filteredProducts.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;
