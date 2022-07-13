const { MatriculasServices } = require("../services");
const matriculasServices = new MatriculasServices();

class MatriculaController {
    static async listarMatriculas(req, res) {
        try {
            const matriculas = await matriculasServices.listarTodos();
            return res.status(200).json(matriculas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarMatriculaPorId(req, res) {
        const { id } = req.params;
        try {
            const matricula = await matriculasServices.acessar(Number(id));
            return res.status(200).json(matricula);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarMatriculaPorPessoaId(req, res) {
        const { matriculaId, pessoaId } = req.params;
        try {
            const matricula =
                await matriculasServices.acessarMatriculaPorPessoa(
                    matriculaId,
                    pessoaId
                );
            return res.status(200).json(matricula);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarMatricula(req, res) {
        const matricula = req.body;
        try {
            const novaMatricula = await matriculasServices.criar(matricula);
            return res.status(200).json(novaMatricula);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarMatricula(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await matriculasServices.atualizarRegistros(novaInfo, {
                id: Number(id),
            });
            return res
                .status(200)
                .json({ message: "Atualização feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async excluirMatricula(req, res) {
        const { id } = req.params;
        try {
            await matriculasServices.removerRegistros({
                id: Number(id),
            });
            return res
                .status(200)
                .json({ message: "Exclusão feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async restaurarMatricula(req, res) {
        const { id } = req.params;
        try {
            await matriculasServices.restaurar(id);
            return res.status(200).json({
                message: `Matrícula #ID: ${id} restaurado com sucesso`,
            });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarMatriculasPorTurma(req, res) {
        const { turmaId } = req.params;
        try {
            const matriculas =
                await matriculasServices.acessarRegistroDeMatriculasPorTurma(
                    Number(turmaId)
                );
            return res.status(200).json(matriculas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async listarTurmasLotadas(req, res) {
        const { max } = req.query;
        try {
            const turmasLotadas =
                await matriculasServices.listarRegistrosDeTurmasLotadas(max);
            return res.status(200).json(turmasLotadas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async cancelarUmaMatricula(req, res) {
        const { id } = req.params;
        try {
            await matriculasServices.cancelarMatricula(id);
            return res
                .status(200)
                .json({ message: `Matricula ID #${id} cancelada com sucesso` });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = MatriculaController;
