const {TaskModel} = require('./db');

module.exports = {
    novo: async(tarefa) =>{
        return await TaskModel.create({ tarefa: tarefa });
    },
    lista: async ()=>{
        return await TaskModel.findAll();
    },
    busca: async ()=>{
        return await TaskModel.findByPk(id);
    },
    alterar: async(task)=>{
        return await TaskModel.update(task,{where: task.id});
    }
}