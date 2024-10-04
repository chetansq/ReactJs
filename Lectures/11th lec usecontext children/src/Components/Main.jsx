import React from 'react'
import { createContext } from 'react'
import Components_1 from './Components_1';

export const data = createContext();

const Main = ({children}) => {

    const objs =
    {
        name: "ajay",
        age: 20
    }

    return (
        <div>

            <data.Provider value={objs}>
                {/* <Components_1 /> */}
                {children}
            </data.Provider>
        </div>
    )
}

export default Main