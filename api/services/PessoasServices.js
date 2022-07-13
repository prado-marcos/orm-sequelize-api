const Services = require("./Services.js");
const database = require("../models");
const MatriculasServices = require("./MatriculasServices.js");

class PessoasServices extends Services {
    constructor() {
        super("Pessoas");
        this.matriculas = new MatriculasServices();
    }

    async listarRegistrosAtivos(where = {}) {
        return await database[this.nomeModelo].findAll({ where: { ...where } });
    }

    async listarTodosRegistros(where = {}) {
        return await database[this.nomeModelo].scope("all").findAll({
            where: { ...where },
        });
    }

    async cancelarPessoasEMatriculas(estudanteId) {
        return database.sequelize.transaction(async (transacao) => {
            await super.atualizar({ ativo: false }, Number(estudanteId), {
                transaction: transacao,
            });
            await this.matriculas.atualizarRegistros(
                { status: "cancelado" },
                { estudante_id: Number(estudanteId) },
                { transaction: transacao }
            );
        });
    }
}

module.exports = PessoasServices;
