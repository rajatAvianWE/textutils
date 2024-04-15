import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light");

  const handleMode = ()=>{
    if(mode === 'light'){
      setMode('dark');
    }else{
      setMode('light');
    }
  }

  return (
    <>
      <Navbar title="WebDev24x7" home="Home" about="About WebDev24x7" contact="Contact WebDev24x7" mode={mode} handleMode={handleMode} />
      <div className='container bg-dark'>
        <TextForm label="Enter your text to transform" />
      </div>
    </>
  );
}

export default App;
