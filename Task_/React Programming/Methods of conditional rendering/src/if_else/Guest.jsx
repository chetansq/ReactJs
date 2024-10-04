import React, { useState } from 'react'
import Chai from './Chai'
import Coffee from './Coffee'


const Guest = () => {

    const [btn, setBtn] = useState('coffee');
    const [component, setComponent] = useState(<Chai />);


    function changeBtn() {

        if (btn == 'coffee') {

            setComponent(<Coffee />)
            setBtn('chai')
        }
        else {
            setComponent(<Chai />)
            setBtn('coffee')
        }
    }

    return (
        <div>

            {component}

            <button onClick={changeBtn} className='bg-red-900 text-white p-2 rounded my-4'>
                click for {btn}
            </button>
        </div>
    )
}

export default Guest


