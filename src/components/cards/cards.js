import React from "react";
import './index.css';

class Cards extends React.Component {
    render() {
        return (
            <div>
                <div id="cards">
                    <div className="Lhand"> 1</div>
                    <div className="Rhand"> 2</div>
                </div>
            </div>
        );
    }
}


//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Cards; //esporta essa função para que possamos recuperar em outro arquivo
