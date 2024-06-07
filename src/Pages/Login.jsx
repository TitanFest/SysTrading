import "../Style/Login.css"
import { useNavigate} from 'react-router-dom';
import { useState } from "react";

const Login = () => {
    const navigate = useNavigate();
    const [Usuario,setUsuario] = useState(""); 
    const [Contraseña, setContraseña] = useState("");
    
    const handleLogin = (event) => {
        event.preventDefault(); 
        validar(Usuario,Contraseña,navigate);
      };

        return (
        <div className="Contenedor">
            <h1>Inicio de sesion</h1>
            <form >
                <input type="text" id="user" placeholder="Usuario:" 
                value={Usuario}
                onChange={(e) => setUsuario(e.target.value)}/>

                <div className="Password-key">
                    <input type="password" id="Key" placeholder="Contraseña" 
                    value={Contraseña}
                    onChange={(e) => setContraseña(e.target.value)}/>
                </div>

                <div className="btn" onClick={handleLogin} >Iniciar sesion</div>
                
            </form>

            <p id="Respuesta" value="" ></p>
        </div>);
}

function validar(Usuario,Contraseña,navigate){
    
    const Redireccionar = ()=>{navigate('Principal')}
    if(Usuario==="Admin" && Contraseña==="Admin"){
        Redireccionar();
    }else{
        document.getElementById("Respuesta").innerHTML="Usuario o contraseña incorrectos";
    }

}

export default Login;