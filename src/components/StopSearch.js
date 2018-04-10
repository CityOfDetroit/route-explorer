import React, { Component } from 'react';
import _ from 'lodash';
import Card, { CardHeader, CardContent } from 'material-ui/Card';

import StopInput from './StopInput';
import StopsList from './StopsList';
import Stops from '../data/stops';

class StopSearch extends Component {
  constructor(props) {
    super(props);

    console.log(_.sampleSize(Object.values(Stops), 3))
    this.state = {
      allStops: (Object.values(Stops)),
      filteredStops: (_.sampleSize(Object.values(Stops), 3)),
      input: ''
    };

    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSearchDebounced = _.debounce(this.handleSearchDebounced, 200);
  }

  handleSearchChange(event) {
    this.setState({ input: event.target.value });
    this.handleSearchDebounced(event.target.value);
  }

  handleSearchDebounced(value) {

    if (value.length < 3) {
      return
    }

    const matched = []

    let values = value.split(" ")

    Object.values(this.state.allStops).forEach(st => {
      if(values.length > 1) {
        let stopDidMatch = values.every(val => {
          return ( (st.id.indexOf(val) > -1) || (st.name.toUpperCase().indexOf(val.toUpperCase()) > -1) )
        })
        if(stopDidMatch) { matched.push(st) };
      }
      else {
        if ( (st.id.indexOf(value) > -1) || (st.name.toUpperCase().indexOf(value.toUpperCase()) > -1) ) {
          matched.push(st);
        }
      }
    })

    this.setState({ filteredStops: matched });
  }

  render() {
    return (
      <Card>
        <CardHeader title="Find your stop" subheader="DDOT has more than 5,000 bus stops across Detroit, Hamtramck, Highland Park, Dearborn and Southfield" />
        <CardContent>
          <StopInput input={this.state.input} onSearchChange={this.handleSearchChange} />
          { this.state.filteredStops.length > 0 ? <StopsList stops={this.state.filteredStops} /> : '' }
        </CardContent>
      </Card>
    );
  }
}

export default StopSearch;
