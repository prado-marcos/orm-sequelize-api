const database = require("../models");

class TurmaController {
    static async listarTurmas(req, res) {
        try {
            const turmas = await database.Turmas.findAll();
            return res.status(200).json(turmas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarTurmaPorId(req, res) {
        const { id } = req.params;
        try {
            const turma = await database.Turmas.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(turma);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarTurma(req, res) {
        const turma = req.body;
        try {
            const novaTurma = await database.Turmas.create(turma);
            return res.status(200).json(novaturma);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarTurma(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Turmas.update(novaInfo, {
                where: { id: Number(id) },
            });
            return res
                .status(200)
                .send({ message: "Cadastro atualizado com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async excluirTurma(req, res) {
        const { id } = req.params;
        try {
            await database.Turmas.destroy({
                where: { id: Number(id) },
            });
            return res
                .status(200)
                .send({ message: "Cadastro excluído com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async restaurarTurma(req, res) {
        try {
            const { id } = req.params;
            await database.Turmas.restore({ where: { id: Number(id) } });
            return res
                .status(200)
                .json({ message: `Turma #ID: ${id} restaurada com sucesso` });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;
