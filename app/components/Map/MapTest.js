import React from 'react';
import { GoogleMapLoader, GoogleMap, Marker } from 'react-google-maps';

function Mapa(props) {
  return (
  <GoogleMapLoader
    containerElement = {
      <div
        style={{height: "100%", width: "100%"}}
        className="the-map">

        <GoogleMap
          ref={(map) => console.log(map)}
          defaultZoom={15}
          defaultCenter={props.center}
          options={{streetViewControl: false, mapTypeControl: false}}
        >
        <Marker
          position={props.coordinates}
          place={props.place}
        />
        </GoogleMap>
              </div>
      }
)
};

export default Mapa;
