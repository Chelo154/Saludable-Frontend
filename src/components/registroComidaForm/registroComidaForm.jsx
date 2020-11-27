const { useState } = require("react");
const { default: OptionButton } = require("../optionButton/optionButton");
const { default: SaludableInput } = require("../saludableTextInput/saludableInput");
const { default: SaludableYesNoOption } = require("../saludableYesNoOption/saludableYesNoOption");


/*

{
    "token" : "nqnzvubgycusbajvaxzi",
    "dniPaciente" : 123,
    "tipoComida" : "Almuerzo",
	"comidaPrincipal" : "Pollo",
	"comidaSecundaria"	: "Arroz",
	"bebida" : "Awa",
	"hayPostre" : false,
	"hayAlimentoDeseado" : false,	
	"hambre" : true
}

*/ 

function RegistroComidaForm(){
    
    
    // Hooks    
    const [dni,setDni] = useState(0);
    const [comidaPrincipal,setComidaPrincipal] = useState("");
    const [comidaSecundaria,setComidaSecundaria] = useState("");
    const [bebida,setBebida] = useState("");
    const [hayPostre,setHayPostre] = useState(false);
    const [postre,setPostre] = useState("");
    const [hayalimentoDeseado,setHayAlimentoDeseado] = useState(false);
    const [alimentoDeseado,setAlimentoDeseado] = useState("");
    const [hambre,setHambre] = useState(false);


    // Callbacks
    const onDniCallback = (value) =>{
        setDni(value);
    }

    const onComidaPrincipalCallback = (value) =>{
        setComidaPrincipal(value);
    }

    const onComidaSecundariaCallback = (value) =>{
        setComidaSecundaria(value);
    } 

    const onBebidaCallback = (value)=>{
        setBebida(value);
    }

    const onHayPostreCallback = (value) =>{
        setHayPostre(value);
        console.log(hayPostre);
    }

    const onPostreCallback = (value) =>{
        setPostre(value);
        
    }

    const onHayAlimentoDeseadoCallback = (value)=>{
        setHayAlimentoDeseado(value);
    }

    const onAlimentoDeseadoCallback = (value) =>{
        setHayAlimentoDeseado(value);
    }

    const onHambreCallback = (value) =>{
        setHambre(value);
    }

    return(



        <div className="form-card">

            <form>
                <SaludableInput
                 nombre={"Dni"}
                 tipo={"number"}
                 placeholder={"Ingrese dni"}
                 onChangeCallback={onDniCallback}

                ></SaludableInput>

                <br></br>

                <SaludableInput
                    nombre = {"ComidaPrincipal"}
                    tipo = {"text"}
                    placeholder = {"Ingrese el plato principal"}
                    valor  = {comidaPrincipal}
                    onChangeCallback = {onComidaPrincipalCallback}
                    
                ></SaludableInput>

                <br></br>

                <SaludableInput
                    nombre = {"ComidaSecundaria"}
                    tipo = {"text"}
                    placeholder = {"Ingrese el plato secundario"}
                    valor  = {comidaSecundaria}
                    onChangeCallback = {onComidaSecundariaCallback}
                ></SaludableInput>

                <br></br>

                <SaludableInput
                    nombre = {"Bebida"}
                    tipo = {"text"}
                    placeholder = {"Ingrese la bebida"}
                    valor  = {bebida}
                    onChangeCallback = {onBebidaCallback}
                ></SaludableInput>
                
                <br></br>

                <SaludableYesNoOption
                    pregunta = {"¿Comio postre?"}
                    onSelectedCallback = {onHayPostreCallback}
                    nombre ={"postre"}
                ></SaludableYesNoOption>

                <SaludableInput
                    nombre = {"Postre"}
                    tipo = {"text"}
                    placeholder = {"Ingrese el postre"}
                    valor  = {postre}
                    onChangeCallback = {onPostreCallback}
                ></SaludableInput>

                <br></br>

                <SaludableYesNoOption
                    pregunta = {"¿Deseó algún alimento?"}
                    onSelectedCallback = {onHayAlimentoDeseadoCallback}
                    nombre = {"alimentoAdicional"}
                ></SaludableYesNoOption>

                <br></br>

                <SaludableInput
                    nombre = {"AlimentoDeseado"}
                    tipo = {"text"}
                    placeholder = {"Ingrese el alimento deseado"}
                    valor  = {alimentoDeseado}
                    onChangeCallback = {onAlimentoDeseadoCallback}
                ></SaludableInput>

                <br></br>

                <SaludableYesNoOption
                    pregunta ={"¿Sintió Hambre?"}
                    onSelectedCallback = {onHambreCallback}
                    nombre ={"hambre"}
                ></SaludableYesNoOption>
                <br></br>

                <OptionButton opcion={"Registrar Comida"}></OptionButton>
                
            </form>  
        </div>
    );
}

export default RegistroComidaForm;