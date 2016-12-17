const React = require('react');
import Mapa from './MapFuncComponent.js';
import './Map.css';

const MapContainer = React.createClass({
  render: function(){
    return(
      <div className="map-container">
        <div className="map-render-view">
          <Mapa />
        </div>
      </div>
    )
  }
});

module.exports = MapContainer;
