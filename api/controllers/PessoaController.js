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

    static async criarPessoa(req, res) {
        const pessoa = req.body;
        try {
            const novaPessoa = await database.Pessoas.create(pessoa);
            return res.status(200).json(novaPessoa);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Pessoas.update(novaInfo, {
                where: { id: Number(id) },
            });
            return res.status(200).send({ message: "Cadastro atualizado com sucesso"})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async excluirPessoa(req, res) {
        const { id } = req.params;
        try {
            await database.Pessoas.destroy({
                where: { id: Number(id) },
            });
            return res.status(200).send({ message: "Cadastro excluído com sucesso"})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
