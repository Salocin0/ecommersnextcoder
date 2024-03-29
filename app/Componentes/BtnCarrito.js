const BtnCarrito = ({ onClick }) => {
    return (
      <button
        onClick={onClick}
        className="bg-gray-900 hover:bg-gray-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full mt-3"
      >
        Agregar al carrito
      </button>
    );
  };
  
  export default BtnCarrito;
  