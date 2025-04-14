const ProductCards = ({ data }) => {
    const { title, thumbnail } = data;
  
    return (
      <div className="flex items-center justify-center p-4">
        <div className="bg-white rounded-2xl shadow-md overflow-hidden w-80 hover:shadow-xl transition-shadow duration-300">
          <img
            src={thumbnail}
            alt={title}
            className="w-full h-48 object-cover"
          />
          <div className="p-4">
            <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
            <button className="mt-2 w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
              Go Again
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  export default ProductCards;
  