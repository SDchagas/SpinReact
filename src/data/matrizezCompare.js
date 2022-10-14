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
       } else if(piso25_allin.includes(i)){
          console.log('iso 2,5x - All in');
       } else{
          console.log('check');
       }
 
    } else if(ladoMatriz==='s'){
       if(sallin.includes(i)){      
           console.log('shove')
       } else if (siso25_allin.includes(i)){
          console.log('iso 2,5x - All in');
       } else {
          console.log("check");   
       }
    }else{
       if(oallin.includes(i)){
          console.log('all in');
       }else if(oiso25_fold.includes(i)){
          console.log('iso2x fold');
       }else{
          console.log('check');
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
       } else if(piso25_allin.includes(i)){
          console.log('iso 2,5x - All in');
       } else{
          console.log('check');
       }
 
    } else if(ladoMatriz==='s'){
       if(sallin.includes(i)){      
           console.log('shove')
       } else if (siso25_allin.includes(i)){
          console.log('iso 2,5x - All in');
       } else {
          console.log("check"); 
       }
    }else{
       if(oallin.includes(i)){
          console.log('all in');
       }else if(oiso25_fold.includes(i)){
          console.log('iso2,5x fold');
       }else{
          console.log('check');
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
       } else{
          console.log('iso 2,5x - All in');
       } 
 
    } else if(ladoMatriz==='s'){
       if(sallin.includes(i)){      
           console.log('shove')
       } else if (siso25_allin.includes(i)){
          console.log('iso 2,5x - All in');
       } else if(siso35_call.includes(i)){
          console.log('iso 3,5 call vs all in');
       }else {
          console.log("check");  
       }
    }else{
       if(oallin.includes(i)){
          console.log('all in');
       }else if(oiso35_fold.includes(i)){
          console.log('iso2,5x fold');
       }else if(oiso35_call.includes(i)){
          console.log('iso 3,5 fold vs all in');
       }else{
          console.log('check');
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
       } else if(piso40_call.includes(i)){
          console.log('iso 4x call vs all in');
       } else{
          console.log('iso 2,5x - All in');
       } 
 
    } else if(ladoMatriz==='s'){
       if(sallin.includes(i)){      
           console.log('shove')
       } else if (siso25_allin.includes(i)){
          console.log('iso 2,5x - All in');
       } else if(siso35_call.includes(i)){
          console.log('iso 4x call vs all in');
       }else {
          console.log("check");  
       }
    }else{
       if(oallin.includes(i)){
          console.log('all in');
       }else if(oiso25_fold.includes(i)){
          console.log('iso2,5x fold');
       }else if(oiso40_call.includes(i)){
          console.log('iso 4x call vs all in');
       }else if(oiso40_fold.includes(i)){
          console.log('iso 4x fold');
       } else {
          console.log('check');
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
        } else{
           console.log('iso 3x - All in');
        } 
  
     } else if(ladoMatriz==='s'){
        if(sallin.includes(i)){      
            console.log('All in')
        } else if (siso33_call.includes(i)){
           console.log('iso 3x - All in');
        } else if(siso45_allin.includes(i)){
           console.log('iso 4,5x call vs all in');
        }else {
           console.log("check");  
        }
     }else{
        if(oallin.includes(i)){
           console.log('all in');
        }else if(oiso30_fold.includes(i)){
           console.log('iso 3,0x fold');
        }else if(oiso45_call.includes(i)){
           console.log('iso 4,5x call vs all in');
        }else if(oiso45_fold.includes(i)){
           console.log('iso 4,5x fold');
        } else if(oiso3_call.includes(i)){
          console.log('iso 3x call')
        }
        else {
          console.log('check')
       }
 }}
 


//função que comparara a mão gerada com o array de mãos pares, em seguida verifica a ação correta
export function mtpares(apares, hand, bblind) {
    //leftHand.innerText = hand['0'];
    //rightHand.innerText = hand['1'];
    let left = hand[0].toString(); //converte o index 0 sempre para string, para que concatene numeros sem somalos
    let mao = left + hand['1'];
    let index = apares.indexOf(mao);
    console.log(index);
    console.log(mao);
    if (bblind < 6) {
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
export function mtsuiteds (asuiteds, hand,bblind){
   //leftHand.innerText = hand['0'];
   //rightHand.innerText = hand['1'];
   let left = hand[0].toString();   
   let mao = left+hand['1'];
   let index = asuiteds.indexOf(mao); 
   console.log(index);
   console.log(mao);
   if(bblind<6){
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
 export function mtofsuiteds(aofsuiteds, hand, bblind) {
    //leftHand.innerText = hand['0'];
    //rightHand.innerText = hand['1'];
    let left = hand[0].toString();
    let mao = left + hand['1'];
    let index = aofsuiteds.indexOf(mao);
    console.log(index);
    console.log(mao);
    if (bblind < 6) {
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
}