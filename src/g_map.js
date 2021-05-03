import React, { Component } from 'react';
import { GoogleMap, LoadScript,Marker,InfoWindow } from '@react-google-maps/api';
const api_key = process.env.REACT_APP_KEY;
const containerStyle = {
  width: '1000px',
  height: '1000px'
};

const center = {
  lat: -3.745,
  lng: -38.523
};

const MyComponents = (props) =>{ 
    console.log(props);
    return (
      <LoadScript
        googleMapsApiKey={api_key}
      >
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={1}
        >
        {props.countries.map((data,i) => { 
            <Marker
                    key={i}
                    id={i}
                    position={{
                              lat:data.countryInfo.lat,
                              lng: data.countryInfo.long
                          }}
                          onClick={() => console.log("You clicked me!")}
                      >
                      </Marker> })}
       
          <></>
        </GoogleMap>
      </LoadScript>
    )
  }


 
export default MyComponents;