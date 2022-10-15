import React from "react";
import Btns from "./btns";
import './index.css';

const TextBtns = [{
    text: 'All-in',
    clas: 'allin',
},
{
    text: 'check',
    clas: 'ck', 
},
{
    text: 'fold',
    clas: 'fold', 
}]

const DivBtns = () =>{
    
    return (
        <div className="btns">
        { TextBtns.map(TextBtns=>{
            return <Btns text={TextBtns.text} />
        })}</div>
    );
    
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default DivBtns; 

//map cria um botão para cada item do objeto