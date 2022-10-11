import React from "react";
import Header from "./components/Header/header";

class App extends React.Component {
   render (){
    return (
    <body className="flex colum">
        <Header />
    </body>
);
}
}
//passando propriedades para o componente: aqui definimos o nome da propriede
// que sera enviado pelo arquivo profile.js
export default App;


// o arquivo App é o que vai renderizar na tela, chamando pela tag <Profile /> por exemplo
//e no outro arquivo tera o codigo que sera chamado 