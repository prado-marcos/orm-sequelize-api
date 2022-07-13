const { NiveisServices } = require("../services");
const niveisServices = new NiveisServices();

class NivelController {
    static async listarNiveis(req, res) {
        try {
            const niveis = await niveisServices.listarTodos();
            return res.status(200).json(niveis);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarNivelPorId(req, res) {
        const { id } = req.params;
        try {
            const nivel = await niveisServices.acessar(Number(id));
            return res.status(200).json(nivel);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarNivel(req, res) {
        const nivel = req.body;
        try {
            const novoNivel = await niveisServices.criar(nivel);
            return res.status(200).json(novoNivel);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarNivel(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await niveisServices.atualizar(novaInfo, Number(id));
            return res
                .status(200)
                .send({ message: "Cadastro atualizado com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async excluirNivel(req, res) {
        const { id } = req.params;
        try {
            await niveisServices.remover(Number(id));
            return res
                .status(200)
                .send({ message: "Cadastro excluído com sucesso" });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async restaurarNivel(req, res) {
        try {
            const { id } = req.params;
            await niveisServices.restaurar(Number(id));
            return res
                .status(200)
                .json({ message: `Nivel #ID: ${id} restaurado com sucesso` });
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController;
