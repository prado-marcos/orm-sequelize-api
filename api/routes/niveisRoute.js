const { Router } = require("express");
const NivelController = require("../controllers/NivelController.js");

const routes = Router();

routes
    .get("/niveis", NivelController.listarNiveis)
    .get("/niveis/:id", NivelController.acessarNivelPorId)
    .post("/niveis", NivelController.criarNivel)
    .post("/niveis/:id/restore", NivelController.restaurarNivel)
    .put("/niveis/:id", NivelController.atualizarNivel)
    .delete("/niveis/:id", NivelController.excluirNivel);

module.exports = routes;
