import React from "react";
import { run } from "../../data/run";
import './index.css';

const Btns = (props) => {

    return (
        <div>
            <button className="btAction btn" onClick={run}>{props.text}</button>
        </div>
    );

}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Btns; 