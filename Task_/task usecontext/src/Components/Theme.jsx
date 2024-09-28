import React from 'react'
import { useState } from 'react'
import Card1 from './Card1';
import { createContext } from 'react';


export const ChangeTheme = createContext();
export const ThemeChangeBtn = createContext();

const Theme = () => {

    const [themes, setTheme] = useState("bg-white");
    const [textthemes, setTextTheme] = useState("text-black");

    const [count, setcount] = useState(true);
    // console.log('themes', themes);

    const setNewTheme = () => {
        if (count === true) {
            setTheme('bg-black');
            setTextTheme('text-white')
            setcount(false);
        }
        else {
            setTheme('bg-white');
            setTextTheme('text-black')
            setcount(true);
        }
    }

    return (
        <div>

            <ChangeTheme.Provider value={[themes, textthemes]}>
                <ThemeChangeBtn.Provider value={setNewTheme}>
                    <Card1 />
                </ThemeChangeBtn.Provider>
            </ChangeTheme.Provider>

        </div>
    )
}

export default Theme
