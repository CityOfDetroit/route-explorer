import React from 'react';
import PropTypes from 'prop-types';

import Schedules from '../data/schedules.js';
import RouteHeader from './RouteHeader';
import RouteMap from './RouteMap';
import RouteDetails from './RouteDetails';
import Helpers from '../helpers';

/** Top level component for /route/{#} page */
class BusRoute extends React.Component {
  constructor(props) {
    super(props);

    this.onTabsChange = this.onTabsChange.bind(this);
  }

  onTabsChange(event) {
    console.log(event);
  }
 
  render() {
    const thisRoute = Schedules[this.props.match.params.name];
    
    return (
      <div className="BusRoute" style={{ background: Helpers.colors['background'] }}>
        <RouteHeader number={this.props.match.params.name} page={this.props.match.url.split("/").slice(-1)} />
        <RouteMap route={thisRoute} />
        <RouteDetails id={this.props.match.params.name} />
      </div>
    );
  }
}

BusRoute.propTypes = {
  match: PropTypes.shape({
    isExact: PropTypes.bool,
    params: PropTypes.shape({
      name: PropTypes.string,
    }),
    path: PropTypes.string,
    url: PropTypes.string,
  }).isRequired,
}

export default BusRoute;
