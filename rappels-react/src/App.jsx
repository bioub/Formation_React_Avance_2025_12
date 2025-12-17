import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import './App.css'
import Select from './Select'
import TodoList from './TodoList';
import Clock from './Clock';
import Hello from './Hello';
// import { read, utils } from 'xlsx';

const _colors = ['Rouge', 'Vert', 'Bleu'];

function App() {
  console.log('Render App');
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    document.title = `Il est ${now.toLocaleTimeString()}`;
  }, []);
  
    useEffect(() => {
      const interval = setInterval(() => {
        setNow(new Date());
      }, 3000);
  
      // Cleanup function pour éviter les fuites mémoire
      return () => clearInterval(interval);
    }, []);
  
  const [color, setColor] = useState('Bleu');
  const [name, setName] = useState('Romain');
  const [showClock, setShowClock] = useState(true);
  const selectNameRef = useRef(null);


   function handleNameChange(newName) {
    setName(newName);
  }

  const couleurs = useMemo(() => ['Cyan', 'Magenta', 'Jaune'], []);
  // const handleColorChange = useMemo(() => (newColor) => {
  //   setColor(newColor);
  //   selectNameRef.current.openMenu();
  // }, []);
  const handleColorChange = useCallback((newColor) => {
    setColor(newColor);
    selectNameRef.current.openMenu();
  }, []);

  async function runXLSX() {
    const { read, utils } = await import('xlsx');
    const f = await fetch("https://docs.sheetjs.com/pres.numbers");
    const ab = await f.arrayBuffer();

    /* parse */
    const wb = read(ab);

    /* generate array of presidents from the first worksheet */
    const ws = wb.Sheets[wb.SheetNames[0]]; // get the first worksheet
    const data = utils.sheet_to_json(ws); // generate objects
  

    /* update state */
    console.log(data); // show the data in console
    // console.log(write);
  }

  return (
    <>
      <Hello name={123}  />
      {/* <Select value={color} items={couleurs} onValueChange={handleColorChange} />
      <Select value={color} items={['Rouge', 'Vert', 'Bleu']} onValueChange={handleColorChange} renderItem={(item) => <i>{item}</i>} />
      <Select value={name} items={['Romain', 'Alice', 'Bob']} onValueChange={handleNameChange} ref={selectNameRef} /> */}
      <div className='menu'>
        <a href="#">Accueil</a>
        <a href="#">À propos</a>
        <a href="#">Contact</a>
      </div>
      <TodoList />

      <h2>Clock Clock</h2>
      <button onClick={() => setShowClock(!showClock)}>Hide/Show Clock</button>
      {showClock && <Clock />}

      <h2>App Clock : </h2>
      <div className="Clock">{now.toLocaleTimeString()}</div>
    
    
      <button onClick={runXLSX}>Run XLSX</button>
    </>
  )
}

export default App
