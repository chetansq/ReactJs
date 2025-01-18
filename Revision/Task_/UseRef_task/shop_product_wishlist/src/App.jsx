import './App.css'
import WishProviderContext from './context/ContextProvider'
// import Layout from './pages/Layout'
import Layout2 from './pages/Layout2'

function App() {

  return (
    <>
      <WishProviderContext>

        <Layout2 />
      </WishProviderContext>
    </>
  )
}

export default App
