import ProductList from "./Componentes/ProductList";

export default function Home() {
  return (
      <main className="flex-grow">
        <div className="container mx-auto">
          <ProductList />
        </div>
      </main>
  );
}
