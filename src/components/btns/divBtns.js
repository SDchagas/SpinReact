import React from "react";
import Btns from "./btns";
import './index.css';

const text = ['All-in', 'Check', 'Fold']

class DivBtns extends React.Component {
    render() {
        return (
            <div className="btns">
            { text.map(()=>{
                return <Btns text={text} />
            })}</div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default DivBtns; 