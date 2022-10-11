import React from "react";
import Btns from "./components/btns/btns";
import Header from "./components/Header/header";
import Hits from "./components/hits/hits";
import Foot from './components/footer/footer';
import Table  from "./components/table/table";
import Cards from "./components/cards/cards";

class App extends React.Component {
   render (){
    return (
    <body>
        <Header />
        <Hits />
        <Table />
        <Cards />
        <Btns />
        <Foot />
    </body>
);
}
}
//passando propriedades para o componente: aqui definimos o nome da propriede
// que sera enviado pelo arquivo profile.js
export default App;


// o arquivo App é o que vai renderizar na tela, chamando pela tag <Profile /> por exemplo
//e no outro arquivo tera o codigo que sera chamado 