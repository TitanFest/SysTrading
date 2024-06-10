import React from 'react';
import NavBar from '../Components/NavBar';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../Style/RegistroProductos.css';
import { useState } from 'react';
import axios from 'axios';

const RegistroProducto = () => {  

  const [name, setname] = useState("");
  const [unit_price, setunit_price] = useState("");
  const [cantidad, setcantidad] = useState("");
  const [image, setimage] = useState("");
  


  const handleLogin = async (event) => {
    event.preventDefault();
    try {
      const response = await axios.post("http://localhost:8080/Products/registrar", {
        "name": name,
		    "unit_price": unit_price,
		    "cantidad": cantidad,
        "image" : image
      });
      setname("");
      setunit_price("");
      setcantidad("");
       
    if(response.status===200){ 
        alert("Producto creado correctamente")
    }else{
        alert("Producto ingresado no valido")
    }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error al crear Producto");
    }

  };

  return (
    <>
      <NavBar />
      <div className="registro-producto-container d-flex justify-content-center align-items-center">
        <div className="registro-producto-card shadow-lg rounded p-4">
          <h1 className="text-center mb-4">Registro de Producto</h1>
          <form>
            <div className="form-group mb-3">
              <label htmlFor="name">Nombre:</label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Ingrese el nombre del producto"
                value={name}
                onChange={(e) => setname(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="unit_price">Precio</label>
              <input
                type="number"
                className="form-control"
                id="precio"
                min="0"
                placeholder="Ingrese el precio del producto"
                value={unit_price}
                onChange={(e) => setunit_price(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="cantidad">Cantidad:</label>
              <input
                type="number"
                className="form-control"
                id="cantidad"
                placeholder="Ingrese la cantidad que desea registrar"
                value={cantidad}
                onChange={(e) => setcantidad(e.target.value)}
                required
              />
            </div>
            <div className="form-group mb-3">
              <label htmlFor="image">Imagen:</label>
              <input
                type="file"
                className="form-control"
                id="image"
                name="image" 
                accept="image/*"
                value={image}
                onChange={(e) => setimage(e.target.value)}
                required
              />
            </div>
            <button onClick={handleLogin} type="submit" className="btn btn-primary w-100 mt-4">
              Registrar Producto
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegistroProducto;