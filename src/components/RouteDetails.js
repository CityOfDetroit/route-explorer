import React from 'react';
import _ from 'lodash';
import Card, { CardContent, CardHeader } from 'material-ui/Card';
import Divider from 'material-ui/Divider';

import routeDetails from '../data/routeDetails.js';
import PrintSchedule from './PrintSchedule';
import RouteBadge from './RouteBadge';

/** General service info about a route within BusRoute */
const RouteDetails = ({ id }) => {
  const obj = _.filter(routeDetails, r => { return id === r.number.toString() })[0];

  return (
    <div className="details">
      <Card>
        <CardHeader title={<RouteBadge id={id} showName />} />
        <CardContent>
          {obj.description}
          <div style={{ marginTop: 15 }}>
            <PrintSchedule routePdf={obj.pdf} />
          </div>
        </CardContent>
        {["Monday-Friday", "Saturday", "Sunday/Holiday"].map((d, i) => (
          <div key={i}>
            {obj.services[d] ?
            <div>
              <Divider />
              <Card key={i}>
                <CardHeader
                  title={d}
                  subheader={obj.services[d].service_hours.length === 1 ? `${obj.services[d].service_hours[0]} (see schedule for all times)` : `${obj.services[d].service_hours[0]} - ${obj.services[d].service_hours[1]} (see schedule for all times)`} />
                <CardContent>
                  <table className="w-100">
                    <tbody>
                      {obj.services[d].frequency.map((f, i) => (
                        <tr key={i}>
                          <td className='w-50 bg-light-gray pa2'>{_.capitalize(f[0])}</td>
                          <td className='w-50 bg-light-gray pa2'>Every <span className='fw7'>{f[1]}</span> minutes</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </div>
            : <Card key={i}><CardHeader title={d} subheader="No service" /></Card> }
          </div>
        ))}
      </Card>
    </div>
  );
}

export default RouteDetails;
