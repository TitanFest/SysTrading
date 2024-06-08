const express = require("express");
const router = express.Router();
const Rol = require("../services/Rol");

/* POST programming language */
router.get('/Obtener', async function (req, res, next) {
  try {
    res.json(await Rol.ListaRol());
  } catch (err) {
    console.error(`Error al obtener la lista de Rol`, err.message);
    next(err);
  }
});

router.post("/registrar", async function (req, res, next) {
  try {
    res.json(await Rol.RegistrarRol(req.body));
  } catch (err) {
    console.error(`Error no se puede crear Rol`, err.message);
    next(err);
  }
});

router.put('/actualizar/:id', async function (req, res, next) {
  try {
    res.json(await Rol.actualizarRol(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el Rol`, err.message);
    next(err);
  }
});

router.delete('/eliminar/:id', async function (req, res, next) {
  try {
    res.json(await Rol.eliminarRol(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar el Rol`, err.message);
    next(err);
  }
});

module.exports = router;