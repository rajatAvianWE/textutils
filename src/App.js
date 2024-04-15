import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';

function App() {
  const [mode, setMode] = useState("light");
  
  const handleMode = ()=>{
    if(mode === 'light'){
      document.body.style.backgroundColor = "gray";
      setMode('dark');
      handleAlert("This is dark mode", "success");
    }else{
      setMode('light');
      document.body.style.backgroundColor = "white";
      handleAlert("This is light mode", "success");
    }
  }

  const [alert, setAlert] = useState(null);
  const handleAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type,
    });
  }

  return (
    <>
      <Navbar title="WebDev24x7" home="Home" about="About WebDev24x7" contact="Contact WebDev24x7" mode={mode} handleMode={handleMode} />
      <Alert alert={alert} />
      <div className='container'>
        <TextForm label="Enter your text to transform"/>
      </div>
    </>
  );
}

export default App;
