import React from 'react'
import { data } from './Main';
import { useContext } from 'react'


const Components_4 = () => {

    // second method
    const {name,age} = useContext(data);
   

    return (
        <div>
            <h1 className='bg-red-400'>   -- component 4 --  </h1>
            <p>Name : {name} <br /> age : {age}</p>
         


            {/* FIRST METHOD */}
            {/* {
                <data.Consumer>
                    {
                        (textvalue) => {
                            return (
                                <>

                                    {
                                        <data1.Consumer>
                                            {
                                                (age) => {
                                                    return (
                                                        <>
                                                            {textvalue}
                                                            {age}

                                                        </>
                                                    )
                                                }
                                            }
                                        </data1.Consumer>
                                    }
                                </>
                            )
                        }
                    }
                </data.Consumer>
            } */}
        </div>
    )
}

export default Components_4