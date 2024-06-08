const express = require("express");
const router = express.Router();
const products = require("../services/products");
const verificarToken = require("../services/authMiddleware");
/* POST programming language */

router.post("/registrar", verificarToken, async function (req, res, next) {
  try {
    res.json(await products.registrar(req.body));
  } catch (err) {
    console.error(`Error creando el producto`, err.message);
    next(err);
  }
});


router.get('/Obtener', async function (req, res, next) {
  try {
    res.json(await products.ListaProductos());
  } catch (err) {
    console.error(`Error al obtener la lista de productos`, err.message);
    next(err);
  }
});

router.put('/actualizar/:id', verificarToken ,async function (req, res, next) {
  try {
    res.json(await products.actualizarProducto(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el producto`, err.message);
    next(err);
  }
});

router.delete('/eliminar/:id', verificarToken ,async function (req, res, next) {
  try {
    res.json(await products.eliminarProducto(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar el producto`, err.message);
    next(err);
  }
});

module.exports = router;
