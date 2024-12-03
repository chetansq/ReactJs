import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { cart_to_wishlist } from "../redux/Action";

const CartPage = () => {

    const [quantity, setQuantity] = useState(1)

    const cart_data = useSelector((state) => state.cart);
    console.log("cart data ", cart_data);

    const wishlist_data = useSelector((state) => state.wishlist);
    console.log('cart to wishlist ', wishlist_data);


    const calculateTotal = () =>

        cart_data.reduce((total, item) => total + parseFloat(item.price.slice(1)) * item.quantity, 0);



    const dispatch = useDispatch()
    return (
        <div className="p-6">
            <h1 className="text-2xl font-bold mb-4">Cart</h1>
            {cart_data.length > 0 ? (
                <div>
                    <div className="space-y-4">
                        {cart_data.map((item) => (
                            <div key={item.id} className="flex items-center space-x-4 border-b pb-4">
                                <img src={item.image} alt={item.name} className="w-16 h-16 object-cover rounded" />
                                <div>
                                    <h2 className="text-lg font-semibold">{item.name}</h2>
                                    <p className="text-gray-600">{item.price}</p>
                                </div>

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
                                <button onClick={() => dispatch(cart_to_wishlist(item))} className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">


                                    Cart to wishlist

                                </button>
                                <button className="bg-red-500 text-white px-4 py-2 mt-4 rounded hover:bg-red-600">
                                    Remove
                                </button>
                            </div>
                        ))}
                    </div>
                    <div className="mt-6 text-right">

                        <div>
                            <p className="text-lg font-bold">Total: ${calculateTotal()}</p>
                            <button className="mt-4 bg-green-500 text-white px-6 py-2 rounded hover:bg-green-600">
                                <NavLink to='/buy'>

                                    Proceed to Buy
                                </NavLink>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <p>Your cart is empty!</p>
            )}



            {/* {cart_data.map(item => (
                <div
                    key={item.id}
                    className="border rounded-lg p-4 shadow hover:shadow-lg transition"
                >
                    <img src={item.image} alt={item.name} className="w-full h-50 object-cover rounded" />
                    <h2 className="text-lg font-semibold mt-2">{item.name}</h2>
                    <p className="text-gray-600">{item.price}</p>
                    <button className="mt-3 ml-2 bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600">
                        <NavLink to='/wishlist'>

                            Add to Wishlist
                        </NavLink>

                    </button>
                </div>
            ))} */}
        </div>
    );
};

export default CartPage;
