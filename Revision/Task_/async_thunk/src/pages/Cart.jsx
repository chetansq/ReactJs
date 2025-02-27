import React from 'react'
import { useSelector } from 'react-redux'

const Cart = () => {
  const { cartItem } = useSelector((state) => state.cart);
  return (
    <div>
      {
        cartItem.length === 0 ? "cart is Empty!!" :cartItem.map((product) => {
          return (
            <div key={product.id} className="border border-black h-full p-4">
              <div>
                <img src={product.image} alt="" className="size-56 object-contain mx-auto" />
              </div>

              <div className="flex flex-col gap-3 my-4">
                <p className="text-[#112D32]"> {product.title} </p>
                <p className="line-clamp-3 text-[#254E58] text-justify" > {product.description} </p>
              </div>

              <button className="text-[#88BDBC] border bg-[#254E58] px-4 py-1 rounded hover:text-[#254E58] hover:bg-[#88BDBC]">AddTOCart</button>
            </div>
          )
        })
      }
    </div>
  )
}

export default Cart