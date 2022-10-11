import React from "react";
import './index.css';

class Cards extends React.Component {
    render() {
        return (
            <div>
                <div id="cards">
                </div>
            </div>
        );
    }
}


//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Cards; //esporta essa função para que possamos recuperar em outro arquivo
