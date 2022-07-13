const { TurmasServices } = require("../services");
const turmasServices = new TurmasServices();

class TurmaController {
    static async listarTurmas(req, res) {
        const { data_inicial, data_final } = req.query;
        try {
            const turmas = await turmasServices.listarTurmasPorData(
                data_inicial,
                data_final
            );
            return res.status(200).json(turmas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarTurmaPorId(req, res) {
        const { id } = req.params;
        try {
            const turma = await turmasServices.acessar(Number(id));
            return res.status(200).json(turma);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarTurma(req, res) {
        const turma = req.body;
        try {
            const novaTurma = await turmasServices.criar(turma);
            return res.status(200).json(novaTurma);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarTurma(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await turmasServices.atualizar(novaInfo, Number(id));
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
            await turmasServices.remover(Number(id));
            return res
                .status(200)
                .send({ message: "Cadastro excluído com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async restaurarTurma(req, res) {
        const { id } = req.params;
        try {
            await turmasServices.restaurar(Number(id));
            return res
                .status(200)
                .json({ message: `Turma #ID: ${id} restaurada com sucesso` });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = TurmaController;
