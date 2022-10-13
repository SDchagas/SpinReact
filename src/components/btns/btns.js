import React from "react";
import './index.css';

class Btns extends React.Component {
  state = {
    
  }
    render() {
        return (
          <div className="btns" id="divBotoes">
             <button className="btAction btn">3x-call </button>
          </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Btns; 