import React, { useState } from 'react'


const Chai = () => {
    const [chai, setChais] = useState('0');

    const setCha = () => {
        const values = document.getElementById('guest').value
        setChais(values)
    }
    return (
        <div>
            <h1 className='text-red-500 text-2xl'><b>&#9786; welcome &#9786;</b></h1>
            <label htmlFor="guest">Guest:</label>
            <input type="number" id='guest' className='border-2 m-4' placeholder='Number of guest' /> {/*value={chai} onChange={(e) => setChais(e.target.value)}*/}
            <div className='border-2 p-2'>
                <p className='text-2xl text-slate-200 font-bold bg-[#422006]'>Spiced <span className='text-slate-100'>Chai</span> Recipe</p>
                <hr />
                <h2>For {chai} person</h2>
                <ol className='text-start'>
                    <hr />
                    <li>Boil <span className='text-red-600'>{chai}</span> cups of water.</li>
                    <li>Add <span className='text-red-600'>{chai}</span> spoons of tea and <span className='text-red-600'>{0.5 * chai}</span> spoons of spice.</li>
                    <li>Add <span className='text-red-600'>{0.5 * chai}</span> cups of milk to boil and sugar to taste.</li>
                </ol>
                <hr />
                <button onClick={setCha} className='bg-black text-white px-4 py-2 rounded-xl m-4 hover:bg-red-600'>TEA</button>
            </div>
        </div>
    )
}

export default Chai
