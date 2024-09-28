import React from 'react'
import { data_1 } from './Main'
import { useContext } from 'react'

const Component_4 = (props) => {

    const data = useContext(data_1);
    return (
        // <div>
        //     <p>COMPONENT 4 :  {props.name}</p>
        // </div>

        // <>
        //     <p>COMPONENT 4 :</p>
        // in js format 
        //     {
        //         <data_1.Consumer>
        //             {
        //                 (value1) => {
        //                     return (
        //                         <>
        //                         {/* {value1} */}
        //                             <data_2.Consumer>
        //                                 {
        //                                     (value2) => {
        //                                         return (
        //                                             <>
        //                                                 {value1}
        //                                                 <br />
        //                                                 {value2}
        //                                             </>
        //                                         )
        //                                     }
        //                                 }
        //                             </data_2.Consumer>
        //                         </>
        //                     )
        //                 }
        //             }
        //         </data_1.Consumer>
        //     }
        // </>

        <>
            <p>this is component 4 {data} </p>
        </>
    )
}

export default Component_4
