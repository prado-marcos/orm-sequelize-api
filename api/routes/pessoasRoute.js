const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const routes = Router();

routes
    .get("/pessoas", PessoaController.listarPessoasAtivas)
    .get("/pessoas/all", PessoaController.listarPessoas)
    .get("/pessoas/:id", PessoaController.acessarPessoaPorId)
    .get(
        "/pessoas/:pessoaId/matriculas/:matriculaId",
        PessoaController.acessarMatricula
    )
    .get("/pessoas/:id/matriculas/", PessoaController.listarMatriculas)
    .post("/pessoas", PessoaController.criarPessoa)
    .post("/pessoas/:pessoaId/matriculas/", PessoaController.criarMatricula)
    .post("/pessoas/:id/restaurar", PessoaController.restaurarPessoa)
    .post(
        "/pessoas/:pessoaId/matriculas/:matriculaId/restaurar",
        PessoaController.restaurarMatricula
    )
    .put("/pessoas/:id", PessoaController.atualizarPessoa)
    .put(
        "/pessoas/:pessoaId/matriculas/:matriculaId",
        PessoaController.atualizarMatricula
    )
    .delete("/pessoas/:id", PessoaController.excluirPessoa)
    .delete(
        "/pessoas/:pessoaId/matriculas/:matriculaId",
        PessoaController.excluirMatricula
    );

module.exports = routes;
