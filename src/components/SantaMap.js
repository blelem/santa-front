import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Map, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'
import {fetchAllWishes} from '../actions'

import L from 'leaflet';

delete L.Icon.Default.prototype._getIconUrl;

L.Icon.Default.mergeOptions({
    iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),
    iconUrl: require('leaflet/dist/images/marker-icon.png'),
    shadowUrl: require('leaflet/dist/images/marker-shadow.png')
});


class SantaMap extends Component {
  state = {
    lat: 51.505,
    lng: -0.09,
    zoom: 2,
  }

  constructor(props) {
    super(props)
    this.props.fetchAllWishes()
  }

  render() {
    console.log(this.props)
    const markers = this.props.wishes.map(marker=>( <Marker key={marker.wishId} position={[marker.lat, marker.lng]}></Marker>))
    const position = [this.state.lat, this.state.lng]
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer
          attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {markers}
      </Map>
    )
  }
}

export default connect(
  state => ({wishes: state.wishes
    
  }),
  { fetchAllWishes },
)(SantaMap)