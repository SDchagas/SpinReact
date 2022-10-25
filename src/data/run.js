import { RandomHand } from "./handomHand";
import { HandCompare } from './handCompare';


export function run() { //funçaõ que executa toda a verificação
    const min = Math.ceil(5)
    const max = Math.floor(15)
    let blind = Math.floor(Math.random() * (max-min + 1) + min) //gera numero de blinds aleatório
    let position = 'BB'; //pos[Math.floor(Math.random() * pos.length)]
    //let rhand = RandomHand();
    console.log(blind)
    console.log (position)
    let rHand = RandomHand();
    HandCompare(rHand, blind)
    return [blind, position];
}