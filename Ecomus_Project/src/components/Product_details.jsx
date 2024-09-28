import React from 'react'

// icon
import { IoFlashSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { IoMdAlarm } from "react-icons/io";

const Product_details = () => {
    return (
        <div>
            <div className="container-fluid m-auto">
                <div className='grid grid-cols-2'>

                    {/* slider section */}

                    <div className=" h-full px-1 ">
                        <img src="./src/assets/product_1.jpeg" alt="adfzsdf" className='h-full w-full' />
                    </div>

                    {/* product details section */}

                    <div className=" flex flex-col gap-4 items-start h-full px-10 ">
                        <p className='text-2xl'>Cotton jersey top</p>

                        <div className='flex items-center gap-2'>
                            <button className='border border-black text-sm py-1 px-2 rounded'>Best seller</button>
                            <div className='flex gap-1 items-center'>
                                <IoFlashSharp className='animate-pulse text-[red] duration-1000 text-xl' />
                                <p>Selling fast! 56 people have this in their carts.</p>
                            </div>
                        </div>

                        {/* Price section */}

                        <div className='flex items-center gap-2 '>
                            <p className='flex  items-center text-3xl text-red-600'><BiDollar />8.00</p>
                            <p className='text-xl text-gray-500'><del><span>$</span>10.00</del></p>
                            <p className='bg-orange-600 py-1 px-2 text-white rounded-full text-sm '>20% <span>OFF</span></p>
                        </div>

                        <div className='flex gap-4'>
                            <span className='bg-black text-white py-0.5 font-bold text-sm px-3 rounded'>20</span>
                            <p className='text-gray-600 font-semibold '>People are viewing this right now</p>
                        </div>

                        {/* Sale timing section */}
                        <div className='border border-[red]'>
//             <div className='flex gap-2 items-center'>
//                 <IoMdAlarm />
//                 <p className='text-sm text-gray-700 font-bold uppercase '>hurry up! sale ends in:</p>
//             </div>

//             <div>

//             </div>
//         </div> 
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Product_details

// function Sale_time() {

//     // const date = new Date();
//     const new_date = Date().toLocaleString();
 

//     return (
//         <div className='border border-[red]'>
//             <div className='flex gap-2 items-center'>
//                 <IoMdAlarm />
//                 <p className='text-sm text-gray-700 font-bold uppercase '>hurry up! sale ends in:</p>
//             </div>

//             <div>

//             </div>
//         </div>
//     )
// }
