import React from "react";
import './index.css'
class Header extends React.Component {
    render() {
        return (
            <div className="bgroxo">
                <svg id="icon" version="1.0" xmlns="http://www.w3.org/2000/svg"
 width="1212.000000pt" height="1108.000000pt" viewBox="0 0 1212.000000 1108.000000"
 preserveAspectRatio="xMidYMid meet">

<g transform="translate(0.000000,1108.000000) scale(0.100000,-0.100000)"
fill="#000000" stroke="none">
<path d="M4845 6976 c-87 -28 -129 -63 -455 -390 l-335 -336 1655 0 1655 0
370 370 370 370 -1610 -1 c-1271 0 -1618 -3 -1650 -13z"/>
<path d="M4849 5876 c-25 -6 -65 -24 -90 -38 -24 -15 -192 -175 -374 -357
l-330 -331 1105 0 1105 0 370 370 370 370 -1055 -1 c-803 0 -1066 -3 -1101
-13z"/>
<path d="M4425 4420 l-370 -370 555 0 555 0 370 370 370 370 -555 0 -555 0
-370 -370z"/>
</g>
                </svg>
                <h1>SpinTrainer V 0.0.1</h1>
            </div>
        );
    }
}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Header; //esporta essa função para que possamos recuperar em outro arquivo
