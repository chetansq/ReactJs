// import './App.css'

import Layout from './Pages/Layout'
import UserProviderContext from './context/UserProvderContext'

function App() {

  return (
    <>
      <UserProviderContext>
        <Layout />
      </UserProviderContext>
    </>
  )
}

export default App
