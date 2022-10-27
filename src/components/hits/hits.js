import React from "react";
import './index.css';

const Hits = (props)=> {
        return (
          <div className="hits">     
             <div><h3>Acertos:  {props.hits}</h3> </div>     
            <div><h3> Precisão (%) : {props.percent}</h3> </div>
          </div>
        );
    }

//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Hits; 