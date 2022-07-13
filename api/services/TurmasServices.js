const Services = require("./Services.js");
const { Op } = require("sequelize");
const database = require("../models");

class TurmasServices extends Services {
    constructor() {
        super("Turmas");
    }

    async listarTurmasPorData(dataInicial, dataFinal) {
        const where = {};
        dataInicial || dataFinal ? (where.data_inicio = {}) : null;
        dataInicial ? (where.data_inicio[Op.gte] = dataInicial) : null;
        dataFinal ? (where.data_inicio[Op.lte] = dataFinal) : null;
        return await database[this.nomeModelo].findAll({ where });
    }
}

module.exports = TurmasServices;
