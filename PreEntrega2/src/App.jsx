import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import ItemCount from "./components/ItemCount/ItemCount.jsx"
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer.jsx"

function App() {

  return (
    <>
    <header>
      <NavBar/>
    </header>
    
    <ItemListContainer/>
    <ItemCount initial={1} stock={10} onAdd={(quantity) => console.log("Cantidad agreagada ", quantity)}/>
    <ItemDetailContainer id={1}/>
    </>
    
  )
}

export default App
