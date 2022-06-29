const database = require("../models");

class PessoaController {
    static async listarPessoas(req, res) {
        try {
            const pessoas = await database.Pessoas.findAll();
            return res.status(200).json(pessoas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarPessoaPorId(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await database.Pessoas.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(pessoa);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
