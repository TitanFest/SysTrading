import { Link } from "react-router-dom";
import "../Style/NavBar.css";

const NavBar = () => {
  return (
    <nav>
      <ul>

        <li><Link to="/Principal">Inicio</Link></li>

        {/*Barra desplegable*/}
        <li className="dropdown">
          <Link to="#">Registro</Link>
          <ul className="dropdown-content">
            <li><Link to="/RegistroUsuario">Usuarios</Link></li>
            <li><Link to="/RegistroProducto">Productos</Link></li>
            <li><Link to="/RegistroProveedor">Proveedor</Link></li>
          </ul>
        </li>

        <li className="dropdown">
          <Link to="#">Ver</Link>
          <ul className="dropdown-content">
            <li><Link to="/VerUsuarios">Usuarios</Link></li>
            <li><Link to="/VerProductos">Productos</Link></li>
            <li><Link to="/VerProveedor">Proveedor</Link></li>
          </ul>
        </li>

        <li><Link to="/Pedido">Pedido</Link></li>
        <li><Link to="/Egreso">Egreso</Link></li>

        <li className="cerrar-sesion">
          <Link to="/">Cerrar sesion</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;

