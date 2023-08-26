
const Clientes = require('../models/Clientes.js');

const getAllClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findAll({});
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro interno" });
    }
}

const getClientesById = async (req, res) => {
    try {
        const clientes = await Clientes.findByPk(req.params.id);
        res.json(clientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: error });
    }
}

const createClientes = async (req, res) => {
    try {
        const newClientes = await Clientes.create(req.body);
        res.json(newClientes);
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao criar clientes" });
    }
}

const updateClientes = async (req, res) => {
    try {
        const clientes = await Clientes.findByPk(req.params.id);
        if (!clientes) {
            return res.status(404).json({ message: "clientes não encontrado" });
        }
        
        await clientes.update(req.body);
        res.json({ message: "clientes atualizado com sucesso" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Erro ao atualizar clientes" });
    }
}

module.exports = {
    getAllClientes,
    getClientesById,
    createClientes,
    updateClientes
}
