import { RandomHand } from './handomHand';
const diams = [
    '♦',
    '#0000cd',
]
const clubs = [
      '♣',
     '#108d22']

const hearts = [
  '♥',
   '#b22222',   
]
const spades =[
    '♠',
    '#111111',  
]


export const infoCards = () => {

    let nSort = [diams, clubs, hearts, spades]
    const infoBar = nSort[Math.floor(Math.random() * nSort.length)];
    const infoBar2 = nSort[Math.floor(Math.random() * nSort.length)];
    
    if (RandomHand[2] === RandomHand[3]) {
        return [infoBar[0], infoBar[1], infoBar[0], infoBar[1]]
    
    } else {
        // const infoBar = nSort[Math.floor(Math.random() * nSort.length)];
        // nSort = nSort.filter(item => item > infoBar ); // pega o n sort e retira o item ja sorteado

        return [infoBar[0], infoBar[1], infoBar2[0], infoBar2[1]]    
        
    }
}