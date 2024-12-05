import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { remove_to_wishlist } from '../redux/Action';

const Wishlist = () => {


  const wishlist = useSelector((state) => state.cartwishlist);
  console.log("wishlist data", wishlist);

  const dispatch = useDispatch();
  return (
    <div>
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-6">
          <h3 className="text-3xl font-bold text-center mb-8">Your Wishlist</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {wishlist.map((item) => (
              <div key={item.id} className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition duration-300">
                <img src={item.image} alt={item.name} className="mb-4 w-full rounded" />
                <h4 className="font-bold text-lg">{item.name}</h4>
                <p className="text-gray-600">{item.price}</p>
                <button
                  className="mt-2 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
                  onClick={() => dispatch(remove_to_wishlist(item))}
                >
                  Remove
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Wishlist
