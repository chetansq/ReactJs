import React from 'react'
import { useDispatch, useSelector } from "react-redux"
import { Data } from '../data/Data'

const Shop = () => {

    const add_1 = useSelector(state => state.addReducer1)
    const add_2 = useSelector(state => state.addReducer2)

    const dispatch = useDispatch()
    return (
        <div>

            <div className='grid grid-cols-2 gap-5'>


                {
                    Data.map((product) => {
                        return (
                            <div key={product.id}>


                                <div className='border p-2'>
                                    <div>
                                        <img src={product.image} alt="" className='size-36 object-contain mx-auto' />
                                    </div>
                                    <div>
                                        <p className='line-clamp-1'>{product.title}</p>
                                        <p className='line-clamp-3'>{product.description}</p>
                                        <p>{product.price}</p>
                                        <p>{product.category}</p>
                                        <div className='text-left'>

                                            <p>{product.rating.count}</p>
                                            <p>{product.rating.rate}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <button className='bg-red-500 text-white px-2 py-1'>AddToCart</button>
                                    </div>
                                </div>

                            </div>
                        )
                    })
                }
            </div>

        </div>
    )
}

export default Shop