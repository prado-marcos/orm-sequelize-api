const { Router } = require("express");
const MatriculaController = require("../controllers/MatriculaController.js");

const routes = Router();

routes
    .get("/matriculas", MatriculaController.listarMatriculas)
    .get("/matriculas/:id", MatriculaController.acessarMatriculaPorId)
    .get("/matriculas/turmas/lotacao", MatriculaController.listarTurmasLotadas)
    .get(
        "/matriculas/turmas/:turmaId",
        MatriculaController.acessarMatriculasPorTurma
    )
    .post("/matriculas", MatriculaController.criarMatricula)
    .post("/matriculas/:id/restore", MatriculaController.restaurarMatricula)
    .post("/matriculas/:id/cancelar", MatriculaController.cancelarUmaMatricula)
    .put("/matriculas/:id", MatriculaController.atualizarMatricula)
    .delete("/matriculas/:id", MatriculaController.excluirMatricula);

module.exports = routes;
