// import logo from './logo.svg';
import React, { useState } from 'react';
import './App.css';
// import Mydemo from './Mydemo';
import Navbar from './Navbar';
import TextBox from './TextBox';
import Alert from './Alert';
// import About from './About';
// import {
//   BrowserRouter as Router,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [mode, setmode] = useState('dark');
  const [alert, setAlter] = useState(null);
  const showAlter = (message, type) => {
    setAlter({
      msg: message,
      type: type,
    })
    setTimeout(() => {
      setAlter(null);
    }, 2000)
  }

  const toggle = () => {
    if (mode === 'dark') {
      setmode('light');
      document.body.style.backgroundColor = '#ebedf5';
      showAlter("light mode is Enable", "success");
      document.title = "Textutils -LightMode";
    }
    else {
      setmode('dark');
      document.body.style.backgroundColor = '#0c2036';
      showAlter("Dark mode is Enable", "success");
      document.title = "Textutils -DarkMode";
    }
  }
  return (
    // <Router>
    <div className='blank'>
      {/* <Navbar/> */}
      <Navbar title="Textutils" about="About" mode={mode} toggle={toggle} />
      {/* <Mydemo/> */}
      <Alert alert={alert} /> 
      <TextBox heading="Enter the text to analyze"  mode={mode} showAlter={showAlter}/>
        {/* <Routes>
          <Route exact path="/" element={<TextBox heading="Enter the text to analyze"  mode={mode} showAlter={showAlter}/>} />
          <Route exact path="/about" element={ <About mode={mode}/>} />
        </Routes> */}
      </div>
      // </Router> 
      );
  
}

      export default App;


