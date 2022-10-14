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

class DivBtns extends React.Component {
    render() {
        return (
            <div className="btns">
            { TextBtns.map(TextBtns=>{
                return <Btns text={TextBtns.text} />
            })}</div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default DivBtns; 