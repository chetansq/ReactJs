import React from "react";

const products = [
    { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
    { id: 2, name: "Product B", price: "$30", image: "https://via.placeholder.com/150" },
];

const ProductPage = () => {
    return (
        <div className="p-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
                    <button className="mt-3 ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        Add to Wishlist
                    </button>
                </div>
            ))}
        </div>
    );
};

export default ProductPage;
