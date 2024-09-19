import React from 'react'
import about_img from '../assets/about-banner-01.jpg'
import collection_img from '../assets/collection-69.jpg'

const AboutUs = () => {
    return (
        <div>
            {/* about bg images */}
            <div style={{ backgroundImage: `url(${about_img})` }} className='h-screen flex bg-cover justify-center items-center ' >
                <p className='text-6xl text-white tracking-widest text-center '>Empowering women to achieve <br /> fitness goals with style</p>
            </div>
            {/* about main section */}
            <div className='px-8'>
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
                <div className="container">

                    <div className='flex justify-between gap-4 my-20'>
                        <img src={collection_img} alt="" />
                        <div className='flex flex-col justify-center  gap-4 p-20'>
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
        </div>
    )
}

export default AboutUs
