const database = require("../models");

class Services {
    constructor(nomeModelo) {
        this.nomeModelo = nomeModelo;
    }

    async criar(dados) {
        return await database[this.nomeModelo].create(dados);
    }

    async listarTodos() {
        return await database[this.nomeModelo].findAll();
    }

    async acessar(id) {
        return await database[this.nomeModelo].findOne({
            where: { id: Number(id) },
        });
    }

    async atualizar(dadosAtualizados, id, transacao = {}) {
        return await database[this.nomeModelo].update(
            dadosAtualizados,
            {
                where: { id: id },
            },
            transacao
        );
    }
    async atualizarRegistros(dadosAtualizados, where, transacao = {}) {
        return await database[this.nomeModelo].update(
            dadosAtualizados,
            {
                where: { ...where },
            },
            transacao
        );
    }

    async remover(id) {
        return await database[this.nomeModelo].destroy({
            where: { id: Number(id) },
        });
    }

    async removerRegistros(where) {
        return await database[this.nomeModelo].destroy({
            where: { ...where },
        });
    }

    async restaurar(id) {
        return await database[this.nomeModelo].restore({
            where: { id: Number(id) },
        });
    }

    async restaurarRegistros(where) {
        return await database[this.nomeModelo].restore({
            where: { ...where },
        });
    }
}
module.exports = Services;
