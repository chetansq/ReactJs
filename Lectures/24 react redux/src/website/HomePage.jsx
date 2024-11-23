import React from "react";
import Slider from "react-slick";

const products = [
  { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
  { id: 2, name: "Product B", price: "$30", image: "https://via.placeholder.com/150" },
  { id: 3, name: "Product C", price: "$40", image: "https://via.placeholder.com/150" },
  { id: 4, name: "Product D", price: "$50", image: "https://via.placeholder.com/150" },
  { id: 5, name: "Product E", price: "$60", image: "https://via.placeholder.com/150" },
  { id: 6, name: "Product F", price: "$70", image: "https://via.placeholder.com/150" },
  { id: 7, name: "Product G", price: "$80", image: "https://via.placeholder.com/150" },
  { id: 8, name: "Product H", price: "$90", image: "https://via.placeholder.com/150" },
  { id: 9, name: "Product I", price: "$100", image: "https://via.placeholder.com/150" },
  { id: 10, name: "Product J", price: "$110", image: "https://via.placeholder.com/150" },
];

const HomePage = () => {
  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-8">Welcome to Our Store</h1>
      
      {/* Slider Section */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold mb-4">Featured Products</h2>
        <Slider {...sliderSettings}>
          {products.slice(0, 3).map((product) => (
            <div key={product.id} className="p-4">
              <div className="border rounded-lg p-4 shadow hover:shadow-lg transition">
                <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
                <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* Product Grid */}
      <h2 className="text-xl font-semibold mb-4">All Products</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
          >
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded" />
            <h2 className="text-lg font-semibold mt-2">{product.name}</h2>
            <p className="text-gray-600">{product.price}</p>
            <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600">
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Footer */}
      <footer className="mt-12 bg-gray-800 text-white p-6">
        <div className="text-center">
          <p>&copy; 2024 Your Store. All rights reserved.</p>
          <p>Follow us on: 
            <a href="#" className="text-blue-400 ml-2">Facebook</a>, 
            <a href="#" className="text-blue-400 ml-2">Twitter</a>, 
            <a href="#" className="text-blue-400 ml-2">Instagram</a>
          </p>
        </div>
      </footer>
    </div>
  );
};

export default HomePage;
