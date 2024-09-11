import React from 'react'

// Components
import CategorySlide from '../components/CategorySlide';
import Bestseller from '../components/Bestseller';
import { Sliders } from '../components/Slider';

const Index = () => {
    console.log("index page");
    return (
        <div>
            <main>
                <Sliders />
                <CategorySlide />
                <Bestseller />
            </main>
        </div>

    )
}

export default Index
