import React from "react";
import './index.css';

const Hits = ()=> {
        return (
          <div className="hits">     
             <div><h3>Acertos:  10</h3> </div>     
            <div><h3> Precisão (%) : 5%</h3> </div>
          </div>
        );
    }

//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Hits; 