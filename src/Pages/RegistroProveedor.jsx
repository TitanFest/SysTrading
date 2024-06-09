import React from 'react';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/RegistroProveedor.css';
import { useState } from 'react';
import axios from 'axios';

const RegistroProveedor = () => {

  const [Nombre, setNombre] = useState("");
  const [Telefono, setTelefono] = useState("");
  const [Correo, setCorreo] = useState("");
  


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/proveedor/registrar", {
        "Nombre": Nombre,
		"Telefono": Telefono,
		"correo": Correo
      });
      setNombre("");
      setTelefono("");
      setCorreo("");
       
      if(response.status===200){ 
        alert("Proveedor creado correctamente")
    }else{
        alert("El proveedor ingresado no es valido")
    }

    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }

  };

  return (
    <>
      <NavBar />
      <div className="registro-proveedor-container d-flex justify-content-center align-items-center">
        <div className="registro-proveedor-card shadow-lg rounded p-4">
          <h1 className="text-center mb-4">Registro de Proveedor</h1>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="nombre">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="nombre"
                placeholder="Ingrese el nombre del proveedor"
                value={Nombre}
                onChange={(e) => setNombre(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="telefono">Teléfono:</label>
              <input
                type="tel"
                className="form-control"
                id="telefono"
                placeholder="Ingrese el teléfono del proveedor"
                value={Telefono}
                onChange={(e) => setTelefono(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="correo">Correo electrónico:</label>
              <input
                type="email"
                className="form-control"
                id="correo"
                placeholder="Ingrese el correo electrónico del proveedor"
                value={Correo}
                onChange={(e) => setCorreo(e.target.value)}
                required
              />
            </div>
            <button onClick={handleLogin} type="submit" className="btn btn-primary w-100 mt-4">
              Registrar Proveedor
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroProveedor;
