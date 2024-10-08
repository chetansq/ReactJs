import React from 'react'
const Operator = () => {
    const result1 = true && 'Hello World'
    console.log('result 1', result1)
    // Hello World
    const result2 = false && 'Hello World'
    console.log('result 2', result2)
    // false
    return (
        <div>
            <p> {result1} </p>
            <p>it is not print  {result2} </p>
        </div>
    )
}
export default Operator