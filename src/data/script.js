const bar = [2, 3, 4, 5, 6, 7, 8, 9, 'T', 'J', 'Q','K', 'A']; //cartas do baralho
const barSuited = ['h', 'd']; //dois nipes apenas para iniciar
const pos = ['Sb', 'BB'];
let mpos = document.querySelector("#position");
mpos.innerText = '';
let bbs = document.querySelector("#bbs");
const newHand = document.querySelector("#new-hand");
const positblind = document.querySelector("#card-position");
let rodape = document.querySelector('footer'); //pega rodapé
let leftHand = document.querySelector("#left-card");
leftHand.innerText = '';
let rightHand = document.querySelector("#right-card");
rightHand.innerText = '';
let position = '';
let blind = 0; 
const hitMaker = document.querySelector("#hits"); //pega seção que mostra os acertos
const precision = document.querySelector("#percent"); //pega seção que mostra o aproveitamento
let nipeleft = document.querySelector('#nipeleft');
import {teste} from "./hubb.js"; //esta funcionando o import

//import { rs45_55 } from "./hubb.js";

//função que cria os botões
let btnAllin = document.createElement('button');
btnAllin.id = ('allin');
let btnCheck = document.createElement('button');
btnCheck.id = ('check');
let btnIso2xf = document.createElement('button');
btnIso2xf.id = ('iso2xf');
let btnIso2x = document.createElement('button');
btnIso2x.id = ('iso2call');
let btnIso25xAllin = document.createElement('button');
btnIso25xAllin.id = ('iso25call');
let btnIso25xFAllin = document.createElement('button');
btnIso25xFAllin.id = ('iso25f');
let btnIso35callxAllin = document.createElement('button');
btnIso35callxAllin.id = ('iso35call');
let btnIso35foldxAllin = document.createElement('button');
btnIso35foldxAllin.id = ('iso35f');
let btnIso4callxAllin = document.createElement('button');
btnIso4callxAllin.id = ('iso4call');
let btnIso4foldxAllin = document.createElement('button');
btnIso4foldxAllin.id = ('iso4f');
let btnIso45callxAllin = document.createElement('button');
btnIso45callxAllin.id = ('iso45call');
let btnIso45foldxAllin = document.createElement('button');
btnIso45foldxAllin.id = ('iso45f');
let btnIso3callxAllin = document.createElement('button');
btnIso3callxAllin.id = ('iso3call');
let btnIso3foldxAllin = document.createElement('button');
btnIso3foldxAllin.id = ('iso3f');
let btnJgAdaptada = document.createElement('button');
btnJgAdaptada.id = ('adapt');
let aviso = document.createElement('button');
let hitclass = 'hit'

function createButtons(posit, bigblind) {
    rodape.append(btnAllin);
    btnAllin.innerText = 'All-in';
    rodape.append(btnCheck);
    btnCheck.innerText = 'Check';

    if (posit == 'BB') {
        if (bigblind < 7) {
            rodape.append(btnIso2xf);
            btnIso2xf.innerText = '2x - Fold';
            rodape.append(btnIso2x);
            btnIso2x.innerText = '2x - Call';
        } else if (bigblind == 8 || bigblind == 7) {
            rodape.append(btnIso25xAllin);
            btnIso25xAllin.innerText = '2,5x - Call';
            rodape.append(btnIso35callxAllin);
            btnIso35callxAllin.innerText = '3,5x - Call';
            rodape.append(btnIso35foldxAllin);
            btnIso35foldxAllin.innerText = '3,5x - Fold';
        } else if (bigblind < 12 && bigblind > 8) {
            rodape.append(btnIso25xFAllin);
            btnIso25xFAllin.innerText = '2,5x - Fold';
            rodape.append(btnIso4callxAllin);
            btnIso4callxAllin.innerText = '4x - Call';
            rodape.append(btnIso4foldxAllin);
            btnIso4foldxAllin.innerText = '4x - Fold';
            rodape.append(btnIso25xAllin);
            btnIso25xAllin.innerText = '2,5x - All in';
        } else {
            rodape.append(btnIso45callxAllin);
            btnIso45callxAllin.innerText = '4,5x - Call';
            rodape.append(btnIso45foldxAllin);
            btnIso45foldxAllin.innerText = '4,5x - Fold';
            rodape.append(btnIso3callxAllin);
            btnIso3callxAllin.innerText = '3x - Call';
            rodape.append(btnIso3foldxAllin);
            btnIso3foldxAllin.innerText = '3x - Fold';
            rodape.append(btnJgAdaptada);
            btnJgAdaptada.innerText = 'Adapatar ao vilão';
        }

    } else {

        rodape.append(aviso);
        aviso.innerText = 'HUSB ainda em desenvolvimento';
    }
}

//array que contem as maos pareadas
const pares = ['AA', 'KK', 'QQ','JJ', 'TT', '99', '88', '77', '66', '55', '44', '33', '22',];
//array quecontem as mãos suiteds
const suiteds = ['AK', 'AQ','AJ', 'AT', 'A9', 'A8', 'A7', 'A6', 'A5', 'A4', 'A3', 'A2',
'KQ', 'KJ', 'KT', 'K9', 'K8', 'K7', 'K6', 'K5', 'K4', 'K3', 'K2',
'QJ', 'QT', 'Q9', 'Q8', 'Q7', 'Q6', 'Q5', 'Q4', 'Q3', 'Q2', 
'JT','J9', 'J8', 'J7', 'J6', 'J5', 'J4', 'J3', 'J2',
'T9', 'T8', 'T7', 'T6', 'T5', 'T4', 'T3', 'T2',
'98', '97', '96', '95', '94', '93', '92',
'87', '86', '85', '84', '83', '82', 
'76', '75', '74', '73', '72',
'65', '64', '63', '62',
'54', '53', '52',
'43', '42',
'32'];
//array que contem as mãos ofsuiteds
const ofsuiteds = ['AK', 
'AQ', 'KQ', 
'AJ', 'KJ', 'QJ', 
'AT', 'KT', 'QT', 'JT',
'A9', 'K9', 'Q9', 'J9', 'T9',
'A8', 'K8', 'Q8', 'J8', 'T8', '98',
'A7', 'K7', 'Q7', 'J7', 'T7', '97', '87',
'A6', 'K6', 'Q6', 'J6', 'T6', '96', '86', '76',
'A5', 'K5', 'Q5', 'J5', 'T5', '95', '85', '75', '65',
'A4', 'K4', 'Q4', 'J4', 'T4', '94', '84', '74', '64', '54', 
'A3', 'K3', 'Q3', 'J3', 'T3', '93', '83', '73', '63', '53', '43',
'A2', 'K2', 'Q2', 'J2', 'T2', '92', '82', '72', '62', '52', '42', '32'];

function rbb45_55 (i,ladoMatriz){
   const sallin = [0,1,4,5,6,7,8,9,10,11,15,16,17,18,19,20,21,22,30,31,40];
   const siso25_allin = [2,3];
   const pallin = [7,8,9,10,11,12];
   const piso25_allin = [3,4,5,6];
   const oallin = [0,1,2,3,4,6,7,10,11,12,15,16,17,21,22,23,28,29,30,36,37,38,39,
   45,46,47,48,49,55,56,57,58,59,66,67,68,69,70];
   const oiso25_fold = [24,41];

   if (ladoMatriz==='p'){
      if(pallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      } else if(piso25_allin.includes(i)){
         console.log('iso 2,5x - All in');
         btnIso2x.classList.add(hitclass);
      } else{
         console.log(check);
         btnCheck.classList.add(hitclass);
      }

   } else if(ladoMatriz==='s'){
      if(sallin.includes(i)){      
          console.log('shove')
          btnAllin.classList.add(hitclass);
      } else if (siso25_allin.includes(i)){
         console.log('iso 2,5x - All in');
         btnIso2x.classList.add(hitclass);
      } else {
         console.log("check");   
         btnCheck.classList.add(hitclass);
      }
   }else{
      if(oallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      }else if(oiso25_fold.includes(i)){
         console.log('iso2x fold');
         btnIso2xf.classList.add(hitclass);
      }else{
         console.log('check');
         btnCheck.classList.add(hitclass);
      }

   }   
}
function rbb6 (i,ladoMatriz){
   const sallin = [4,5,6,7,8,9,10,11,15,16,17,18,19,20,21,22,25,26,27,28,29,30,31,32];
   const siso25_allin = [0,1,2,3,12,13,14,23,24,33];
   const pallin = [6,7,8,9,10,11,12];
   const piso25_allin = [0,1,2,3,4,5];
   const oallin = [0,1,2,3,4,5,6,7,8,10,11,12,15,16,17,21,22,23,28,29,30,
   36,37,38,39,40,45,46,47,48,49,55,56,57,58,59,66,67,68,69,70];
   const oiso25_fold = [44,54,65];

   if (ladoMatriz==='p'){
      if(pallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      } else if(piso25_allin.includes(i)){
         console.log('iso 2,5x - All in');
         btnIso25xAllin.classList.add(hitclass);
      } else{
         console.log(check);
         btnCheck.classList.add(hitclass);
      }

   } else if(ladoMatriz==='s'){
      if(sallin.includes(i)){      
          console.log('shove')
          btnAllin.liclassList.add(hitclass);
      } else if (siso25_allin.includes(i)){
         console.log('iso 2,5x - All in');
         btnIso25xAllin.classList.add(hitclass);
      } else {
         console.log("check"); 
         btnCheck.classList.add(hitclass);  
      }
   }else{
      if(oallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      }else if(oiso25_fold.includes(i)){
         console.log('iso2,5x fold');
         btnIso25xFAllin.classList.add(hitclass);
      }else{
         console.log('check');
        btnCheck.classList.add(hitclass);
      }

   }   
}
function rbb7_8 (i,ladoMatriz){
   const sallin = [15,16,17,18,19,20,21,22];
   const siso25_allin = [0,1,25]
   const siso35_call = [2,3,4,3,5,6,7,8,9,10,11,12,13,14];
   const pallin = [9,10,11,12];
   const oallin = [15,16,17,21,22,23,28,29,30,36,37,38,39,45,
   46,47,48,55,56,57,58,66,67,68,69];
   const oiso35_fold = [61,72,73,74,75];
   const oiso35_call = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14];

   if (ladoMatriz==='p'){
      if(pallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      } else{
         console.log('iso 2,5x - All in');
         btnIso25xAllin.classList.add(hitclass);
      } 

   } else if(ladoMatriz==='s'){
      if(sallin.includes(i)){      
          console.log('shove')
          btnAllin.classList.add(hitclass);
      } else if (siso25_allin.includes(i)){
         console.log('iso 2,5x - All in');
         btnIso25xAllin.classList.add(hitclass);
      } else if(siso35_call.includes(i)){
         console.log('iso 3,5 call vs all in');
         btnIso35callxAllin.classList.add(hitclass);
      }else {
         console.log("check");  
         btnCheck.classList.add(hitclass); 
      }
   }else{
      if(oallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      }else if(oiso35_fold.includes(i)){
         console.log('iso2,5x fold');
         btnIso25xFAllin.classList.add(hitclass);
      }else if(oiso35_call.includes(i)){
         console.log('iso 3,5 fold vs all in');
         btnIso35foldxAllin.classList.add(hitclass);
      }else{
         console.log('check');
         btnCheck.classList.add(hitclass);
      }

   }   
}
function rbb9_11 (i,ladoMatriz){
   //suiteds
   const sallin = [9,10,11,];
   const siso25_allin = [0,1,12,13,14,15,16,17,23,24,25,33,42]
   const siso35_call = [2,3,4,5,6,7,8,57,58,59,63,64,68,72];
   //pares
   const pallin = [10,11,12];
   const piso40_call = [7,8,9];
   //ofsuiteds
   const oallin = [10,15,21,28,36,45,55,66,11,16,22,29,37,46,
   56,67,38,47,57,68,54,44];
   const oiso25_fold = [12,13,17,18,23,24,33,41,58,69];
   const oiso40_call = [0,1,2,3,4,5,6,7,8];
   const oiso40_fold = [50,59,60,61,62,70,71,72,73,74];

   if (ladoMatriz==='p'){
      if(pallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      } else if(piso40_call.includes(i)){
         console.log('iso 4x call vs all in');
         btnIso4callxAllin.classList.add(hitclass);
      } else{
         console.log('iso 2,5x - All in');
         btnIso25xAllin.classList.add(hitclass);
      } 

   } else if(ladoMatriz==='s'){
      if(sallin.includes(i)){      
          console.log('shove')
          btnAllin.classList.add(hitclass);
      } else if (siso25_allin.includes(i)){
         console.log('iso 2,5x - All in');
         btnIso25xAllin.classList.add(hitclass);
      } else if(siso35_call.includes(i)){
         console.log('iso 4x call vs all in');
         btnIso4callxAllin.classList.add(hitclass);
      }else {
         console.log("check");  
         btnCheck.classList.add(hitclass); 
      }
   }else{
      if(oallin.includes(i)){
         console.log('all in');
         btnAllin.classList.add(hitclass);
      }else if(oiso25_fold.includes(i)){
         console.log('iso2,5x fold');
         btnIso25xFAllin.classList.add(hitclass);
      }else if(oiso40_call.includes(i)){
         console.log('iso 4x call vs all in');
         btnIso4callxAllin.classList.add(hitclass);
      }else if(oiso40_fold.includes(i)){
         console.log('iso 4x fold');
         btnIso4foldxAllin.classList.add(hitclass);
      } else {
         console.log('check');
         btnCheck.classList.add(hitclass);
      }

   }
}
function rbb12_15 (i,ladoMatriz){
    //suiteds
    const sallin = [10,11,59,64,68,69,72];
    const siso45_allin = [3,4,5,6,7,50,57,58,63]
    const siso33_call = [0,1,2,12,13,14,15,23,24,33];
    //pares
    const pallin = [8,9,10,11,12];
    //ofsuiteds
    const oallin = [6,10,15,21,28,29,30,35,36,45,55,66,67];
    const oiso30_fold = [11,16,17,22,23,40,41,42,49,51,52,59,62,68,69,70];
    const oiso45_call = [0,1,3,4,7];
    const oiso45_fold = [50,61,73,74];
    const oiso3_call = [2];
 
    if (ladoMatriz==='p'){
       if(pallin.includes(i)){
          console.log('all in');
          btnAllin.classList.add(hitclass);
       } else{
          console.log('iso 3x - All in');
          btnIso3callxAllin.classList.add(hitclass);
       } 
 
    } else if(ladoMatriz==='s'){
       if(sallin.includes(i)){      
           console.log('All in')
           btnAllin.classList.add(hitclass);
       } else if (siso33_call.includes(i)){
          console.log('iso 3x - All in');
          btnIso3callxAllin.classList.add(hitclass);
       } else if(siso45_allin.includes(i)){
          console.log('iso 4,5x call vs all in');
          btnIso45callxAllin.classList.add(hitclass);
       }else {
          console.log("check");  
          btnCheck.classList.add(hitclass); 
       }
    }else{
       if(oallin.includes(i)){
          console.log('all in');
          btnAllin.classList.add(hitclass);
       }else if(oiso30_fold.includes(i)){
          console.log('iso 3,0x fold');
          btnIso3foldxAllin.classList.add(hitclass);
       }else if(oiso45_call.includes(i)){
          console.log('iso 4,5x call vs all in');
          btnIso45callxAllin.classList.add(hitclass);
       }else if(oiso45_fold.includes(i)){
          console.log('iso 4,5x fold');
          btnIso45foldxAllin.classList.add(hitclass);
       } else if(oiso3_call.includes(i)){
         console.log('iso 3x call')
         btnIso3callxAllin.classList.add(hitclass);
       }
       else {
         console.log('check')
         btnCheck.classList.add(hitclass);}
      }
}
//função que retorna duas cartas aleatórias
function RandomHand (){
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
      // função que envia as cartas para a matriz correta
function HandCompare(array, blind) {
    console.log(array);
    if (array[0] === array[1] && array[2] !== array[3]) {
        mtpares(pares, array, blind);
        console.log('par');
    } else if (array[0] !== array[1] && array[2] === array[3]) {
        mtsuiteds(suiteds, array, blind);
        console.log('suited');
    } else if (array[0] !== array[1] && array[2] !== array[3]) {
        mtofsuiteds(ofsuiteds, array, blind)
        console.log('ofsuited')
    };
};
//função que comparara a mão gerada com o array de mãos pares, em seguida verifica a ação correta
function mtpares(apares, hand, bblind) {
    leftHand.innerText = hand['0'];
    rightHand.innerText = hand['1'];
    let left = hand[0].toString(); //converte o index 0 sempre para string, para que concatene numeros sem somalos
    let mao = left + hand['1'];
    let index = apares.indexOf(mao);
    console.log(index);
    console.log(mao);
    if (blind < 6) {
        rbb45_55(index, 'p');
    } else if (bblind == 6) {
        rbb6(index, 'p');
    } else if (bblind > 6 && bblind < 9) {
        rbb7_8(index, 'p');
    } else if (bblind > 8 && bblind < 12) {
        rbb9_11(index, 'p');
    } else if (bblind > 11 && bblind < 16) {
        rbb12_15(index, 'p');
    } else {
        console.log('adaptativo');
    }
};

//função que compara a mao gerada com as suiteds
function mtsuiteds (asuiteds, hand,bblind){
   leftHand.innerText = hand['0'];
   rightHand.innerText = hand['1'];
   let left = hand[0].toString();   
   let mao = left+hand['1'];
   let index = asuiteds.indexOf(mao); 
   console.log(index);
   console.log(mao);
   if(blind<6){
      rbb45_55(index, 's');} 
      else if (bblind==6){
       rbb6(index, 's');
      }
      else if(bblind>6 && bblind<9){
       rbb7_8(index, 's');
      }
      else if (bblind>8 && bblind<12){
       rbb9_11(index, 's');
      }
      else if(bblind>11 && bblind<16){
       rbb12_15(index, 's');
      } 
    else {
    console.log('adaptativo');  
 } 
   };
//função que compara as mãos offsuited com a mão gerada
function mtofsuiteds(aofsuiteds, hand, bblind) {
    leftHand.innerText = hand['0'];
    rightHand.innerText = hand['1'];
    let left = hand[0].toString();
    let mao = left + hand['1'];
    let index = aofsuiteds.indexOf(mao);
    console.log(index);
    console.log(mao);
    if (blind < 6) {
        rbb45_55(index, 'o');
    } else if (bblind == 6) {
        rbb6(index, 'o');
    } else if (bblind > 6 && bblind < 9) {
        rbb7_8(index, 'o');
    } else if (bblind > 8 && bblind < 12) {
        rbb9_11(index, 'o');
    } else if (bblind > 11 && bblind < 16) {
        rbb12_15(index, 'o');
    } else {
        console.log('adaptativo');
    }
};
function run() { //funçaõ que executa toda a verificação
    blind = Math.floor(Math.random() * 14 + 1) //gera numero de blinds aleatório
    console.log(blind)
    position = 'BB'; //pos[Math.floor(Math.random() * pos.length)];
    createButtons(position, blind);
    console.log(position)
    mpos.innerText = position;
    bbs.innerText = blind
    let rhand = RandomHand();
    HandCompare(rhand, blind); //passa como parametro o array RandomHand para Hand Compare

}
/*newHand.addEventListener("click", (event) => {// eventode clique funcionando
   run();
});*/
//função que verifica se o botão clicado esta correto
function hitVerify(clashit) {
    let hit = 0
    let erro = 0
    if (clashit == hitclass) {
        hit = + 1;
        alert("acerto");
        hitMaker.innerText = hit;
    } else {
        alert('erro');
        let precisionCheck = ((hit + erro) / hit) * 100;
        precision.innerText = precisionCheck;
    }
}
rodape.addEventListener('click', function clickmap(event) {
    let classClick = event.target.className;
    //let posClick = event.target.id; alert(posClick);
    this.innerHTML = '';
    run();
    hitVerify(classClick); //passa a classe do botão clicado para a função que verifica o acerto ou erro
});

teste(); //esta funcionando o import
