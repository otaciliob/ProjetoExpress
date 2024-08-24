var express = require('express')
var router = express.Router()

var TaskModel = require('../model/TaskDAO.js')

let getTarefa = async(req, res, next) => {
    let {id} = req.params
    let task = await TaskModel.busca(id)
    if (task == null) {
        return res.status(404).json({status: false, error: "Id invalido"})
    }
    req.taskid = task
    next()
}   

let validaTarefa = (req, res, next) => {
    let {tarefa} = req.body
    if (tarefa == undefined || tarefa == "") {
        return res.status(400).json({status: false, error:"Nome nao informado"})
    }
    if (tarefa.length < 5) {
        return res.status(400).json({status: false, error:"O nome da tarefa precisa ter mais do que 5 caracteres"})
    }
    req.tarefa = tarefa.toUpperCase()
    next()
}
//listar todos
router.get("/", async(req, res) => {
    res.json({status: true, tasks: await TaskModel.lista()});
})
//buscar pelo ID
router.get("/:id", getTarefa, (req, res) => {
    res.json({status: true, task: req.taskid})
})
//criar novo
router.post("/", validaTarefa, (req, res) => {
    res.json({status: true, task: TaskModel.novo(req.tarefa)})
})
//alterar
router.put("/:id", validaTarefa, getTarefa, async(req, res) => {
    res.json({status: true, task: await TaskModel.alterar(req.taskid,req.body)})
})
//deletar
router.delete("/:id", getTarefa, async(req, res) => {
    res.json({status: true, oldtask: await TaskModel.apagar(req.taskid)})
})

module.exports = router