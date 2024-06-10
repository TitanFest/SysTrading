import NavBar from "../Components/NavBar";
import 'bootstrap/dist/css/bootstrap.min.css';

const Principal = () => {
  return (
    <>
      <NavBar />
      <div className="container-md">
        <h1>Bienvenido a SysTrading</h1>
        <p>Tu tienda online de preferencia.</p>
        <p>Encuentra una amplia variedad de productos al mejor precio.</p>
      </div>
    </>
  );
};

export default Principal;
