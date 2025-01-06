import React, { useState } from "react";
import './weather.css'

function WeatherApp() {

    const [city , setCity] = useState('')
  return (
    <>
     <div className="container-fluid py-3 text-bg-warning">
        <div className="row align-items-center">
            <div className="col">
            <div id="box">
        <div id="moon">
          <div id="hole1" className="hole"></div>
          <div id="hole2" className="hole"></div>
          <div id="hole3" className="hole"></div>
          <div id="hole4" className="hole"></div>
          <div id="hole5" className="hole"></div>
          <div id="hole6" className="hole"></div>
          <div id="hole7" className="hole"></div>
        </div>
        <div id="floor1" className="floor light"></div>
        <div id="floor2" className="floor light"></div>
        <div id="floor3" className="floor light"></div>
        <div id="floor4" className="floor dark"></div>
        <div id="floor5" className="floor dark"></div>
        <div id="info">
          <span id="temp">15°</span>
          <div id="stats">
            <span>Wind: N 9Km/h</span>
            <span>Humidity: 75%</span>
          </div>
          <div id="next">
            <span>
              FRI<b>23° / 11°</b>
            </span>
            <span>
              SAT<b>25° / 15°</b>
            </span>
          </div>
        </div>
        <div id="drop1" className="drop"></div>
        <div id="drop2" className="drop"></div>
        <div id="drop3" className="drop"></div>
        <div id="drop4" className="drop"></div>
        <div id="drop5" className="drop away"></div>
        <div id="drop6" className="drop away"></div>
        <div id="drop7" className="drop away"></div>
        <div id="drop8" className="drop away"></div>
      </div>
            </div>
            <div className="col">
                <h2>Enter The City</h2>
                    <input type="text" className="form-control" onchange={(e) => setCity(e.target.value)} />
            </div>
        </div>
     </div>
    </>
  );
}

export default WeatherApp;
