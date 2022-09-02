import React from "react";
//import PropTypes from 'prop-types';

class Profile extends React.Component {
    render() {
        return (
            <div>
                <h1>{this.props.name}</h1>
                <p>aos {this.props.age} anos esta aprendendo de verdade programação</p>
                <button>botao</button>
            </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Profile; //esporta essa função para que possamos recuperar em outro arquivo

// eslint-disable-next-line react/no-typos
//Profile.PropTypes = { // proptypes valida o tipo de dado que ta indo, string ou number
   // name: PropTypes.string
//} 