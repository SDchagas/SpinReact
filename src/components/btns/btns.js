import './index.css';

const Btns = (props) => {


    return (
        <div>
            <button className="btAction btn" onClick={props.onClick}>{props.text}</button>
        </div>
    );

}
//aqui colocamos a propriedade, e no outro arquivo ela recupera;
export default Btns; 