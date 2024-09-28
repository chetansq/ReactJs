import React from 'react'
import Component_2 from './Component_2'

const Component_1 = (props) => {
    return (
        <div>
            <h1>COMPONENT 1 : {props.name}</h1>
            <Component_2 name={props.name} />
        </div>
    )
}

export default Component_1
