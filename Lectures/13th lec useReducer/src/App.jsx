import React from 'react'
import './App.css'
import Counter from './components/Counter'
import UseReducer from './Hooks/UseReducer'

const App = () => {
  return (
    <div>
      <Counter />
      <UseReducer />
    </div>
  )
}

export default App