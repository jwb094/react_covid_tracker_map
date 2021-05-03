import GoogleMapReact from 'google-map-react';
import React from 'react'
const AnyReactComponent = ({ text }) => <div></div>;
const api_key = process.env.REACT_APP_KEY;

const SimpleMap = (props) => {
 let zoom = 1;
  let center =  {
    lat: 59.95,
    lng: 30.33
  }
  // const countries = props.Countries.map((data,i) => {
  //     console.log(data.countryInfo.lat);
  //   <div>   
  //       {data.country}

  //   </div>
    

  // });
  console.log(props);
  // console.log(countries);
    return (
      // Important! Always set the container height explicitly
      <div style={{ height: '100vh', width: '100%' }}>
        <GoogleMapReact
          bootstrapURLKeys={{ key: api_key }}
          defaultCenter={center}
          defaultZoom={zoom}
        >

        <AnyReactComponent
            lat={59.955413}
            lng={30.337844}
            text="My Marker"
          />
        
        </GoogleMapReact>
      </div>
    );
  
}
 
export default SimpleMap;