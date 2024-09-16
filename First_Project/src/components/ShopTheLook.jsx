import React from 'react'

// image
import GirlImg_1 from '../assets/asset_66.jpeg'
import GirlImg_2 from '../assets/asset_69.jpeg'

const ShopTheLook = () => {
    return (
        <div className=' h-fit pt-4 flex flex-col justify-between py-20'>
            <div className='flex flex-col items-center gap-3 mb-8'>
                <p className='text-[43px] '>Shop the look</p>
                <p>Inspire and let yourself be inspired, from one unique fashion to another.</p>

            </div>
            <div className='grid md:grid-cols-2  '>

                <img src={GirlImg_1} alt="" className=' h-full w-full' />
                <img src={GirlImg_2} alt="" className=' h-full' />
            </div>

        </div>
    )
}

export default ShopTheLook
