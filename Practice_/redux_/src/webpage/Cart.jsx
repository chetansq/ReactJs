import React from 'react'
import { useSelector, useDispatch } from 'react-redux'


const Cart = () => {

    const cartData = useSelector((state) => state.cart);
    console.log("cart data ", cartData);

    return (
        <div>
            <section className="py-16 bg-gray-100">
                <div className="container mx-auto px-6">
                    <h3 className="text-3xl font-bold text-center mb-8">Your Cart</h3>
                    <div className="bg-white p-4 rounded-lg shadow">
                        {cartData.map((item) => (
                            <div key={item.id} className="flex justify-between items-center border-b py-4">
                                <div>
                                    <h4 className="font-bold">{item.name}</h4>
                                    <p className="text-gray-600">{item.price}</p>
                                    <p className="text-gray-600">Quantity: {item.quantity}</p>
                                </div>
                                <button
                                    className="bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                                    onClick={() => removeFromCart(item.id)}
                                >
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">
                        <button className="bg-blue-600 text-white px-6 py-3 rounded hover:bg-blue-700">
                            Proceed to Checkout
                        </button>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Cart
