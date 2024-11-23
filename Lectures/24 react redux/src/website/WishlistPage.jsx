import React from "react";

const WishlistPage = () => {
    const wishlistItems = [
        { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150" },
    ];

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Wishlist</h1>
            {wishlistItems.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {wishlistItems.map((item) => (
                        <div
                            key={item.id}
                            className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                        >
                            <img src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
                            <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                            <p className="text-gray-600">{item.price}</p>
                            <button className="mt-3 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                Remove from Wishlist
                            </button>
                        </div>
                    ))}
                </div>
            ) : (
                <p>Your wishlist is empty!</p>
            )}
        </div>
    );
};

export default WishlistPage;
