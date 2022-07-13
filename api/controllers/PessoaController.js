const { PessoasServices } = require("../services");
const pessoasServices = new PessoasServices();

class PessoaController {
    static async listarPessoasAtivas(req, res) {
        try {
            const pessoas = await pessoasServices.listarRegistrosAtivos();
            return res.status(200).json(pessoas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
    static async listarPessoas(req, res) {
        try {
            const pessoas = await pessoasServices.listarTodosRegistros();
            return res.status(200).json(pessoas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarPessoaPorId(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await pessoasServices.acessar(Number(id));
            return res.status(200).json(pessoa);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarPessoa(req, res) {
        const pessoa = req.body;
        try {
            const novaPessoa = await pessoasServices.criar(pessoa);
            return res.status(200).json(novaPessoa);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarPessoa(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await pessoasServices.atualizar(novaInfo, id);
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
            await pessoasServices.remover(id);
            return res
                .status(200)
                .send({ message: "Exclusão feita com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async restaurarPessoa(req, res) {
        const { id } = req.params;
        try {
            await pessoasServices.restaurar(Number(id));
            return res
                .status(200)
                .json({ message: `Pessoa #ID: ${id} restaurado com sucesso` });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async listarMatriculasDePessoa(req, res) {
        const { id } = req.params;
        try {
            const pessoa = await pessoasServices.acessar(id);
            const matriculas = await pessoa.getAulasMatriculadas();
            return res.status(200).json(matriculas);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async cancelarMatriculas(req, res) {
        try {
            const { estudanteId } = req.params;
            await pessoasServices.cancelarPessoasEMatriculas(estudanteId);
            return res
                .status(200)
                .json({ message: "Cancelamento feito com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = PessoaController;
