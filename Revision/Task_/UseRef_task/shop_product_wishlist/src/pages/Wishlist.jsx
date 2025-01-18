import React, { useContext } from 'react'
import Wish_context from '../context/Context'

const Wishlist = () => {

    const { wishData } = useContext(Wish_context)

    console.log("wish data", wishData);
    return (

        <div className='mx-auto'>
            <div className='grid grid-cols-3 justify-center gap-8 '>

                {
                    wishData.flat().map((details) => {
                        return (
                            <div key={details.id} className='w-fit border mx-4 my-2 hover:shadow-black hover:shadow-md '>

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
                                        <button className='bg-red-600 text-white px-8 py-1 ' >Add To Cart</button>

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

export default Wishlist
