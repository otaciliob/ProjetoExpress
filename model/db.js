const {Sequelize, DataTypes} = require('sequelize')

const sequelize = new Sequelize({
    dialect: "sqlite",
    storage: './database.sqlite'
})

const TaskModel = sequelize.define('Task',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },
    tarefa: {
        type: DataTypes.STRING,
        allowNull: false
    }
})
const UserModel = sequelize.define('User',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },
    nome: {
        type: DataTypes.STRING,
        allowNull: false
    },
    senha: {
        type: DataTypes.STRING,
        allowNull: false
    },
    isAdmin: {
        type: DataTypes.BOOLEAN,
        allowNull: false
    }
})
const BookModel = sequelize.define('Book',{
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true, 
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    dataPublicacao: {
        type: DataTypes.DATE,
        allowNull: false
    }
})

module.exports = {
    sequelize: sequelize,
    TaskModel: TaskModel,
    UserModel: UserModel,
    BookModel: BookModel
}