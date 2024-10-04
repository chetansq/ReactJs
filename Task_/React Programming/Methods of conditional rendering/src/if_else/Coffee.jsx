import React, { useState } from 'react'


const Coffee = () => {

    const [coffee, setCoffees] = useState('0');

    const setCoffee = () => {
        const values = document.getElementById('guest1').value
        setCoffees(values)
    }

    return (
        <div>
            <h1 className='text-red-500 text-2xl'><b>&#9786; welcome &#9786;</b></h1>
            <label htmlFor="guest">Guest:</label>
            <input type="number" id='guest1' className='border-2 m-4' placeholder='Number of guest' /> {/*value={chai} onChange={(e) => setChais(e.target.value)}*/}

            <div className=''>

                <div className='border-2 p-2'>
                    <p className='text-2xl font-bold bg-[#422008] text-slate-200'>Spiced Coffee Recipe</p>
                    <hr />
                    <h2>For {coffee} person</h2>
                    <ol className='text-start'>
                        <hr />
                        <li>Boil  <span className='text-red-600'>{coffee}</span> cups of water.</li>
                        <li>Add <span className='text-red-600'>{coffee}</span> spoons of coffee and <span className='text-red-600'>{0.5 * coffee}</span> spoons of spice.</li>
                        <li>Add <span className='text-red-600'>{0.5 * coffee}</span> cups of milk to boil and sugar to taste.</li>
                    </ol>

                    <hr />
                    <button onClick={setCoffee} className='bg-black text-white px-4 py-2 rounded-xl m-4 hover:bg-red-600 '>COFFEE</button>
                </div>

            </div>
        </div>
    )
}

export default Coffee
