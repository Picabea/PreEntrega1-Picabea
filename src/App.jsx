import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'
import CartWidget from './components/CartWidget/CartWidget.jsx'
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {

  return (
    <>
    <header>
      <NavBar/>
      <CartWidget/>
    </header>
    
    <ItemListContainer greeting="Lorem ipsum dolor sit."/>
    </>
  )
}

export default App
