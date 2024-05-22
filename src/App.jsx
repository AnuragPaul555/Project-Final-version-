import { useState } from 'react'
import Navbar from "./components/Navbar";
import './App.css'
import Manager from './components/Manager';

function App() {

  return (
    <>
      <Navbar />
      <Manager />
      <div>My ui</div>
    </>
  )
}

export default App
