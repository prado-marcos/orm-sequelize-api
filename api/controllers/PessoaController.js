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
            return res
                .status(200)
                .send({ message: "Atualização feita com sucesso" });
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
            return res
                .status(200)
                .send({ message: "Exclusão feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarMatricula(req, res) {
        const { pessoaId, matriculaId } = req.params;
        try {
            const matricula = await database.Matriculas.findOne({
                where: {
                    estudante_id: Number(pessoaId),
                    id: Number(matriculaId),
                },
            });
            return res.status(200).json(matricula);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarMatricula(req, res) {
        const { pessoaId } = req.params;
        const matricula = { ...req.body, estudante_id: Number(pessoaId) };
        try {
            const novaMatricula = await database.Matriculas.create(matricula);
            return res.status(200).json(novaMatricula);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarMatricula(req, res) {
        const { pessoaId, matriculaId } = req.params;
        const novaInfo = req.body;
        try {
            await database.Matriculas.update(novaInfo, {
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(pessoaId),
                },
            });
            return res
                .status(200)
                .json({ message: "Atualização feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async excluirMatricula(req, res) {
        const { pessoaId, matriculaId } = req.params;
        try {
            await database.Matriculas.destroy({
                where: {
                    id: Number(matriculaId),
                    estudante_id: Number(pessoaId),
                },
            });
            return res
                .status(200)
                .json({ message: "Exclusão feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
