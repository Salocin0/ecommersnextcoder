import React from "react";
import productsData from "../../data/data.json";
import ProductCard from "./ProductCard";

const ProductList = ({ categoria }) => {
  let filteredProducts = productsData;

  if (categoria) {
    filteredProducts = productsData.filter(
      (product) => product.category === categoria
    );
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
