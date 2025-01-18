import React, { useContext, useState } from 'react'
import Product_data from '../data/Constant'
import { FaRegHeart } from "react-icons/fa";

import { FaHeart } from "react-icons/fa";
import Wish_context from '../context/Context';

const Product = () => {

    const { setWishData, wishData } = useContext(Wish_context)
    const { setCartData, cartData } = useContext(Wish_context)
    return (
        <div className='my-10'>
            <div className='flex flex-wrap justify-center  mx-auto'>
                {
                    Product_data.map((details) => {
                        return (
                            <div key={details.id} className='w-1/4 border mx-4 my-2 hover:shadow-black hover:shadow-md '>

                                <div className='p-4'>
                                    <img src={details.image} alt="" className='size-52 mx-auto object-contain' />
                                </div>

                                <div>

                                    <div className='flex flex-col gap-3'>
                                        <p className='bg-red-100 line-clamp-1 '> {details.title} </p>
                                        <p className='line-clamp-2'> {details.description} </p>
                                        <p> Price : <span className='bg-white text-black'> {details.price}</span> </p>
                                        <p> Category : <span className='bg-white text-black'>{details.category}</span> </p>
                                        <div>
                                            <p> Rate : <span className='bg-white text-black'>{details.rating.rate}</span> </p>
                                            <p> Count : <span className='bg-white text-black'>{details.rating.count}</span> </p>
                                        </div>

                                    </div>

                                    <div className='flex items-center  gap-5 justify-between px-2 py-1'>
                                        <button className='bg-red-600 text-white px-8 py-1 ' onClick={() => {

                                            setCartData([...cartData, Product_data.filter((item) => item.id === details.id)])

                                        }}>Add To Cart</button>

                                        <button onClick={() => {
                                            setWishData([...wishData, Product_data.filter((item) => item.id === details.id)])
                                        }}>
                                            {
                                                Product_data.filter((item) => item.id === details.id) ? <FaHeart className='text-red-600' /> : <FaRegHeart className='' />
                                            }

                                        </button>

                                    </div>
                                </div>

                            </div>
                        )
                    })
                }

            </div>


        </div >
    )
}

export default Product