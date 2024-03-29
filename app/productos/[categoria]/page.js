import ProductList from "@/app/Componentes/ProductList";
const CategoriaPage = ({params}) => {
  return (
    <div className="container mx-auto">
      <ProductList categoria={params.categoria}/>
    </div>
  );
};

export default CategoriaPage;