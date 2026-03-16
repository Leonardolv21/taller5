module.exports = (sequelize, DataTypes) => {

    const Todo = sequelize.define("Todo", {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        tarea: {
            type: DataTypes.STRING,
            allowNull: false
        },
        completado: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    });

    return Todo;
};