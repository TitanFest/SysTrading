const express = require("express");
const router = express.Router();
const Proveedor = require("../services/Proveedor");

/* POST programming language */
router.get('/Obtener', async function (req, res, next) {
  try {
    res.json(await Proveedor.ListaProveedores());
  } catch (err) {
    console.error(`Error al obtener la lista de proveedores`, err.message);
    next(err);
  }
});

router.post("/registrar", async function (req, res, next) {
  try {
    res.json(await Proveedor.RegistrarProveedor(req.body));
  } catch (err) {
    console.error(`Error al crear proveedor`, err.message);
    next(err);
  }
});

router.put('/actualizar/:id', async function (req, res, next) {
  try {
    res.json(await Proveedor.actualizarProveedor(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el proveedor`, err.message);
    next(err);
  }
});

router.delete('/eliminar/:id', async function (req, res, next) {
  try {
    res.json(await Proveedor.eliminarProveedor(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar el proveedor`, err.message);
    next(err);
  }
});

module.exports = router;
