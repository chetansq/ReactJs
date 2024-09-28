import React from 'react'

import { useState, useEffect, useRef } from "react";
import Slider from "react-slick";


// icon
import { IoFlashSharp } from "react-icons/io5";
import { BiDollar } from "react-icons/bi";
import { IoMdAlarm } from "react-icons/io";



const Single_Slider = [

    {
        id: 2,
        img: './src/assets/product_2.jpeg'
    },
    {
        id: 3,
        img: './src/assets/product_3.jpeg'
    },
    {
        id: 4,
        img: './src/assets/product_4.jpeg'
    },
    {
        id: 5,
        img: './src/assets/product_5.jpeg'
    },
    {
        id: 6,
        img: './src/assets/product_6.jpeg'
    },
    {
        id: 7,
        img: './src/assets/product_7.jpeg'
    },
    {
        id: 8,
        img: './src/assets/product_8.jpeg'
    },
    {
        id: 9,
        img: './src/assets/product_9.jpeg'
    },
    {
        id: 10,
        img: './src/assets/product_10.jpeg'
    }
]
// const color = [beige]
const Product_details = () => {

    const [color, setColor] = useState('Beige')
    const [size, setSize] = useState('S')
    return (
        <div>
            <div className="container-fluid m-auto">
                <div className='grid grid-cols-2'>

                    {/* slider section */}

                    <div className=" h-full px-1 ">
                        {/* <img src="./src/assets/product_1.jpeg" alt="adfzsdf" className='h-full w-full' /> */}
                        <AsNavFor />

                    </div>

                    {/* product details section */}

                    <div className=" flex flex-col gap-4 items-start h-full px-10 ">
                        <p className='text-2xl'>Cotton jersey top</p>

                        <div className='flex items-center gap-2'>
                            <button className='border border-black text-sm py-1 px-2 rounded'>Best seller</button>
                            <div className='flex gap-1 items-center'>
                                <IoFlashSharp className='animate-pulse text-[red] duration-1000 text-xl' />
                                <p className='text-sm'>Selling fast! 56 people have this in their carts.</p>
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
                            <p className='text-gray-600 font-semibold text-sm '>People are viewing this right now</p>
                        </div>

                        {/* Sale timing section */}

                        <div className=' flex flex-col gap-0.5 rounded items-center border border-[red] px-10 py-3'>
                            <div className='flex gap-2 items-center'>
                                <IoMdAlarm />
                                <p className='text-[10px] text-gray-700 font-semibold uppercase '>hurry up! sale ends in:</p>
                            </div>

                            <div>
                                <p className='text-[red] font-semibold'>11Days : 15Hours : 50Mins : 50Secs</p>
                            </div>
                        </div>

                        {/* Color section */}

                        <div>
                            <p>Color : <span className='font-semibold'>{color}</span> </p>
                            <div className='flex gap-4 my-4 '>

                                <a href='#' className='h-5 w-5 bg-[#c5a572] border rounded-full hover:outline hover:outline-1  outline-offset-2' onClick={() => setColor('Beige')} ></a>
                                <a href='#' className='h-5 w-5 bg-[black] border rounded-full hover:outline  hover:outline-1  outline-offset-2' onClick={() => setColor('Black')}></a>
                                <a href='#' className='h-5 w-5 bg-[blue] border rounded-full hover:outline hover:outline-1  outline-offset-2' onClick={() => setColor('Blue')}></a>
                                <a href='#' className='h-5 w-5 bg-[white] border rounded-full hover:outline hover:outline-1  outline-offset-2' onClick={() => setColor('White')}></a>

                            </div>
                        </div>

                        {/* Size Section */}

                        <div>
                            <p>Color : <span className='font-semibold'>{size}</span> </p>
                            <div className='flex gap-4 my-4 '>
                                <a href="#" className='py-1 px-4 border hover:border-black duration-300 text-black' onClick={() => setSize('S')} >S</a>
                                <a href="#" className='py-1 px-4 border hover:border-black duration-300 text-black' onClick={() => setSize('M')} >M</a>
                                <a href="#" className='py-1 px-4 border hover:border-black duration-300 text-black' onClick={() => setSize('L')} >L</a>
                                <a href="#" className='py-1 px-4 border hover:border-black duration-300 text-black' onClick={() => setSize('XL')} >XL</a>
                            </div>
                        </div>

                        {/* Quantity section */}
                        <div>
                            <p className="font-semibold text-sm">Quantity</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Product_details




function AsNavFor() {
    const [nav1, setNav1] = useState(null);
    const [nav2, setNav2] = useState(null);
    let sliderRef1 = useRef(null);
    let sliderRef2 = useRef(null);

    useEffect(() => {
        setNav1(sliderRef1);
        setNav2(sliderRef2);
    }, []);
    return (
        <div className="slider-container h-screen">

            <div className='grid grid-cols-[15%_85%] h-[90vh] overflow-hidden'>
                <Slider
                    asNavFor={nav1}
                    ref={slider => (sliderRef2 = slider)}
                    slidesToShow={5}
                    slidesToScroll={3}
                    focusOnSelect={true}
                    vertical={true}
                    draggable={true}
                    swipe={true}
                    swipeToSlide={true}
                    touchMove={true}
                    accessibility={true}
                    className='product_slider'
                >

                    {
                        Single_Slider.map((current) => {
                            return (
                                <div key={current.id} className='overflow-hidden'>
                                    <img src={current.img} alt="" className='h-full w-full object-cover ' />
                                </div>
                            )
                        })
                    }
                </Slider>


                <Slider asNavFor={nav2} ref={slider => (sliderRef1 = slider)} className='product_slider2' slidesToShow={1}>

                    {
                        Single_Slider.map((current) => {
                            return (
                                <div key={current.id} className='overflow-hidden outline-none'>
                                    <img src={current.img} alt="" className='h-full w-full object-cover outline-none' />
                                </div>
                            )
                        })
                    }
                </Slider>


            </div>
        </div>
    );
}

