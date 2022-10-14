import { RandomHand } from "./handomHand";
import { HandCompare } from './handCompare';

export function run() { //funçaõ que executa toda a verificação
    let blind = Math.floor(Math.random() * 14 + 1) //gera numero de blinds aleatório
    let position = 'BB'; //pos[Math.floor(Math.random() * pos.length)]
    //let rhand = RandomHand();
    console.log(blind)
    console.log (position)
    let rHand = RandomHand();
    HandCompare(rHand, blind)
    return [blind, position];
}