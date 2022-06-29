const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const routes = Router();

routes
    .get("/pessoas", PessoaController.listarPessoas)
    .get("/pessoas/:id", PessoaController.acessarPessoaPorId)
    .post("/pessoas", PessoaController.criarPessoa)
    .put("/pessoas/:id", PessoaController.atualizarPessoa)
    .delete("/pessoas/:id", PessoaController.excluirPessoa)
    
module.exports = routes;
