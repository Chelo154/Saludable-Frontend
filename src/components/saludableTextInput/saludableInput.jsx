import '../fonts.css';
import './saludableInput.css';

function SaludableInput({nombre,tipo,placeholder,valor,onChangeCallback}){
    
    return(
        <div>
            <label className="saludable-text-normal">{nombre}: </label>
            <input name={nombre} className="saludable-input" 
            type={tipo} placeholder={placeholder}
            value={valor}
            onChange={(e)=>onChangeCallback(e.target.value)}
            ></input>
        </div>
    );
}

export default SaludableInput;