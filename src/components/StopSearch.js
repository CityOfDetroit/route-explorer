import React, { Component } from 'react';

import StopInput from './StopInput';
import StopsList from './StopsList';
import Stops from '../data/stops';

class StopSearch extends Component {
  constructor(props) {
    super(props);

    this.state = {
      allStops: (Stops),
      filteredStops: (sampleStops),
      input: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    const val = event.target.value
    const matched = []

    Object.values(this.state.allStops).forEach(st => {
      if ( (st.id.indexOf(val) > -1) || (st.name.toUpperCase().indexOf(val.toUpperCase()) > -1) ) {
        matched.push(st);
      }
    })

    this.setState({ 
      input: event.target.value, 
      filteredStops: matched 
    });
  }

  render() {
    return (
      <div className="pa2">
        <span className="fw7 f3 pa2">Search Stops</span>
        <StopInput input={this.state.input} onSearchChange={this.handleSearchChange} />
        {( this.state.filteredStops.length > 0 || this.state.input.length > 0 ) ? <StopsList stops={this.state.filteredStops} /> : '' }
      </div>
    )
  }
}

const sampleStops = [
  {
    "id": "100",
    "name": "Chene & Gratiot",
    "dir": "SB",
    "lat": "42.35216032",
    "lon": "-83.031894233",
    "routes": ["10"],
    "transfers": [
      ["545", ["34"]],
      ["561", ["34"]]
    ]
  },
  {
    "id": "10145",
    "name": "Meijer Gateway",
    "dir": "EB",
    "lat": "42.445664",
    "lon": "-83.119705",
    "routes": ["17", "23"],
    "transfers": []
  },
  {
    "id": "8910",
    "name": "Rosa Parks Transit Center - Bay 5",
    "dir": "TC",
    "lat": "42.332146593",
    "lon": "-83.052536952",
    "routes": ["27"],
    "transfers": [
      ["1101", ["34"]],
      ["1102", ["21", "37", "34"]],
      ["8441", ["48", "25", "96", "34", "37", "92", "10", "7"]],
      ["8913", ["16"]],
      ["9954", ["53", "16"]],
      ["8891", ["19"]],
      ["8892", ["10"]],
      ["8911", ["7"]],
      ["8912", ["29"]],
      ["8915", ["49"]],
      ["8918", ["31"]],
      ["8926", ["53"]],
      ["8928", ["18"]],
      ["8933", ["23"]],
      ["8944", ["40"]],
      ["8945", ["37"]],
      ["8989", ["48"]],
      ["9970", ["25"]]
    ]
  }
];

export default StopSearch;
