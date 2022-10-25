import React from "react";
import './index.css';

const InfoHero = (props) => {

    return (
        <>
            <div className="hero">
                <h2 id="heroT">Hero</h2>
            </div>
            <div className="stats box">
                <h4>BBs: {props.bb} </h4>
                <h4>Position: {props.pos}
                </h4>
            </div>
        </>
    );
}

//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default InfoHero; 