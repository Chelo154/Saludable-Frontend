import './optionButton.css';
import '../fonts.css';

function OptionButton({opcion,funcion}){
    return (
        <div>
            <button className="optionButton saludable-text-normal" onClick={funcion}>{opcion}</button>
        </div>
    );
}

export default OptionButton;