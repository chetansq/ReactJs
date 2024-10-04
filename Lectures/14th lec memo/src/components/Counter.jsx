import React, { memo } from 'react'

const Counter = ({ data }) => {
    console.log('ChildComponents Re-render');
    return (
        <div>
            <button onClick={data}>add number</button>
        </div>
    )
}

export default memo(Counter)
