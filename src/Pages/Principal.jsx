import NavBar from "../Components/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';

const URL = "http://localhost:8080/usuario";

const Principal = () => {
  const [User, setUser] = useState([]);

  useEffect(() => {
    getUser();
  }, []);
  const getUser = async () => {
    try {
      const res = await axios.get(URL+"/Obtener");
      setUser(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <NavBar />
      <h1>Principal</h1>

      <div className="container-md">
        <table className="table">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">NOMBRE</th>
              <th scope="col">CORREO</th>
              <th scope="col">CEDULA</th>
            </tr>
          </thead>
          <tbody>
            {User.map((user) => (
              <tr key={user.idUsuario}>
                <th scope="row">{user.idUsuario}</th>
                <td>{user.Nombre}</td>
                <td>{user.Correo}</td>
                <td>{user.Cedula}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Principal;
