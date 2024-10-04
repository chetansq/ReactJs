import React from 'react'
import { createContext } from 'react'
import Components_1 from './Components_1';

export const data = createContext();
export const data1 = createContext();

const Main = (props) => {
    // const arr = ['aman', 30];
    return (
        <div>
            {/* <data.Provider value={['ajay',20]}>  // both are valid */}
            <data.Provider value={'arr'}>
                <data1.Provider value={"20"}>

                    <Components_1 name={' component 1'} />
                </data1.Provider>
            </data.Provider>
        </div>
    )
}

export default Main