import React from 'react'
import Components_3 from './Components_3'

const Components_2 = (props) => {
    return (
        <div>
            <h1 className='bg-black text-white'>{props.data}</h1>
            <Components_3 />
        </div>
    )
}

export default Components_2