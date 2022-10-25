import React, { useEffect, useState } from "react";
import Header from "./components/Header/header";
import Hits from "./components/hits/hits";
import Foot from './components/footer/footer';
import Table  from "./components/table/table";
import Cards from "./components/cards/cards";
import InfoHero from "./components/infohero/infohero";
import DivBtns from './components/btns/divBtns';
import { diams, hearts } from "./data/nipes";
import { run } from './data/run';
import { RandomHand } from './data/handomHand';
import Provider from "./components/contexts/context";


const App = ()=> {

    const [cards, setCards] = useState(['A','T'])
    const [infohero, setInfohero] = useState([0,'BB'])
   function teste () {
    setInfohero(run)
   }
    useEffect(() => {
     
    },[])

    return (
    <Provider>
        <Header />
        <Hits />
        <Table />
        <Cards nipesL={diams.nipe} nipesR={hearts.nipe} 
        colorR={hearts.color}
        rcard={cards[0]} lcard= {cards[1]} />
        <InfoHero bb={infohero[0]} pos={infohero[1]} />
        <DivBtns state = {infohero} teste={teste} 
        setInfohero={setInfohero}
        setCards={setCards}/>
        <Foot />
    </Provider>
);
}

//passando propriedades para o componente: aqui definimos o nome da propriede
// que sera enviado pelo arquivo profile.js
export default App;


// o arquivo App é o que vai renderizar na tela, chamando pela tag <Profile /> por exemplo
//e no outro arquivo tera o codigo que sera chamado 