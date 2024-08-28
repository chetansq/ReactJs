import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {


  const [count, setCount] = useState(0)

  return (
    <>
      <main className='bg-slate-700 h-screen text-white'>
        <fieldset style={{ position: "relative" }}>
          <legend >form</legend>
          <form className=' '>
            <label htmlFor='fname'>First Name
              <input type='text' name='fname' id='fname' required />
            </label>
            <label htmlFor='lname'>Last Name
              <input type='text' name='lname' id='lname' required />
            </label>
            <label htmlFor='email'>Email
              <input type='email' name='email' id='email' required />
            </label>
            <label htmlFor='pwd'>Password
              <input type='password' name='pwd' id='pwd' required />
            </label>
            <button className='text-slate-800' >submit</button>
          </form>
        </fieldset>
      </main>
    </>
  )
}

export default App
