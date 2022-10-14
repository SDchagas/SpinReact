import React from "react";
import { run } from "../../data/run";
import './index.css';


class InfoHero extends React.Component {
 
    render() {
        return (
         <div>
            <div className="hero">
              <h2 id="heroT">Hero</h2>
            </div>
              <div className="stats box">
                 <h4>BBs: {run[0]}</h4>
                 <h4>Position: {run[1]} </h4>
              </div>
         </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default InfoHero; 