import React from 'react'

const Online_ofline = ({ data }) => {
    return (
        <div>
            {
                data == 'online' ? <p className='bg-green-300'> user is   {data} </p> : <p className='bg-slate-300'> user is  {data} </p>
            }
        </div>
    )
}

export default Online_ofline
