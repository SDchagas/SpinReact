import React, { useEffect, useState } from "react";
import Header from "./components/Header/header";
import Hits from "./components/hits/hits";
import Foot from './components/footer/footer';
import Table  from "./components/table/table";
import Cards from "./components/cards/cards";
import InfoHero from "./components/infohero/infohero";
import DivBtns from './components/btns/divBtns';
import { run } from './data/run';
import Provider from "./components/contexts/context";
import { RandomHand } from './data/handomHand';


const App = ()=> {

    const [cards, setCards] = useState(['A','T'])
    const [infohero, setInfohero] = useState([0,'BB'])
    const [hits, setHits] = useState (['0', '0'])
    const [iCards, setIcards] = useState (['♠','#111111', '♠','#111111'])
  
    return (
    <>
        <Header />
        <Hits hits={hits[0]} percent={hits[1]}/>
        <Table />
        <Cards nipesL={iCards[0]} nipesR={iCards[2]} 
        colorR={iCards[1]} colorL={iCards[3]}
        rcard={cards[0]} lcard= {cards[1]} />
        <InfoHero bb={infohero[0]} pos={infohero[1]} />
        <DivBtns state = {infohero} 
        setInfohero={setInfohero}
        setCards={setCards}
        setHits={setHits}
        setIcards={setIcards}/>
        <Foot />
    </>
);
}

//passando propriedades para o componente: aqui definimos o nome da propriede
// que sera enviado pelo arquivo profile.js
export default App;


// o arquivo App é o que vai renderizar na tela, chamando pela tag <Profile /> por exemplo
//e no outro arquivo tera o codigo que sera chamado 