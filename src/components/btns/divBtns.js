import React from "react";
import Btns from "./btns";
import './index.css';
import { run } from '../../data/run';
import {  RandomHand } from '../../data/handomHand';
import { infoCards } from "../../data/nipes";

const DivBtns = (props) =>{
    
    const exec = () => {
        props.setInfohero(run)
        props.setCards(RandomHand)
        props.setIcards(infoCards)
        // props.setHits()
    }
    
    return (
        <div className="btns">
            <Btns text={'All-in'} />
            <Btns text={'Check'}  onClick={()=> {
                exec();
            }} />
            <Btns text={'Fold'} />
            <Btns text={'iso 2x call'} />
            <Btns text={'iso 2x fold'} />
            <Btns text={'iso 2,5x call'} />
            <Btns text={'iso 2,5x fold'} />
            <Btns text={'iso 3x call'} />
            <Btns text={'iso 3x fold'} />
            <Btns text={'iso 3,5x call'} />
            <Btns text={'iso 3,5x fold'} />
            <Btns text={'iso 4x call'} />
            <Btns text={'iso 4x fold'} />
            <Btns text={'iso 4,5x call'} />
            <Btns text={'iso 4,5x fold'} />
        </div>
    );
    
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default DivBtns; 

//map cria um botão para cada item do objeto
// //{ TextBtns.map(TextBtns=>{
//     return <Btns text={TextBtns.text}/>
// })}