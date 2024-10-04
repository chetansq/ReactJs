import React, { useEffect, useState } from 'react'

const Operator = () => {
    const result1 = true && 'Hello World'
    console.log('result 1', result1)
    // // Hello World

    const result2 = false || 'Hello World'
    console.log('result 2', result2)
    // // false

    // const [data1, setData1] = useState(0);
    // const [data2, setData2] = useState(0);

    // useEffect(
    //     () => {
    //         console.log("hello world");
    //     }
    //     , [data1])



    return (
        <div className='flex flex-col'>
            <p> {result1} </p>
            <p>it is  print false {result2} </p>

            {/* {data1}
            <button onClick={() => setData1(data1 + 1)}>click 1</button>
            {data2}
            <button onClick={() => setData2(data2 + 1)}>click 2</button> */}
        </div>
    )
}

export default Operator
