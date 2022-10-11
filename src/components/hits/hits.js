import React from "react";
import './index.css';

class Hits extends React.Component {
  state ={ //estado sempre um objeto
    hits: 0,
    percent:0
  }

  hitChange = () => {
    this.setState({hits:this.state.hits+1});
  };
    render() {
        return (
          <div className="hits">     
             <div><h3>Acertoa: </h3> </div>     
            <div><h3> Precisão (%) :</h3> </div>
          </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Hits; 