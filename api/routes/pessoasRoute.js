const { Router } = require("express");
const PessoaController = require("../controllers/PessoaController.js");

const routes = Router();

routes
    .get("/pessoas", PessoaController.listarPessoas)
    .get("/pessoas/:id", PessoaController.acessarPessoaPorId);

module.exports = routes;
