import { useState } from 'react'
import './App.css'
import Select from './Select'



function App() {
  const [color, setColor] = useState('Bleu');

  function handleColorChange(newColor) {
    setColor(newColor);
  }

  return (
    <>
      <Select value={color} items={['Rouge', 'Vert', 'Bleu']} onColorChange={handleColorChange} />
      <div className='menu'>
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
      </div>
    </>
  )
}

export default App
