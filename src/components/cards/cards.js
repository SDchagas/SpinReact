import React from "react";
import './index.css';



class Cards extends React.Component {
    render() {
        return (
            <div id="cards">               
                <div className="Lhand green">
                    <h2 className="value">A</h2>
                    <div className="nipe">{this.props.nipesL}</div>
                </div>
                <div className="Rhand green">
                    <h2 className="value">T</h2>
                    <div className="nipe ">{this.props.nipesR}</div>
                </div>
            </div>
        );
    }
}


//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Cards; //esporta essa função para que possamos recuperar em outro arquivo


//pausV, COpaVerm, espada preto, Ouro Azul
// Paus- &clubs; ♣
// Ouro &diams; ♦
// Ouro &hearts; ♥
// Ouro &spades; ♠