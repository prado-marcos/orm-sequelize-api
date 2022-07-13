const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const routes = Router();

routes
    .get("/pessoas", PessoaController.listarPessoas)
    .get("/pessoas/ativas", PessoaController.listarPessoasAtivas)
    .get("/pessoas/:id", PessoaController.acessarPessoaPorId)
    .get("/pessoas/:id/matriculas/", PessoaController.listarMatriculasDePessoa)
    .post("/pessoas", PessoaController.criarPessoa)
    .post("/pessoas/:id/restaurar", PessoaController.restaurarPessoa)
    .put("/pessoas/:id", PessoaController.atualizarPessoa)
    .post(
        "/pessoas/:estudanteId/matriculas/cancela",
        PessoaController.cancelarMatriculas
    )
    .delete("/pessoas/:id", PessoaController.excluirPessoa);

module.exports = routes;
