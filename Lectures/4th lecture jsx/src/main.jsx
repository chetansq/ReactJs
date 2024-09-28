import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Todo from './Challange1.jsx'
import TodoList from './Challange2.jsx'
import TodoList1 from './Challange3.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <p>Challange 1</p>
    <Todo />
    <br />
    <p>Challange 2</p>
    <TodoList />
    <br />
    <p>Challange 3</p>
    <TodoList1 />
  </StrictMode>,
)
