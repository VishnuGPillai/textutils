// import logo from './logo.svg';
import Navbar from './components/Navbar';
import './App.css';
import TextForm from './components/TextForm';
import About from './components/About';
import Alert from './components/Alert';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";

import React, { useState } from 'react';
function App() {
  const [mode, setMode] = useState('light')
  const toggle = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#110b2e'
      document.body.style.color = 'white'
      ShowAlert('success', 'Dark mode was enabled')
      document.title = 'TextUtils - Dark Mode'
    }
    else {
      setMode('light');
      document.body.style.backgroundColor = 'white'
      document.body.style.color = 'black'
      ShowAlert('danger', 'light mode was enabled')
      document.title = 'TextUtils - Light Mode'

    }

  }
  const [alert, setAlert] = useState();
  const ShowAlert = (type, message) => {
    setAlert({
      type: type,
      message: message
    })
    setTimeout(setAlert, 2300)
  }
  return (
    <>
      <Navbar title="Modify your Text Now! " mode={mode} toggle={toggle} aboutUs="Nalle" />
      <Alert alert={alert} />
      <Router>
        <div className="container ">
          {/* code for navbar links outside navbar */}
          {/* <ul>
            <li className="nav-item">
              <Link className="nav-link active" to="/home">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about" >About</Link>
            </li>
          </ul> */}

          <Routes>
            <Route exact path="/home" element={<TextForm heading="Text Analyzer" mode={mode} ShowAlert={ShowAlert} />} />
            <Route exact path="/about" element={<About />} />
          </Routes>
        </div>
      </Router >
    </>
  );
}

export default App;
