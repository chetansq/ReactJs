import React from 'react'
import './App.css'
import Card1 from './Components/Card1'
import Theme from './Components/Theme'
// import { createContext } from 'react'
// import Layout from './Components/Layout'

// export const data = createContext('skillqode')

// const obj = {
//   fullname: 'arihant',
//   age: 20
// }

// function cards() {

//   console.log("this is card")
//   return (
//     <>
//       <p>
//         this is card function
//       </p>
//     </>
//   )

// }

const App = ({ children }) => {
  return (
    <div>
      {/* <data.Provider value={cards()}>
        <Layout >
          {children}
          <h1 className='text-white bg-red-700'>this is layout page</h1>
        </Layout>
      </data.Provider>  */}

      {/* <Card1 /> */}
      <Theme />
    </div>
  )
}

export default App