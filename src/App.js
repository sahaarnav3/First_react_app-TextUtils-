import './App.css';
// import About from './components/About';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';



function App() {

  return (
    //you can only return one tag.
    <>
      <Navbar title="TextUtils" aboutText="About Us" />
      <div className="container my-3">
        {/* <About /> */}
        <TextForm heading="Enter the text to analyze below" />
      </div>

    </>
  );
}

export default App;
