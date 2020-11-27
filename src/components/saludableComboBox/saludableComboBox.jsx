import './saludableComboBox.css';
import '../fonts.css'
function SaludableComboBox({nombre,opciones,placeholder,valor,onChangeCallback}){
    return(
        <div>
            <label className="saludable-text-normal">{nombre}</label>
            <select name={nombre} placeholder={placeholder} value={valor} onChange={(e) => onChangeCallback(e.target.value)}>
              {opciones.map(elemento =>
                <option value={elemento}>{elemento}</option>
            )}
            </select>
            
        </div>
    ); 
}

export default SaludableComboBox;