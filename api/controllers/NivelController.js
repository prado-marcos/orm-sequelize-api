const database = require("../models");

class NivelController {
    static async listarNiveis(req, res) {
        console.log("teste")
        try {
            const niveis = await database.Niveis.findAll();
            return res.status(200).json(niveis);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async acessarNivelPorId(req, res) {
        const { id } = req.params;
        try {
            const nivel = await database.Niveis.findOne({
                where: { id: Number(id) },
            });
            return res.status(200).json(nivel);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async criarNivel(req, res) {
        const nivel = req.body;
        try {
            const novoNivel = await database.Niveis.create(nivel);
            return res.status(200).json(novoNivel);
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async atualizarNivel(req, res) {
        const { id } = req.params;
        const novaInfo = req.body;
        try {
            await database.Niveis.update(novaInfo, {
                where: { id: Number(id) },
            });
            return res.status(200).send({ message: "Cadastro atualizado com sucesso"})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }

    static async excluirNivel(req, res) {
        const { id } = req.params;
        try {
            await database.Niveis.destroy({
                where: { id: Number(id) },
            });
            return res.status(200).send({ message: "Cadastro excluído com sucesso"})
        } catch (error) {
            res.status(500).json(error.message);
        }
    }
}

module.exports = NivelController;
