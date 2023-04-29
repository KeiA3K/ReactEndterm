import { useState } from "react"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Header from "./Components/Header"
import { Routes, Route } from "react-router-dom"

import Home from "./Pages/Home"
import Contacts from "../src/Pages/Contacts"
import About from "./Pages/About"
import Invest from "./Pages/Invest"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/invest" element={<Invest />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
    </>
  )
}

export default App
