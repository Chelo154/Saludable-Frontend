import './homecard.css';
import '../fonts.css';

import OptionButton from '../optionButton/optionButton';




function HomeCard(){

    const irALogin =()=>{
        window.location.href="http://localhost:3000/login";
    }
    
    const irARegistrar= () => {
        window.location.href="http://localhost:3000/register";
    }

    return (
    <div className="home">            
            <h1 className="saludable-title-big">Saludable</h1>
            <h2>Bienvenido</h2>
            <div className="btn-l">
                <OptionButton opcion={"Registrarse"} funcion={irARegistrar}></OptionButton>               
            </div>
            <div className="btn-r">
                <OptionButton opcion={"Iniciar Sesión"} funcion={irALogin}></OptionButton>
            </div>
           
            
            
    </div>
    );
}



export default HomeCard;