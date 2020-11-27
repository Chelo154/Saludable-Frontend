import '../fonts.css'


function SaludableYesNoOption({pregunta,nombre,onSelectedCallback}){

    const setYes = () =>{
        onSelectedCallback(true);
    }
    const setNo = () =>{
        onSelectedCallback(false);
    }

    return(        
        <div className="saludable-text-normal">
            <label>{pregunta}</label>
            <div>
                <input type="radio" id="yes" name={nombre} value="yes" onClick={setYes}></input>
                <label for="yes">Si</label> 
                <br></br>
                <input type="radio" id="no" name={nombre} value="no" onClick={setNo}></input>
                <label for="no">No</label> 
                <br></br>
            </div>            
        </div>
    );

}

export default SaludableYesNoOption;