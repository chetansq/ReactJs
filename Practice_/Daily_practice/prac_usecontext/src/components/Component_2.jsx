import React from 'react'
import Component_3 from './Component_3'

const Component_2 = (props) => {
    return (
        <div>
        <p>COMPONENT 2 : {props.name}</p>
            <Component_3 name={props.name} />
        </div>
    )
}

export default Component_2