import { useState } from 'react'
import './App.css'

export function Chai() {

  const [chai, setChais] = useState('0');
  const [coffee, setCoffees] = useState('0');


  const setCha = () => {
    const values = document.getElementById('guest').value
    setChais(values)
  }
  const setCoffee = () => {
    const values = document.getElementById('guest').value
    setCoffees(values)
  }
  return (
    <>
      <div className='w-4/5 m-auto border-2 p-2 '>
        <h1 className='text-red-500 text-2xl'><b>&#9786; welcome &#9786;</b></h1>
        <label htmlFor="guest">Guest:</label>
        <input type="number" id='guest' className='border-2 m-4' placeholder='Number of guest' /> {/*value={chai} onChange={(e) => setChais(e.target.value)}*/}

        <div className='flex justify-around'>
          <div className='border-2 p-2'>
            <p className='text-2xl font-bold'>Spiced Chai Recipe</p>
            <hr />
            <h2>For {chai} person</h2>
            <ol className='text-start'>
              <hr />
              <li>Boil <span className='text-red-600'>{chai}</span> cups of water.</li>
              <li>Add <span className='text-red-600'>{chai}</span> spoons of tea and <span className='text-red-600'>{chai}</span> spoons of spice.</li>
              <li>Add {0.5 * chai} cups of milk to boil and sugar to taste.</li>
            </ol>
            <hr />
            <button onClick={setCha} className='bg-black text-white px-4 py-2 rounded-xl m-4 hover:bg-red-600'>TEA</button>
          </div>

          <div className='border-2 p-2'>
            <p className='text-2xl font-bold'>Spiced Coffee Recipe</p>
            <hr />
            <h2>For {coffee} person</h2>
            <ol className='text-start'>
              <hr />
              <li>Boil {coffee} cups of water.</li>
              <li>Add {coffee} spoons of coffee and {0.5 * coffee} spoons of spice.</li>
              <li>Add {0.5 * coffee} cups of milk to boil and sugar to taste.</li>
            </ol>

            <hr />
            <button onClick={setCoffee} className='bg-black text-white px-4 py-2 rounded-xl m-4 hover:bg-red-600 '>COFFEE</button>
          </div>

        </div>
      </div>
    </>
  )
}

function App() {

  return (
    <>
      <Chai />
    </>
  )
}

export default App
