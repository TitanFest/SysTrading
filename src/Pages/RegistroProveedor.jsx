import React from 'react';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/RegistroProveedor.css';

const RegistroProveedor = () => {
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
                required
              />
            </div>
            <button type="submit" className="btn btn-primary w-100 mt-4">
              Registrar Proveedor
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroProveedor;
