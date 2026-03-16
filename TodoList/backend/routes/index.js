const todoController = require("../controller/todo.controller");

module.exports = (app) => {

    app.post("/api/todos", todoController.crearTodo);

    app.get("/api/todos", todoController.obtenerTodos);

    app.get("/api/todos/:id", todoController.obtenerTodoPorId);

    app.put("/api/todos/:id", todoController.actualizarTodo);
};