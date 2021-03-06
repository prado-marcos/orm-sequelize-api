const express = require("express");
const pessoas = require("./pessoasRoute.js");
const turmas = require("./turmasRoute.js");
const niveis = require("./niveisRoute.js");
const matriculas = require("./matriculasRoute.js");

module.exports = (app) => {
    app.use(
    express.json(), 
    pessoas, 
    turmas, 
    matriculas,
    niveis,
    );
};
