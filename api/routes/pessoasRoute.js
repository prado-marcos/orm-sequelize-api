const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const routes = Router();

routes
    .get("/pessoas", PessoaController.listarPessoas)
    .get("/pessoas/:id", PessoaController.acessarPessoaPorId)
    .post("/pessoas", PessoaController.criarPessoa)
    .put("/pessoas/:id", PessoaController.atualizarPessoa)
    .delete("/pessoas/:id", PessoaController.excluirPessoa)
    .get(
        "/pessoas/:pessoaId/matriculas/:matriculaId",
        PessoaController.acessarMatricula
    )
    .post("/pessoas/:pessoaId/matriculas/", PessoaController.criarMatricula)
    .put(
        "/pessoas/:pessoaId/matriculas/:matriculaId",
        PessoaController.atualizarMatricula
    )
    .delete(
        "/pessoas/:pessoaId/matriculas/:matriculaId",
        PessoaController.excluirMatricula
    );

module.exports = routes;
