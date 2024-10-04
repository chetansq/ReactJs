import React from 'react'
import { data, data1 } from './Main';
// import { useContext } from 'react'


const Components_4 = () => {

    // second method
    // const name = useContext(data);
    // const text = useContext(data1);

    return (
        <div>
            {/* <h1 className='bg-red-400'>   -- component 4 --  </h1>
            <p>Name : {name[0]} </p>
            <p>Age : {name[1]} </p>

            <p>all : {name}</p>

            <p>  {text}</p> */}

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