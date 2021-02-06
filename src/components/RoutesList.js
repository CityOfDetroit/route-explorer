import React from "react";

import {RouteSign} from './RouteSign'

const RoutesList = ({ routes }) => {

  const gridStyle = {
    gridTemplateColumns: `repeat(auto-fit, minmax(250px, 1fr))`,
    gridGap: `.5rem`,
    boxSizing: "border-box",
    WebkitOverflowScrolling: "touch",
    height: 'auto'
  };

  return (
    <div className="grid p-0" style={gridStyle}>
      {
        routes.map(r => (<RouteSign route={r} key={r.short} />))
      }
    </div>
  );
};

export default RoutesList;
