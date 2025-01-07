// import './App.css'
import BookAdd from './Pages/BookAdd'
import BookCard from './Pages/BookCard'
import Layout from './Pages/Layout'
import Navbar from './components/Navbar'
import BookProviderContext from './context/BookProviderContext'
function App() {

  return (
    <>
      <BookProviderContext>
        <Layout />
      </BookProviderContext>
    </>
  )
}

export default App
