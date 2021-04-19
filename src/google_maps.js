import {GoogleApiWrapper} from 'google-maps-react';
 
// ...
const api_key = process.env.REACT_APP_KEY;
 
export class MapContainer extends React.Component {

}
 
export default GoogleApiWrapper({
  apiKey: ({api_key})
})(MapContainer)