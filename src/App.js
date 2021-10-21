import './App.css';
import {useState} from 'react';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';


function App() {
  const [mode, setMode] = useState('light'); // whether dark mode is enabled or not
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }

  const toggleMode = () => {
    document.body.style.height = '750px';
    if(mode === 'light') {
      setMode('dark');
      document.body.style.background = 'linear-gradient(to bottom, #780206, #061161)';
      document.body.style.color = 'white';
      showAlert("Dark mode has been enabled", "success");
    }
    else {
      setMode('light');
      document.body.style.background = 'white';
      document.body.style.color = 'black';
      showAlert("Light mode has been enabled", "success");
    }
  }
  return (
    //you can only return one tag.
    <>
      <Navbar title="TextUtils" aboutText="About Us" mode={mode} toggleMode={toggleMode}/>
      <Alert alert={alert}/>
      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter the text to analyze below" showAlert={showAlert}/>
      </div>

    </>
  );
}

export default App;
