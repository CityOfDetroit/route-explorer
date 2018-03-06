import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Helpers from '../helpers.js';
import _ from 'lodash';

import moment from 'moment';

class StopRouteSchedule extends Component {

  render() {
    return (
      <div className='pv2'>
        <span className="db f4 fw5 mt2 pb1">Today's scheduled stop times</span>    
        {this.props.schedules.length > 0 ? Helpers.cleanScheduleHeadsign(this.props.schedules[0]).stopRouteDirectionSchedules.map((rds, i) => (
          (<div className="pa2" key={i} style={{background: '#eee', margin: '.5em'}}>
          {this.props.multipleDirs ? <span className="dib">{_.capitalize(rds.tripHeadsign)}</span> : ``}
          <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'wrap', maxHeight: rds.scheduleStopTimes.length > 80 ? 350 : 150, alignContent: 'flex-start', textAlign: 'left' }}>
            {rds.scheduleStopTimes.map(sst => (
              <span className="ph2" key={sst.tripId} style={{fontSize: '.8em'}}>{moment(sst.arrivalTime).format('h:mma')}</span>
            ))}
          </div>
          </div>)
        )) : `No stops today.`}
      </div>
    )
  }
}

StopRouteSchedule.propTypes = {
  route: PropTypes.string,
  schedules: PropTypes.array
}

export default StopRouteSchedule;