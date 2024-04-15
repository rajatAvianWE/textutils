import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {
  const [mode, setMode] = useState("light");

  const handleMode = ()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor = "gray";
      setMode('dark');
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
    }
  }

  return (
    <>
      <Navbar title="WebDev24x7" home="Home" about="About WebDev24x7" contact="Contact WebDev24x7" mode={mode} handleMode={handleMode} />
      <div className='container'>
        <TextForm label="Enter your text to transform" />
      </div>
    </>
  );
}

export default App;
