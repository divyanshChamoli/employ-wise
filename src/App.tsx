import { Route, Routes } from "react-router-dom"
import Home from "./Pages/Home"
import Login from "./Pages/Login"
import Edit from "./Pages/Edit"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home/> } />
      <Route path="/login" element={<Login/>} />
      <Route path="/edit/:id" element={<Edit/> } />
    </Routes>
  )
}

export default App
