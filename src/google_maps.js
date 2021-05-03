import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
const api_key = process.env.REACT_APP_KEY;
const AnyReactComponent = ({ text }) => <div>{text}</div>;
 

    const SimpleMap = (props) =>{ 

        console.log(props);
        let center =  {
            lat: 59.95,
            lng: 30.33
          }
 let zoom = 2;

 

    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >
        {props.countries.map((data) => {     
            console.log(data.countryInfo.country);
            <div
            lat={data.countryInfo.lat}
            lng={data.countryInfo.long}
            text={data.countryInfo.country}
            style={{border:'1px solid black'}}
          > {data.countryInfo.country} </div>})
        }
      
        </GoogleMapReact>
      </div>
    );
  }

 
export default SimpleMap;