import React from 'react'
import './App.css'
import Recipe_api from './Recipe_api'
import Recipes from './Recipes'


const App = () => {
  return (
    <div>
      <Recipe_api />
      {/* <Recipes /> */}
    </div>
  )
}

export default App