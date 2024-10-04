import React from 'react'
import Component_4 from './Component_4'


const Component_3 = (props) => {
    return (
        <div>
            <p>COMPONENT 3 : {props.name}</p>
             <Component_4 name='component' /> 
        </div>
            //<Component_4 name={props.name} /> 



    )
}

export default Component_3
