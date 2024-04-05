const { adicionarFuncionario } = require('../models/funcionarioModel');

// Adicionando um novo funcionário
async function criarFuncionario(req, res) {
    try {
        const resultado = await adicionarFuncionario(req.body);
        res.status(201).send(resultado);
    } catch (erro) {
        res.status(400).send({ erro: erro.message });
    }
}

const { buscarFuncionarios } = require('../models/funcionarioModel');

// Controlador para buscar todos os funcionários
async function obterFuncionarios(req, res) {
    try {
        const funcionarios = await buscarFuncionarios();
        res.status(200).json(funcionarios);
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

const { buscarFuncionarioPorId } = require('../models/funcionarioModel');

async function obterFuncionarioPorId(req, res) {
    const id = req.params.id; // O Express coloca os parâmetros da URL em req.params

    try {
        const funcionario = await buscarFuncionarioPorId(id);
        if (funcionario) {
            res.status(200).json(funcionario);
        } else {
            res.status(404).send({ mensagem: "Funcionário não encontrado" });
        }
    } catch (erro) {
        res.status(500).send({ erro: erro.message });
    }
}

module.exports = { criarFuncionario, obterFuncionarios,obterFuncionarioPorId };
