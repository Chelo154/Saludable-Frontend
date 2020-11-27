import './registerForm.css';
import '../saludableTextInput/saludableInput';
import SaludableInput from '../saludableTextInput/saludableInput';
import OptionButton from '../optionButton/optionButton';
import SaludableComboBox from '../saludableComboBox/saludableComboBox';
import { useState } from 'react';
import Axios from 'axios';



function RegisterForm()
{
    //Hooks
    const [dni,setDni] = useState("");
    const [nombre,setNombre] = useState("");
    const [apellido,setApellido] = useState("");
    const [fechaNacimiento,setFechaNacimiento] = useState("");
    const [usuario,setUsuario] = useState("");
    const [password,setPassword] = useState("");
    const [sexo,setSexo] = useState("");
    const [tratamiento,setTratamiento] = useState("");


    //Callbacks
    const  onDniChange = (value) => {
        setDni(value);
        console.log(dni);
    }

    const onApellidoChange = (value) =>{
        setApellido(value);
        console.log(apellido);
    }
    
    const onNombreChange = (value) =>{
        setNombre(value);
    }

    const onFechaNacimientoChange = (value) =>{
        setFechaNacimiento(value);
        console.log(fechaNacimiento);

    }

    const onUsuarioChange = (value) =>{
        setUsuario(value);
    }

    const onPasswordChange = (value) =>{
        setPassword(value);
    }

    const onSexoChange = (value) =>{
        setSexo(value);
    }

    const onTratamientoChange = (value) =>{
        setTratamiento(value);
        console.log(tratamiento);
    }

    //Funciones
    const registrarUsuario = () =>{
        
        var usuario = {
            "dni" : dni,
            "usuario" : usuario,
            "apellido" : apellido,
            "nombre" : nombre,
            "password" : password,
            "tratamiento" : tratamiento,
            "sexo" : sexo,
            "fechaNacimiento" : "01/01/2020"
            
        };
        const json = JSON.stringify(usuario)

        
        Axios.post('http://localhost:8080/paciente/registrar',usuario, {
                'Content-Type' : 'application/json'
        }).then(response => {
            if(response.status === 200){
                return response.data;
            }
        }).then(data => console.log(data)).catch(error => console.log(error));
      
    }
    
    //Estructrua
    return(
        <div className="form-card">
            <SaludableInput
                nombre={"Dni"}
                tipo={"number"}
                placeholder={"Ingrese su dni"}
                valor = {dni}
                onChangeCallback = {onDniChange}
            >                            
            </SaludableInput>

            <br></br>

            <SaludableInput
                nombre={"Apellido"}
                tipo={"text"}
                placeholder={"Ingrese su Apellido"}
                valor={apellido}
                onChangeCallback = {onApellidoChange}               
            ></SaludableInput>
            <br></br>

            <SaludableInput
                nombre={"Nombre"}
                tipo={"text"}
                placeholder={"Ingrese su Nombre"}
                valor ={nombre}
                onChangeCallback = {onNombreChange}
            ></SaludableInput>

            <br></br>

            <SaludableInput
                nombre={"Fecha de Nacimiento"}
                tipo={"date"}
                placeholder={"Ingrese su Fecha de nacimiento"}
                valor ={fechaNacimiento}
                onChangeCallback = {onFechaNacimientoChange}
            ></SaludableInput>            
            
            <br></br>

           <SaludableComboBox
                nombre={"Sexo"}
                opciones={["Masculino","Femenino","Otro"]}
                placeholder={"Ingrese sexo"}                
                onChangeCallback = {onSexoChange}                
           ></SaludableComboBox>

            <br></br>
           <SaludableComboBox
                nombre={"Tratamiento"}
                opciones={["Anorexia","Bulimia","Obesidad"]}
                placeholder={"Indique el tratamiento realizado"}                
                onChangeCallback = {onTratamientoChange}
           >
           </SaludableComboBox>

            <br></br>
            <SaludableInput
                nombre={"Usuario"}
                tipo={"text"}
                placeholder={"Ingrese su usuario"}
                valor = {usuario}
                onChangeCallback = {onUsuarioChange}
            ></SaludableInput>
            <br></br>

           
            <SaludableInput
                nombre={"Contraseña"}
                tipo={"password"}
                placeholder={"Ingrese password"}
                valor = {password}
                onChangeCallback = {onPasswordChange}
            ></SaludableInput>

            <br></br>

            <OptionButton opcion={"Registrar"} funcion={registrarUsuario}></OptionButton>
            

        </div>
    );
}

export default RegisterForm;