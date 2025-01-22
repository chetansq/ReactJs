import Layout from "./layout/Layout"
import './App.css'
import ExpenseProvider from "./context/ExpenseProvider"
function App() {

  return (
    <>
      <ExpenseProvider>
        <Layout />
      </ExpenseProvider>
    </>
  )
}

export default App
