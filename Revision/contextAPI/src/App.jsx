import Login from "./components/Login"
import Profile from "./components/Profile"
import ContextProvider from "./context/ContextProvider"

function App() {

  return (
    <>
      <h1 className="bg-slate-900 text-white text-center p-4 mb-6">This Main Components</h1>
      <ContextProvider>
        <Login />
        <Profile />
      </ContextProvider>
    </>
  )
}

export default App
