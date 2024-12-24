import Button from "./components/Button"
import Home from "./components/Home"
import UserContextProvider from "./context/UserContextProvider"

function App() {

  return (
    <>
      <UserContextProvider>
        <Button />
        <Home />
      </UserContextProvider>
    </>
  )
}

export default App
