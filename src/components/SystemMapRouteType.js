import routeTypes from '../data/routeTypes'
import React, { useState } from 'react'
import RouteNumber from "../components/RouteNumber";
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faChevronCircleRight, faChevronCircleDown, faEye, faEyeSlash, faChevronRight, faChevronDown } from '@fortawesome/free-solid-svg-icons';

const SystemMapRouteType = ({ routeType, filtered, clicked, setClicked, startsOpen = false }) => {

  let [open, setOpen] = useState(startsOpen)
  let [allVisible, setAllVisible] = useState(startsOpen)

  if (open) {
    return (
      <div key={routeType} >
        <div className="flex items-center justify-between px-2 py-2" style={{borderLeft: `5px solid #${routeTypes[routeType].color}`}}>
          <div >
            <h2 className="m-0 leading-tight">{routeType}</h2>
            <span className="text-xs font-thin leading-none">{routeTypes[routeType].desc}</span>
          </div>
          <div>
            <FontAwesomeIcon icon={allVisible ? faEye : faEyeSlash} className="mr-4" onClick={() => {
              let reduced = filtered.reduce((end, item) => { return { ...end, [item.short]: allVisible ? false : true } }, clicked)
              setClicked(reduced)
              setAllVisible(!allVisible)
            }} />
            <FontAwesomeIcon icon={faChevronDown} className="mr-3" size="lg" onClick={() => setOpen(false)} />
          </div>
        </div>
        <div className="px-4 grid grid-cols-2 bg-gray-200 py-1" style={{borderLeft: `5px solid #${routeTypes[routeType].color}`}}>
          {filtered.map((f, i) => (
            <div
              key={f.long}
              className={"flex items-center justify-between py-1"}>
              <div className={clicked[f.short] ? "flex items-center justify-between" : "flex items-center justify-between"}>
                <RouteNumber
                  number={f.short}
                  color={f.color}
                  size="small"
                  active={clicked[f.short]}
                  onClick={() => {
                    if (filtered.every(fl => (clicked[fl.short] === true || fl.short === f.short))) {
                      console.log(filtered, clicked)
                      console.log(`all on`)
                      setAllVisible(true)
                    }
                    if (filtered.filter(fa => fa.short !== f.short).every(fl => (clicked[fl.short] === false))) {
                      console.log(filtered, clicked)
                      console.log(`all off`)
                      setAllVisible(false)
                    }
                    setClicked({ ...clicked, [f.short]: !clicked[f.short] })
                  }}
                />
                <Link to={`/route/${f.short}`}>
                  <span className={clicked[f.short] ? "gibson-bold text-sm" : "text-sm"}>{f.long}</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    )
  }

  else {
    return (
      <div key={routeType} className="flex items-center justify-between px-2 py-2" style={{borderLeft: `5px solid #${routeTypes[routeType].color}`}}>
        <div>
          <h2 className="m-0 leading-tight">{routeType}</h2>
          <span className="text-xs font-thin leading-none">{routeTypes[routeType].desc}</span>
        </div>
        <div>
          <FontAwesomeIcon icon={allVisible ? faEye : faEyeSlash} className="mr-4" onClick={() => {
            let reduced = filtered.reduce((end, item) => { return { ...end, [item.short]: allVisible ? false : true } }, clicked)
            setClicked(reduced)
            setAllVisible(!allVisible)
          }} />
          <FontAwesomeIcon icon={faChevronRight} className="mr-3" size="lg" onClick={() => setOpen(true)} />
        </div>
      </div>
    )
  }
}

export default SystemMapRouteType;