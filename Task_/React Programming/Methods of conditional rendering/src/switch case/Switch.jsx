import React from 'react'
import Page1 from './Page1'
import Page2 from './Page2'
import Page3 from './Page3'

import { useState } from 'react'
const Switch = () => {
    const [num, setNum] = useState();

    const setNumber = () => {
        const values = document.getElementById('page1').value

        switch (values) {
            case '1':
                setNum(<Page1 />)
                break;

            case '2':
                setNum(<Page2 />)
                break;

            case '3':
                setNum(<Page3 />)
                break;

            default: "not valid enter 1 to 3"
                break;

        }
    }
    return (
        <div>
            <label htmlFor="guest">Page No:</label>
            <input type="number" id='page1' className='border-2 m-4' placeholder='Number of guest' /> {/*value={chai} onChange={(e) => setChais(e.target.value)}*/}
            <button onClick={setNumber} className='bg-black text-white px-4 py-2 rounded-xl m-4 hover:bg-red-600 '>page number</button>
            {num}
        </div>
    )
}

export default Switch
