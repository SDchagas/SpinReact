import React from "react";

class Table extends React.Component {
    render() {
        return (
            <div>
                <div className="table colum">
                  <div id="cards" className="flex flex-end">
                  </div>
                </div>
            </div>
        );
    }
}


//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Table; //esporta essa função para que possamos recuperar em outro arquivo
