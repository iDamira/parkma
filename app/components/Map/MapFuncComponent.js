import React from 'react';
import ReactDOM from 'react-dom';
import {Gmaps, Marker, InfoWindow, Circle} from 'react-gmaps';

const coords = {
  lat: 40.7128,
  lng: -74.0059
};

const Mapa = React.createClass({
  render() {
    return (
      <Gmaps
        width={'1280px'}
        height={'500px'}
        lat={coords.lat}
        lng={coords.lng}
        zoom={12}
        loadingMessage={''}
        params={{v: '3.exp', key: ''}}
        onMapCreated={this.onMapCreated}>
        <Marker
          lat={coords.lat}
          lng={coords.lng}
          draggable={true}
          onDragEnd={this.onDragEnd} />
        <InfoWindow
          lat={coords.lat}
          lng={coords.lng}
          content={'GA is somwhere here!'}
          onCloseClick={this.onCloseClick} />
        <Circle
          lat={coords.lat}
          lng={coords.lng}
          radius={100}
          onClick={this.onClick} />
      </Gmaps>
    )
  }

});

export default Mapa;
