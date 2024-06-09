import React from "react";
import NavBar from "../Components/NavBar";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Style/RegistroUsuarios.css";
import axios from "axios";
import { useState, useEffect } from "react";

const RegistroUsuario = () => {
  const [Nombre, setNombre] = useState("");
  const [Apellido, setApellido] = useState("");
  const [Correo, setCorreo] = useState("");
  const [Cedula, setCedula] = useState("");
  const [FechaNac, setFechaNac] = useState("");
  const [Contraseña, setContraseña] = useState("");

  const [Rol, setRol] = useState([]);
  const [rolseleccion, setSeleccion] = useState("");

  useEffect(() => {
    getUser();
  }, []);

  const getUser = async () => {
    try {
      const res = await axios.get("http://localhost:8080/Rol/Obtener");
      setRol(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLogin = async (event) => {
    event.preventDefault();
    try {

      const response = await axios.post(
        "http://localhost:8080/usuario/registrar/" +rolseleccion,
        {
          Nombre: Nombre,
          Apellido: Apellido,
          Cedula: Cedula,
          Correo: Correo,
          FechaNac: FechaNac,
          Contraseña: Contraseña,
        }
      );
      setNombre("");
      setApellido("");
      setCorreo("");
      setCedula("");
      setFechaNac("");
      setContraseña("");

      if (response.status === 200) {
        alert("Usuario creado correctamente");
      } else {
        alert("El usuario ingresado no es valido");
      }

    } catch (error) {
      console.error("Error during login:", error);
      alert("An error occurred during login.");
    }
  };

  return (
    <>
      <NavBar />
      <div className="registro-container d-flex justify-content-center align-items-center">
        <div className="registro-card shadow-lg rounded p-4">
          <h1 className="text-center mb-4">Registro de Usuario</h1>
          <form>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="nombre"
                    placeholder="Ingrese su nombre"
                    value={Nombre}
                    onChange={(e) => setNombre(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="apellido">Apellido:</label>
                  <input
                    type="text"
                    className="form-control"
                    id="apellido"
                    placeholder="Ingrese su apellido"
                    value={Apellido}
                    onChange={(e) => setApellido(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="cedula">Cédula:</label>
                  <input
                    type="number"
                    className="form-control"
                    id="cedula"
                    placeholder="Ingrese su número de cédula"
                    value={Cedula}
                    onChange={(e) => setCedula(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="correo">Correo electrónico:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="correo"
                    placeholder="Ingrese su correo electrónico"
                    value={Correo}
                    onChange={(e) => setCorreo(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="fechaNacimiento">Fecha de nacimiento:</label>
                  <input
                    type="date"
                    className="form-control"
                    id="fechaNacimiento"
                    value={FechaNac}
                    onChange={(e) => setFechaNac(e.target.value)}
                    required
                  />
                </div>
              </div>
              <div className="col-md-6">
                <div className="form-group">
                  <label htmlFor="contrasena">Contraseña:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="contrasena"
                    placeholder="Ingrese su contraseña"
                    value={Contraseña}
                    onChange={(e) => setContraseña(e.target.value)}
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="rol">Rol:</label>
                  <select
                    className="form-control"
                    id="rol"
                    value={rolseleccion}
                    onChange={(e) => setSeleccion(e.target.value)}
                    required
                  >
                    {Rol.map((rol) => (
                      <option key={rol.idRol} value={rol.idRol}>
                        {rol.Nombre}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <button
              onClick={handleLogin}
              type="submit"
              className="btn btn-primary w-100 mt-4"
            >
              Registrar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroUsuario;
