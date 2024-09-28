import React from 'react'
import Components_2 from './Components_2'

const Components_1 = (props) => {
    return (
        <div>
            <h1 className=' bg-black text-white'>{props.data}</h1>
            {/* <Components_2 data={'hello component of 2'} /> */}
            <Components_2 value={props.data} />
        </div>
    )
}

export default Components_1