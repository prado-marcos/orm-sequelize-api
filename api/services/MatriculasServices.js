const Services = require("./Services.js");
const database = require("../models");
const Sequelize = require("sequelize");

class MatriculasServices extends Services {
    constructor() {
        super("Matriculas");
    }

    async acessarMatriculaPorPessoa(id, estudanteId) {
        return await database[this.nomeModelo].findOne({
            where: { id: id, estudante_id: estudanteId },
        });
    }

    async acessarRegistroDeMatriculasPorTurma(turmaId) {
        return await database[this.nomeModelo].findAndCountAll({
            where: {
                turma_id: Number(turmaId),
                status: "confirmado",
            },
            order: [["estudante_id", "DESC"]],
            limit: 20,
        });
    }

    async listarRegistrosDeTurmasLotadas(lotacaoMax) {
        return await database[this.nomeModelo].findAndCountAll({
            where: {
                status: "confirmado",
            },
            attributes: ["turma_id"],
            group: ["turma_id"],
            having: Sequelize.literal(`count(turma_id) >= ${lotacaoMax}`),
        });
    }

    async cancelarMatricula(id) {
        return await database[this.nomeModelo].update(
            { status: "cancelado" },
            { where: { id: Number(id) } }
        );
    }
}

module.exports = MatriculasServices;
