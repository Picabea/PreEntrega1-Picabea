import { useState } from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar.jsx'

import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'


function App() {

  return (
    <>
    <header>
      <NavBar/>
    </header>
    
    <ItemListContainer bebida="vodka"/>
    </>
  )
}

export default App
