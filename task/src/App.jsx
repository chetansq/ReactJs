import { useState } from 'react'
import './App.css'

const guests = document.getElementById('guest');
export function Chai() {
  // const chais = 2;
  const [chai, setChais] = useState('');

  console.log(chai);

  const setCha = () => {
    setChais(guests);
  }
  return (
    <>
      <div className='w-1/2 m-auto border-2 p-2'>
        <h1 className='text-red-500'><b>&#9786; welcome &#9786;</b></h1>
        <p className='text-2xl font-bold'>Spiced Chai Recipe</p>
        <label htmlFor="guest">Guest:</label>

        <input type="number" id='guest' className='border-2 m-4' placeholder='Number of guest' value={chai} onChange={(e) => setChais(e.target.value)} />
        <hr />
          <h2>For {chai} person</h2>
        <ol className='text-start'>
          <hr />
          <li>Boil {chai} cups of water.</li>
          <li>Add {chai} spoons of tea and {0.5 * chai} spoons of spice.</li>
          <li>Add {0.5 * chai} cups of milk to boil and sugar to taste.</li>
        </ol>
        <hr />
        <button onClick={setCha} className='bg-black text-white px-4 py-2 rounded-xl m-4'>Click For Chai</button>
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
