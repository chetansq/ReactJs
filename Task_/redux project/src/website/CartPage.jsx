import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const CartPage = () => {

    const [quantity, setQuantity] = useState(1)

    const cartItems = [
        // { id: 1, name: "Product A", price: "$20", image: "https://via.placeholder.com/150", quantity: 2 },
        { id: 1, name: "Shoes VIR", price: "$20", image: "https://rukminim2.flixcart.com/image/850/1000/xif0q/shoe/c/n/h/10-126-grey-10-winprice-grey-original-imagrmcyhvmzxhvv.jpeg?q=90&crop=false", quantity },

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

                                {/* Quantity Section */}
                                <div className='  '>
                                    <p className="font-semibold text-sm ">Quantity : </p>
                                    <div className='flex *:py-2 *:px-4 bg-slate-200  items-center  my-4'>
                                        <p className='hover:text-[red] text-2xl cursor-pointer ' onClick={() => {
                                            if (quantity > 1)
                                                setQuantity(quantity - 1)
                                        }} >  &#8722; </p>
                                        <p className='text-md'>{quantity}</p>
                                        <p className='hover:text-[red] text-2xl cursor-pointer ' onClick={() => setQuantity(quantity + 1)}> &#43; </p>
                                    </div>
                                </div>
                                <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">
                        <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
                        <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                            <NavLink to='/buy'>

                            Proceed to Buy
                            </NavLink>
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
