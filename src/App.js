import React from "react";
import Header from "./components/header";
import Foot from "./components/footer";
import Table from "./components/table";
import Hits from "./components/hits";
import Btns from "./components/btns";

class App extends React.Component {
   render (){
    return (
    <body className="flex colum">
        <header className="flex center">
            <Header/>
        </header>
        <div className="room">
          <div className="flex flex-end">      
            <Table />            
            <Hits />
          </div>
        </div>
        <div id="divBotoes">
          <Btns/>
          <Btns />
          <Btns />
          <Btns />
        </div>
        <footer>
          <Foot />
        </footer>
    </body>
);
}
}
//passando propriedades para o componente: aqui definimos o nome da propriede
// que sera enviado pelo arquivo profile.js
export default App;


// o arquivo App é o que vai renderizar na tela, chamando pela tag <Profile /> por exemplo
//e no outro arquivo tera o codigo que sera chamado 