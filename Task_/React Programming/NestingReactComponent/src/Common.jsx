import React from 'react'
import Component1 from './Component1'
import Component2 from './Component2'
import Component3 from './Component3'
import Component4 from './Component4'
const Common = () => {
    return (

        <div class="grid mb-8 border border-gray-200 rounded-lg shadow-sm dark:border-gray-700 md:mb-12 md:grid-cols-2 bg-white dark:bg-gray-800">

            <Component1 />
            <Component2 />
            <Component3 />
            <Component4 />

        </div>

    )
}

export default Common
