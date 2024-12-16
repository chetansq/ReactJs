import React from 'react'
import Component_2 from './Component_2'

const Component_1 = (props) => {
    return (
        <div>
            <p>My name is : {props.name}</p>
            <Component_2 name={props.name} />
        </div>
    )
}

export default Component_1
