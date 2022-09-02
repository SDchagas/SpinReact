import React from "react";

class Foot extends React.Component {
    render() {
        return (
            <div>
                <h6 id="TextFooter" className="marginL">By SDchagas - 2022</h6>
            </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Foot; //esporta essa função para que possamos recuperar em outro arquivo
