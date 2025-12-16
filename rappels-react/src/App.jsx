import { useState } from 'react'
import './App.css'
import Select from './Select'



function App() {
  const [color, setColor] = useState('Bleu');
  const [name, setName] = useState('Romain');

  function handleColorChange(newColor) {
    setColor(newColor);
  }

   function handleNameChange(newName) {
    setName(newName);
  }

  return (
    <>
      <Select value={color} items={['Rouge', 'Vert', 'Bleu']} onValueChange={handleColorChange} />
      <Select value={name} items={['Romain', 'Alice', 'Bob']} onValueChange={handleNameChange} />
      <div className='menu'>
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
      </div>
    </>
  )
}

export default App
