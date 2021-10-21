import './App.css';
import {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not

  const toggleMode = () => {
    document.body.style.height = '750px';
    if(mode === 'light') {
      setMode('dark');
      document.body.style.background = 'linear-gradient(to bottom, #780206, #061161)';
      document.body.style.color = 'white';
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
    }
  }
  return (
    //you can only return one tag.
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter the text to analyze below" />
      </div>

    </>
  );
}

export default App;
