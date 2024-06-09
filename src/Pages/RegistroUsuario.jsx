import React from 'react';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../Style/RegistroUsuarios.css"

const RegistroUsuario = () => {
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
                    required
                  />
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="form-group">
                  <label htmlFor="rol">Rol:</label>
                  <select className="form-control" id="rol" required>
                    <option value="">Seleccione un rol</option>
                    <option value="administrador">Administrador</option>
                    <option value="usuario">Usuario</option>
                  </select>
                </div>
              </div>
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">
              Registrarse
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroUsuario;

