import { ofsuiteds, suiteds, pares } from "./cards";
import { mtofsuiteds, mtpares, mtsuiteds } from "./matrizezCompare";

// função que envia as cartas para a matriz correta
export function HandCompare(array, blind) {
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