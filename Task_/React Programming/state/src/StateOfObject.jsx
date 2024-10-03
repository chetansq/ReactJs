import React from 'react'
import { useState } from 'react'

const stateObject = {
    name: 'aman',
    age: 20,
    city: 'surat'
}

const arr = ['https://plus.unsplash.com/premium_photo-1664474619075-644dd191935f?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8aW1hZ2V8ZW58MHx8MHx8fDA%3D', 'Nature']
const StateOfObject = () => {

    const [obj, setObj] = useState([]);
    const [array, setArray] = useState([]);


    console.log(obj);

    function handleObj() {
        setObj(stateObject)
    }
    function handleArray() {
        setArray(arr)
    }

    return (
        <div >
            <div>
                <p className='text-3xl my-3'>Information</p>
                <div className='bg-slate-100 leading-7 my-3'>
                    <p>Name: {obj.name}</p>
                    <p>Age: {obj.age}</p>
                    <p>City: {obj.city}</p>
                </div>

                <button onClick={handleObj} className='bg-slate-500 p-3 rounded'>get Object</button>
            </div>

            <div className='my-5'>
                <img src={array[0]} alt="" />
                <p>{array[1]}</p>
                <button onClick={handleArray} className='bg-slate-500 p-3 rounded'>get Image</button>

            </div>
        </div>
    )
}

export default StateOfObject
