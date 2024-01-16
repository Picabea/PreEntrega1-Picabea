import './App.css'

import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

import NavBar from './components/NavBar/NavBar.jsx'
import ItemCount from "./components/ItemCount/ItemCount.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"

function App() {

  const [view, setView] = useState("")

  return (
    <>
    <BrowserRouter>
      <header>
        <NavBar/>
      </header>
      
      <Routes>
        <Route path="/" element={<ItemListContainer/>}/>
        <Route path="/category/:categoria" element={<ItemListContainer/>}/>
        <Route path="/item/:id" element={<ItemDetailContainer/>}/>
        <Route path="*" element={<h1>Error 404</h1>}/>
      </Routes>
    </BrowserRouter>
    
    {/* <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agregagada ", quantity)}/> */}
    </>
    
  )
}

export default App

// "/" --> ItemListContainer       ------ Si tiene una categoria(filtro) --> "/category/:id"
// "/item/:id" --> ItemDetailsContainer
// "/cart" --> Cart
// "/chechout" --> Checkout