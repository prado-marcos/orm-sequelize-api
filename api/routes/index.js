const express = require("express");
const pessoas = require("./pessoasRoute.js");
const turmas = require("./turmasRoute.js");
const niveis = require("./niveisRoute.js");

module.exports = (app) => {
    app.use(
    express.json(), 
    pessoas, 
    turmas, 
    niveis
    );
};
