import React from "react";
import './index.css';
import { diams } from "../../data/nipes";


const Cards = (props) => {
    
    return (
        <div id="cards">               
            <div className="Lhand" style={{backgroundColor:diams.color}}>
                <h2 className="value">A</h2>
                <div className="nipe">{props.nipesL}</div>
            </div>
            <div className="Rhand" style={{backgroundColor:props.colorR}}>
                <h2 className="value">T</h2>
                <div className="nipe ">{props.nipesR}</div>
            </div>
        </div>
    );
    
}


//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Cards; //esporta essa função para que possamos recuperar em outro arquivo


//pausV, COpaVerm, espada preto, Ouro Azul
// Paus- &clubs; ♣
// Ouro &diams; ♦
// Ouro &hearts; ♥
// Ouro &spades; ♠