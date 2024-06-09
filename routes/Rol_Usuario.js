const express = require("express");
const router = express.Router();
const Rol_Usuario = require("../services/Rol_Usuario");

/* POST programming language */
router.get('/Obtener', async function (req, res, next) {
  try {
    res.json(await Rol_Usuario.ListaRoles_Usuario());
  } catch (err) {
    console.error(`Error al obtener la lista de Rol`, err.message);
    next(err);
  }
});

router.post("/registrar", async function (req, res, next) {
  try {
    res.json(await Rol_Usuario.RegistrarRoles_Usuario(req.body));
  } catch (err) {
    console.error(`Error no se puede crear Rol`, err.message);
    next(err);
  }
});

router.put('/actualizar/:id', async function (req, res, next) {
  try {
    res.json(await Rol_Usuario.actualizarRoles_Usuario(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el Rol`, err.message);
    next(err);
  }
});

router.delete('/eliminar/:id', async function (req, res, next) {
  try {
    res.json(await Rol_Usuario.eliminarRoles_Usuario(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar el Rol`, err.message);
    next(err);
  }
});

module.exports = router;