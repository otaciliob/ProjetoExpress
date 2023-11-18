const {UserModel} = require('./db');

module.exports = {
    novo: async(tarefa) =>{
        return await UserModel.create({ nome: nome, senha: senha });
    },
    lista: async ()=>{
        return await UserModel.findAll();
    },
    busca: async ()=>{
        return await UserModel.findByPk(id);
    },
    alterar: async(task)=>{
        return await UserModel.update(user,{where: user.id});
    }
}