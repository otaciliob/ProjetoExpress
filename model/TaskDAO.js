const {TaskModel} = require('./db');

module.exports = {
    novo: async(task) =>{
        return await TaskModel.create({ tarefa: task });
    },
    lista: async ()=>{
        return await TaskModel.findAll();
    },
    busca: async (id)=>{
        return await TaskModel.findByPk(id);
    },
    alterar: async(id,tarefa)=>{
        return await TaskModel.update(tarefa,{ where:{id: id} } );
    },
    apagar: async(task)=>{
        return await TaskModel.destroy({where: {id: task.id}})
    }
}