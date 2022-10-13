import React from "react";
import './index.css';

class InfoHero extends React.Component {
    render() {
        return (
         <div>
            <div className="hero">
              <h3 id="heroT">Hero</h3>
            </div>
              <div className="stats box">
                 <h5>BBs: 12</h5>
                 <h5>Position: BB</h5>
              </div>
         </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default InfoHero; 