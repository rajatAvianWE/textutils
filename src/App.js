import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title="WebDev24x7" home="Home" about="About WebDev24x7" contact="Contact WebDev24x7" />
      <div className='container'>
        <TextForm label="Enter your text for analyze" />
      </div>
    </>
  );
}

export default App;
