import React from "react";
import { run } from "../../data/run";
import './index.css';

class Btns extends React.Component {
    render() {
        return (
          <div>
             <button className="btAction btn" onClick={run} >{this.props.text}</button>
          </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Btns; 