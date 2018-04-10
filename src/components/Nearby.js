import React from 'react';
import PropTypes from 'prop-types';
import { geolocated } from 'react-geolocated';
import Card, { CardHeader, CardContent } from 'material-ui/Card'

import FeaturesNearLocation from './FeaturesNearLocation';
import RadiusPicker from './RadiusPicker';
import Helpers from '../helpers';

const radii = [
  { meters: '200', label: '5 minute walk' },
  { meters: '400', label: '10 minute walk' },
  { meters: '1000', label: '20 minute walk' }
];

/** Utility component for fetching current intersection */
class IntersectionFromCoords extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      intersection: ''
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  fetchData() {
    console.log(`${Helpers.geocoder}?location=${this.props.coords.longitude}%2C${this.props.coords.latitude}&returnIntersection=true&f=pjson`)
    fetch(`${Helpers.geocoder}?location=${this.props.coords.longitude}%2C${this.props.coords.latitude}&returnIntersection=true&f=pjson`)
      .then(response => response.json())
      .then(d => {
        this.setState({intersection: d.address.Street})
        console.log(d)
      })
  }

  render() {
    return (
      <span>You're near {this.state.intersection}</span>
    )
  }
}

/** Top level component for /nearby page */
class Nearby extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentRadius: '200',
      intersection: '',
    }

    this.onRadiusChange = this.onRadiusChange.bind(this);
  }

  onRadiusChange(event) {
    this.setState({
      currentRadius: event.target.value
    });
  }

  render() {
    return (
      !this.props.isGeolocationAvailable
      ? <div>Your browser does not support Geolocation</div> : !this.props.isGeolocationEnabled
        ? <div>Geolocation is not enabled</div> : this.props.coords
          ? 
            <Card>
              <CardHeader title="Service near you" subheader={<IntersectionFromCoords coords={this.props.coords} />} />
              <CardContent>
                <RadiusPicker radii={radii} currentRadius={this.state.currentRadius} onChange={this.onRadiusChange} />
                <FeaturesNearLocation coords={this.props.coords} meters={this.state.currentRadius} />
              </CardContent>
            </Card>
          : <div>Getting the location data&hellip;</div>
    );
  }
}

Nearby.propTypes = {
  isGeolocationAvailable: PropTypes.bool,
  isGeolocationEnabled: PropTypes.bool,
}

export default geolocated({
  positionOptions: {
    enableHighAccuracy: false,
  },
  userDecisionTimeout: 5000,
})(Nearby);
