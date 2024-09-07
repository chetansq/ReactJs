import React from 'react'
import categoryImg1 from '../assets/asset_30.jpeg'
import categoryImg2 from '../assets/asset_31.jpeg'
import categoryImg3 from '../assets/asset_32.jpeg'
import categoryImg4 from '../assets/asset_33.jpeg'
import categoryImg5 from '../assets/asset_34.jpeg'

let Category = [
    {
        categoryImage: categoryImg1,
        btnDescription: 'Clothing'
    },
    {
        categoryImage: categoryImg2,
        btnDescription: 'Sunglasses'
    },
    {
        categoryImage: categoryImg3,
        btnDescription: 'Bags'
    },
    {
        categoryImage: categoryImg4,
        btnDescription: 'Fashion'
    },
    {
        categoryImage: categoryImg5,
        btnDescription: 'Accessories'
    }

]

{
    Category.map((current) => {

        return (
            <>
                <CategorySlide details={current} />
            </>
        )
    }

    )
}

const CategorySlide = ({ details }) => {

    return (

        <div>


        </div>
    )
}

export default CategorySlide

