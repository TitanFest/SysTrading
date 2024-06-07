const express = require("express");
const router = express.Router();
const users = require("../services/users");

/* POST programming language */
router.get('/Obtener', async function (req, res, next) {
  try {
    res.json(await users.ListaUsuarios());
  } catch (err) {
    console.error(`Error al obtener la lista de usuarios`, err.message);
    next(err);
  }
});

router.post("/registrar", async function (req, res, next) {
  try {
    res.json(await users.registrar(req.body));
  } catch (err) {
    console.error(`Error while creating programming language`, err.message);
    next(err);
  }
});

router.post("/login", async function (req, res, next) {
    try {
      res.json(await users.login(req.body));
    } catch (err) {
      console.error(`Error al ingresar el usuario`, err.message);
      next(err);
    }
});

router.put('/actualizar/:id', async function (req, res, next) {
  try {
    res.json(await users.actualizarUsuario(req.params.id, req.body));
  } catch (err) {
    console.error(`Error al actualizar el usuario`, err.message);
    next(err);
  }
});

router.delete('/eliminar/:id', async function (req, res, next) {
  try {
    res.json(await users.eliminarUsuario(req.params.id));
  } catch (err) {
    console.error(`Error al eliminar el usuario`, err.message);
    next(err);
  }
});

module.exports = router;
