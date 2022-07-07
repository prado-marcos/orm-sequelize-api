const { Router } = require("express");
const TurmaController = require("../controllers/TurmaController.js");

const routes = Router();

routes
    .get("/turmas", TurmaController.listarTurmas)
    .get("/turmas/:id", TurmaController.acessarTurmaPorId)
    .post("/turmas", TurmaController.criarTurma)
    .put("/turmas/:id", TurmaController.atualizarTurma)
    .put("/turmas/:id/restore", TurmaController.restaurarTurma)
    .delete("/turmas/:id", TurmaController.excluirTurma);

module.exports = routes;
