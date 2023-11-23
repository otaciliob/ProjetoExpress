const {BookModel} = require('./db');

module.exports = {
    novo: async(tarefa) =>{
        return await BookModel.create(
        { titulo: titulo, autor: autor, dataPublicacao: data, unidades: unidades });
    },
    lista: async ()=>{
        return await BookModel.findAll();
    },
    busca: async ()=>{
        return await BookModel.findByPk(id);
    },
    alterar: async(book)=>{
        return await BookModel.update(book,{where: book.id});
    },
    apagar: (book)=>{
        return BookModel.destroy({where: book.id})
    }
}