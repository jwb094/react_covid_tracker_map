// import logo from './logo.svg';
 import './App.css';
import React,{useEffect,useState} from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';
//import Maps from './google_maps.js';
import Maps from './gmaps.js';

import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
function App() {

  const [latest,setLatest] = useState([]);
  const [results,setresults] = useState([]);
  useEffect(() => { //What to do after rendering
    axios
      .all([
        axios.get("https://corona.lmao.ninja/v2/all"),
        axios.get("https://corona.lmao.ninja/v2/countries")
      ])
        .then(ResponseArr =>{
          setLatest(ResponseArr[0].data);
          setresults(ResponseArr[1].data);
        })
        .catch(err => {
          console.log(err);
        });
    
    
 
  }, []);

  const date = new Date(parseInt(latest.updated));
  const lastUpdated = date.toString();
  console.log(setresults);
  return (
   <Container fluid>
   <Row>
        <Col>
            <Card className='text-center' bg="secondary" text='white' style={{margin:"10px"}}>
                  
                    <Card.Body>
                      <Card.Title>Cases</Card.Title>
                      <Card.Text>{latest.cases}</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                      <small>Last updated {lastUpdated}</small>
                    </Card.Footer>
              </Card>
        </Col>
        <Col>
        <Card className='text-center' bg="danger" text='white' style={{margin:"10px"}}>
                  
                  <Card.Body>
                    <Card.Title>Death</Card.Title>
                    <Card.Text>{latest.deaths}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                  </Card.Footer>
            </Card>
        </Col>
        <Col>
        <Card className='text-center' bg="success" text='white' style={{margin:"10px"}}>
                  
                  <Card.Body>
                    <Card.Title>Recovered</Card.Title>
                    <Card.Text>{latest.deaths}</Card.Text>
                  </Card.Body>
                  <Card.Footer>
                    <small>Last updated {lastUpdated}</small>
                  </Card.Footer>
            </Card>
        </Col>
    </Row>
    <Row>
      <Maps Countries={results}/>
    </Row>

    </Container>
  );
}

export default App;
