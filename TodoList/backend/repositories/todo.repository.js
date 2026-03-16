const db = require("../models");
const Todo = db.Todo;

exports.crear = async (data) => {
    return await Todo.create(data);
};

exports.encontrarTodos = async () => {
    return await Todo.findAll();
};

exports.encontrarPorId = async (id) => {
    return await Todo.findByPk(id);
};

exports.actualizar = async (id, data) => {
    const [result] = await Todo.update(data, {
        where: { id }
    });
    return result; 
};

