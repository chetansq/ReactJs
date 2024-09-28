import React from 'react'
import { useState } from 'react'

const Counter = () => {

    const [count, setCount] = useState(0)

    return (
        <div>
            <h1 className='heading'>This is React Counter Function Components</h1>
            <p>Count : {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    )
}

export default Counter