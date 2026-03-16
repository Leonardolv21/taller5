const repository = require("../repositories/todo.repository");

exports.crearTodo = async (req, res) => {
    try {
        const todo = await repository.crear({
            tarea: req.body.tarea,
            completado: req.body.completado || false
        });
        res.status(201).json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerTodos = async (req, res) => {
    try {
        const todos = await repository.encontrarTodos();
        res.json(todos);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.obtenerTodoPorId = async (req, res) => {
    try {
        const todo = await repository.encontrarPorId(req.params.id);
        if (!todo) {
            return res.status(404).json({ message: "Todo no encontrado" });
        }
        res.json(todo);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.actualizarTodo = async (req, res) => {
    try {
        const actualizado = await repository.actualizar(req.params.id, {
            tarea: req.body.tarea,
            completado: req.body.completado
        });

        if (!actualizado) {
            return res.status(404).json({ message: "No se pudo actualizar, Todo no encontrado" });
        }

        res.json({ message: "Todo actualizado con PUT" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

