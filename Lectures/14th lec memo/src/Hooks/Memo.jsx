import React, { useState } from 'react'
import Counter from '../components/Counter'

const Memo = () => {

    const [data, setData] = useState(0)

    const chnage = () => {
        setData(data => data + 1)
    }
    return (

        <div>
            <div>
                {data}
            </div>
            <Counter data={chnage} />
        </div>


    )
}

export default Memo
