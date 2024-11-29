import React from "react";
import { NavLink } from "react-router-dom";

const BuyPage = () => {
    return (
        <div className="p-6 flex flex-col items-center">
            <h1 className="text-2xl font-bold mb-4">Order Confirmation</h1>
            <p className="text-lg">Thank you for your purchase!</p>
            <button className="mt-6 bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600">
               <NavLink to='/'>

               Back to Home
               </NavLink>
              
            </button>
        </div>
    );
};

export default BuyPage;
