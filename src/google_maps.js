import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react';
import React from 'react';
const api_key = process.env.REACT_APP_KEY;

export class MapContainer extends React.Component {
  render() {
    return (
      <Map google={this.props.google} zoom={14}>
 
        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />
 
      </Map>
    );
  }
}
 
export default GoogleApiWrapper({
  apiKey: (api_key)
})(MapContainer)