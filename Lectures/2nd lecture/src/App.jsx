import { useState } from 'react'
import Card from './Card'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  let imgArr = ["https://images.unsplash.com/photo-1723199688073-0c18e53c321b?q=80&w=1530&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://media.istockphoto.com/id/1406022423/photo/woman-with-laptop-and-credit-card-at-home-online-payment-digital-banking-online-shopping.jpg?s=1024x1024&w=is&k=20&c=5a57RTPQzFW4HkaO0N97kbmLuHbpjtm-rMu6XdH-egY=", "https://images.unsplash.com/photo-1602526433901-9681fbf4c706?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", "https://images.unsplash.com/photo-1602524817552-1afd1d923ace?q=80&w=1587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"]
  return (
    <>
      {/* <Card tittle={"this is custom tittle"} text={"this is text that is passed by its parent as props to the child file"} imgLink={imgArr[0]}/>
      <Card tittle={"this is tittle of the second card"} text={"second card"} imgLink={imgArr[1]} /> */}
      {imgArr.map((cur, index) => {
        return <Card text={`this is text for image number ${index + 1}`} tittle={`This is tittle for ${index + 1} image`} imgLink={imgArr[index]}></Card>
      })}
    </>
  )
}

export default App
