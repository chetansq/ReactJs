import React from 'react'
import './App.css'
import { createContext } from 'react'
import Layout from './Components/Layout'

export const data = createContext('skillqode')

const obj = {
  fullname: 'arihant',
  age: 20
}

const App = ({ children }) => {
  return (
    <div>
      <data.Provider value={obj}>
        <Layout >
          {children}
          <h1 className='text-white bg-red-700'>this is layout page</h1>
        </Layout>
      </data.Provider>
    </div>
  )
}

export default App