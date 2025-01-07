// import './App.css'
import BookAdd from './BookAdd'
import BookCard from './BookCard'
import BookProviderContext from './context/BookProviderContext'
function App() {

  return (
    <>
      <BookProviderContext>
        <BookAdd />
        <BookCard />
      </BookProviderContext>
    </>
  )
}

export default App
