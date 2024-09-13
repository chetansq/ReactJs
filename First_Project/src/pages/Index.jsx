import React from 'react'

// Components
import CategorySlide from '../components/CategorySlide';
import Bestseller from '../components/Bestseller';
import { Sliders } from '../components/Slider';
import ShopTheLook from '../components/ShopTheLook';

const Index = () => {
    console.log("index page");
    return (
        <div>
            <main>
                <Sliders />
                <CategorySlide />
                <Bestseller />
                <ShopTheLook />
            </main>
        </div>

    )
}

export default Index
