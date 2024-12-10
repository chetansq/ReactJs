import Layout from "./website/Layout"
import NewPage from "./website/NewPage"
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <Layout />
      {/* <NewPage /> */}

      <ToastContainer />
    </>
  )
}

export default App
