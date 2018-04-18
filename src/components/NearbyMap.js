import React, { Component } from 'react';
import StaticMap, {Marker} from 'react-map-gl';
import _ from 'lodash';
import buffer from '@turf/buffer';
import bbox from '@turf/bbox';
import WebMercatorViewport from 'viewport-mercator-project';
import {Link} from 'react-router-dom'

import {defaultMapStyle, routeLineIndex, walkRadiusLabelIndex} from '../style.js'
import MapSatelliteSwitch from './MapSatelliteSwitch';
import BusStop from './BusStop'
import Helpers from '../helpers.js';
import Stops from '../data/stops.js'

/** Map of users location and stops within walk radius */
class NearbyMap extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showSatellite: false,
      viewport: {
        latitude: this.props.coords.latitude,
        longitude: this.props.coords.longitude,
        zoom: 17,
        bearing: 0,
        pitch: 0,
        width: window.innerWidth > 650 ? window.innerWidth/2 : window.innerWidth,
        height: window.innerWidth > 650 ? 500 : 350
      }
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      showSatellite: event.target.checked ? true : false
    });
  }

  _resize = () => {
    if (window.innerWidth > 650) {
      this.setState({
        viewport: {
          ...this.state.viewport,
          width: window.innerWidth/2,
          height: 500
        }
      });
    } else {
      this.setState({
        viewport: {
          ...this.state.viewport,
          width: window.innerWidth,
          height: 350
        }
      });
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this._resize);
  }

  render() {
    const stopIds = Object.keys(this.props.stops).map(rid => {
      return this.props.stops[rid].map(r => r[2])
    });
    const flattenedStops = Array.from(new Set(_.flatten(stopIds)))

    let style = defaultMapStyle;
    style = style.setIn(['layers', 1, 'layout', 'visibility'], this.state.showSatellite ? 'visible' : 'none');
    _.forEach(style.toJS().layers, (l, i) => {
      if(l['source-layer'] === 'road') {
        style = style.setIn(['layers', i, 'layout', 'visibility'], this.state.showSatellite ? 'none' : 'visible')
      }
    });

    // show all nearby routes
    const routeIds = Object.keys(this.props.stops).map(rid => parseInt(rid, 10));
    style = style.setIn(['layers', routeLineIndex, 'filter'], ["in", "route_num"].concat(routeIds));

    // set data for geolocated source to coords
    const geolocatedPoint = [
      {
        "type": "Feature",
        "properties": {},
        "geometry": {
          "type": "Point",
          "coordinates": [
            this.props.coords.longitude,
            this.props.coords.latitude
          ]
        }
      }
    ];

    style = style.setIn(['sources', 'geolocated', 'data'], {"type": "FeatureCollection", "features": geolocatedPoint});

    // making some walking dist radii
    const walkRadii = buffer(geolocatedPoint[0].geometry, parseInt(this.props.currentRadius, 10)*1.25, {units: 'metres'});
    const radiusBbox = bbox(walkRadii);

    const viewport = new WebMercatorViewport({width: this.state.viewport.width, height: this.state.viewport.height});
    const bound = viewport.fitBounds(
    [
      [radiusBbox[0], radiusBbox[1]], 
      [radiusBbox[2], radiusBbox[3]]
    ],
      {padding: window.innerWidth > 650 ? 50 : window.innerWidth / 30}
    );

    style = style.setIn(['sources', 'walk-radius', 'data'], {"type": "FeatureCollection", "features": [walkRadii]});
    
    // set walk radius text
    style = style.setIn(['layers', walkRadiusLabelIndex, 'layout', 'text-field'], this.props.currentRadius === "200" ? `5 minute walk` : `10 minute walk`)


    return (
      <StaticMap
        width={this.state.viewport.width}
        height={this.state.viewport.height}
        latitude={bound.latitude}
        longitude={bound.longitude}
        zoom={bound.zoom}
        mapStyle={style}
        mapboxApiAccessToken={Helpers.mapboxApiAccessToken}>
        <MapSatelliteSwitch onChange={this.handleChange} />
        {flattenedStops.map(s => (
          <Marker latitude={Stops[s].lat} longitude={Stops[s].lon}>
            <Link to={{pathname: `/stop/${s}`}}>
              <BusStop style={{ height: 15, width: 15, borderRadius: 9999, background: 'rgba(0,0,0,.65)', padding: 2.5, color: 'white' }}/>
            </Link>
          </Marker>
        ))}
      </StaticMap> 
    );
  }
}

export default NearbyMap;
