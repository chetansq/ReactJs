import React from 'react'
//images
import about_img from '../assets/about-banner-01.jpg'
import collection_img1 from '../assets/collection-69.jpg'
import collection_img2 from '../assets/collection-70.jpg'
import collection_img3 from '../assets/collection-71.jpg'

import Footers from '../components/Footer'
import Shop_gram from '../components/Shop_gram'

const AboutUs = () => {
    return (
        <div>
            {/* about bg images */}
            <div style={{ backgroundImage: `url(${about_img})` }} className='h-screen flex bg-cover justify-center items-center ' >
                <p className='text-6xl text-white tracking-widest text-center '>Empowering women to achieve <br /> fitness goals with style</p>
            </div>
            {/* about main section */}
            <div>
                <div className='container px-10 text-center place-content-center m-auto  '>

                    <div className='flex flex-col my-14 items-center gap-5  '>
                        <p className='text-4xl'>We are Ecomus</p>
                        <p>Welcome to our classic women's clothing store, where we believe
                            <br />
                            that timeless style never goes out of fashion. Our collection features classic
                            <br />
                            pieces that are both stylish and versatile, perfect for building a
                            <br />
                            wardrobe that will last for years.</p>
                    </div>
                </div>
                <hr />
                <div className='md:px-32  px-10'>

                    {/* Established - 1995 */}

                    <div className="container ">

                        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center  gap-5 my-20 py-4'>
                            <img src={collection_img1} alt="" className='h-full w-full' />
                            <div className='flex justify-center items-center'>
                                <div className='flex flex-col justify-center   gap-4  w-[80%]'>
                                    <p className='text-3xl'>Established - 1995</p>
                                    <p className='text-sm w-ful'>Ecomus was founded in 1995 by Jane Smith, a fashion lover with a
                                        passion for timeless style. Jane had always been drawn to classic
                                        pieces that could be worn season after season, and she believed that
                                        there was a gap in the market for a store that focused solely on classic
                                        women's clothing. She opened the first store in a small town in New
                                        England, where it quickly became a local favorite.</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* our mission */}

                    <div className='container py-10 '>
                        <div className='grid grid-cols-1 lg:grid-cols-2 justify-center items-center  gap-5 my-24 py-4'>

                            <div className='flex justify-center items-center'>
                                <div className='flex flex-col justify-center   gap-4  w-[80%]'>
                                    <p className='text-3xl'>Our mission</p>
                                    <p className='text-sm w-ful'>Our mission is to empower people through sustainable fashion.
                                        We want everyone to look and feel good, while also doing our part to
                                        help the environment.We believe that fashion should be stylish,
                                        affordable and accessible to everyone. Body positivity and inclusivity
                                        are values that are at the heart of our brand.</p>
                                </div>
                            </div>
                            <div className='relative'>
                                <div className=' relative w-[70%] hover:z-50'>
                                    <img src={collection_img2} alt="" className=' w-full ' />
                                </div>
                                <div className='absolute z-30 right-4 -bottom-24   '>
                                    <img src={collection_img3} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quality is our priority */}

                    <div className=''>
                        <div className='w-[95%] mx-auto  bg-orange-50 my-14 p-32'>
                            <div className='flex flex-col justify-center items-center text-center   gap-4'>
                                <p className='text-4xl'>Quality is our priority</p>

                                <p className='text-xl tracking-wider   text-gray-500'>Our talented stylists have put together outfits that are perfect for the season.
                                    <br />
                                    They've variety of ways to inspire your next fashion-forward look.</p>
                            </div>
                            <div>
                               
                            </div>
                        </div>
                    </div>

                </div>
            </div>

            <Shop_gram />
            <Footers />
        </div>
    )
}

export default AboutUs



