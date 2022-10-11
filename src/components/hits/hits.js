import React from "react";

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
             <div><h3>Acertos:  {this.state.hits}</h3></div>
             <div><h3>%: {this.state.percent}</h3></div>
          </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Hits; 