import React from "react";

const CartPage = () => {
    const cartItems = [
        { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150", quantity: 1 },
    ];

    const calculateTotal = () =>
        cartItems.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);

    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cartItems.length > 0 ? (
                <div>
                    <div className="space-y-4">
                        {cartItems.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>
                                <input
                                    type="number"
                                    min="1"
                                    value={item.quantity}
                                    className="border rounded w-12 text-center"
                                />
                                <button className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">
                        <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
                        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                            Proceed to Buy
                        </button>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty!</p>
            )}
        </div>
    );
};

export default CartPage;
