import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import About from './components/About';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

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
    setTimeout(() => {
      setAlert(null);
    }, 1000);
  }

  return (
    <Router>
      <Navbar title="WebDev24x7" home="Home" about="About" contact="Contact" mode={mode} handleMode={handleMode} />
      <div className="container">
        <Alert alert={alert} />
        <Routes>
          <Route path="*" element={<TextForm label="Homepage" handleAlert={handleAlert} />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<TextForm label="Contact Us" handleAlert={handleAlert}/>} />
        </Routes>
        
        {/* <TextForm label="Enter your text to transform" handleAlert={handleAlert}/> */}
      </div>
    </Router>
  );
}

export default App;
