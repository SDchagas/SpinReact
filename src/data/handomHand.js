import { bar, barSuited } from "./cards";

export function RandomHand (){
    let card1 = bar[Math.floor(Math.random() * bar.length)];
    let card2 = bar[Math.floor(Math.random() * bar.length)];
    let nipe1 = barSuited[Math.floor(Math.random() * barSuited.length)];
    let nipe2 = barSuited[Math.floor(Math.random() * barSuited.length)];
    let indexc1 = bar.indexOf(card1);
    let indexc2 = bar.indexOf(card2);
    if (card1===card2){
       return[card1, card2, 'd', 'h'];}         
       else if (indexc1>indexc2){
          return[card1, card2, nipe1, nipe2];} else { return[card2, card1, nipe1, nipe2];
          }; 
       }