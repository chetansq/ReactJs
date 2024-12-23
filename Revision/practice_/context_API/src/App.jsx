import Profile from "./components/Profile"
import Login from "./components/Login"
import Context_provider from "./context/Context_provider"

function App() {

  return (
    <>
      <Context_provider>
        <Login />
        <Profile />
      </Context_provider>
    </>
  )
}

export default App
