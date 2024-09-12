import React from 'react'
// import { useState } from 'react'
import { createContext } from 'react'
import Card1 from './Card1';

export const BgChange1 = createContext();
export const BgChange2 = createContext();

const Theme = () => {

    // const [theme, settheme] = useState('bg-black');

    // const setBgTheme = () => {

    //     settheme('bg-white')

    // }
    let colors1 = 'bg-black'
    let colors2 = 'bg-white'
    return (
        <div >

            <bgChange1.Provider value={colors1} >
                <bgChange2.Provider value={colors2}>

                    <Card1 />
                </bgChange2.Provider>
            </bgChange1.Provider>

            {/* `<button onClick={setBgTheme}>
                <Button name={theme} />
            </button>` */}
        </div>
    )
}

export default Theme