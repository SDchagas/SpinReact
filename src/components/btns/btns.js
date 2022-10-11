import React from "react";
const textBtnsInitial = ['start', 'check', 'all-in'];
const textX = ['2x-', '2,5x-', '3x-', '3,5x-', '4x-','4,5x-'];
const foldCall = ['fold', 'call'];

class Btns extends React.Component {
  state = {
    
  }
    render() {
        return (
          <div>
             <button className="btAction btn">{textX[2]}{foldCall[1]} </button>
          </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Btns; 