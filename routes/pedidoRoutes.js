const express = require('express');
const router = express.Router();
const pedido = require("../services/pedido");

/*router.post('/CREAR', async function (req, res, next) {
    try {
      res.json(await pedidoController.crearPedido(req.body));
    } catch (err) {
      console.error(`Error al crear el pedido`, err.message);
      next(err);
    }
  });
  */
router.post('/registrar',async function (req, res, next) {
  try {
    res.json(await pedido.RegistrarPedido(req.body));
  } catch (err) {
    console.error(`Error no se puede crear Rol`, err.message);
    next(err);
  }
});

router.get('/Obtener', async function (req, res, next) {
  try {
    res.json(await pedido.ListaPedido());
  } catch (err) {
    console.error(`Error al obtener la lista de Rol`, err.message);
    next(err);
  }
});

/*
router.get('/Obtener/:id', async function (req, res, next) {
  try {
    res.json(await pedido.obtenerPedidoPorId(req.params.id));
  } catch (err) {
    console.error(`Error al actualizar el Rol`, err.message);
    next(err);
  }
});*/

router.put('/actualizar/:id', async function (req, res, next) {
  try {
    res.json(await pedido.actualizarPedido(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el Rol`, err.message);
    next(err);
  }
});

router.delete('/eliminar/:id', async function (req, res, next) {
  try {
    res.json(await pedido.eliminarPedido(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar el Rol`, err.message);
    next(err);
  }
});

module.exports = router;
