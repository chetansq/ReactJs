import React from 'react'
import Component_1 from './Component_1'
import { createContext } from 'react'

export const data_1 = createContext();
// export const data_2 = createContext();

const Main = (props) => {

    return (
        <div>
            {/*  one data pass */}

            {/* <data_1.Provider value={'Data_1 passed'}>
                <Component_1 name='component 1' />
            </data_1.Provider> */}

            {/* two data pass method 1 */}

            {/* <data_1.Provider value={'Data_1 passed'}>
                <data_2.Provider value={'Data_2 passed'}>
                    <Component_1 name='component 1' />
                </data_2.Provider>
            </data_1.Provider> */}
                
            <data_1.Provider value={['aman', 23]}>
                <Component_1 />
            </data_1.Provider>


        </div>
    )
}

export default Main
