import './loginform.css';
import OptionButton from '../optionButton/optionButton';
import SaludableInput from '../saludableTextInput/saludableInput';
import { useState } from 'react';
import Axios from 'axios';


function LoginForm(){
    
    //Hooks
    const[dni,setDni] = useState(0);
    const[password,setPassword] = useState("");

    //Callbacks
    const onDniChange = (value) =>{
        setDni(value);
        console.log(dni);
    }

    const onPasswordChange = (value) =>{
        setPassword(value);
        console.log(password);
    }

    //Funciones
    const iniciarSesion = ()=>{
        /*
        alert("Iniciando Sesion");
        let url = 'http://localhost:8080/paciente/login';
        
        let usuario = {
            "dni" : dni,
            "password" : password
        };
        alert(usuario);
        Axios.post(url,usuario,{
            'Content-Type' : 'application/json'
        }).then(response => {
            if(response.status == 200){
                return response.data;
            }
        }).then(data => console.log(data));

        */
    }

    //Estructura
    return(
    <div className="form-card">
        <form>
            <SaludableInput 
            nombre={"Dni"} 
            tipo={"number"} 
            placeholder={"Ingrese dni:"}
            valor={dni}
            onChangeCallback={onDniChange}
            ></SaludableInput>

            <br></br>

            <SaludableInput 
            nombre={"Password"} 
            tipo={"password"} 
            placeholder={"Ingrese password"}
            valor={password}
            onChangeCallback ={onPasswordChange}
            ></SaludableInput>

            <br></br>
           
            <OptionButton opcion={"Login"} funcion={() => alert("algo")}></OptionButton>
        </form>
    </div>
    );

}


export default LoginForm;