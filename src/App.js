// import logo from './logo.svg';
 import './App.css';
import React,{useEffect,useState} from "react";
import Card from 'react-bootstrap/Card';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function App() {

  const [latest,setLatest] = useState([]);
  useEffect(() => { //What to do after rendering
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        //axios.get("https://corona.lmao.ninja/v2/countries")
      ])
        .then(ResponseArr =>{
          setLatest(ResponseArr[0].data);
        //  setresults(ResponseArr[1].data);
        })
        .catch(err => {
          console.log(err);
        });
    
    
 
  }, []);
  console.log(latest);
  return (
    <div className="App">
      <header className="App-header">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
