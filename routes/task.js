var express = require('express')
var router = express.Router()

var TaskModel = require('../model/TaskDAO.js')

let getTask = (req, res, next) => {
    let {id} = req.params
    let task = TaskModel.busca(id)
    if (task == null) {
        return res.status(404).json({status: false, error: "Id invalido"})
    }
    req.task = task
    next()
}   

let validaNome = (req, res, next) => {
    let {nome} = req.body
    if (nome == undefined || nome == "") {
        return res.status(400).json({status: false, error:"Nome nao informado"})
    }
    if (nome.length < 5) {
        return res.status(400).json({status: false, error:"O nome da tarefa precisa ter mais do que 5 caracteres"})
    }
    req.nome = nome.toUpperCase()
    next()
}

router.get("/", (req, res) => {
    res.json({status: true, tasks: TaskModel.lista()})
})

router.get("/:id", getTask, (req, res) => {
    res.json({status: true, task: req.task})
})

router.post("/", validaNome, (req, res) => {
    res.json({status: true, task: TaskModel.novo(req.nome)})
})

router.put("/:id", validaNome, getTask, (req, res) => {
    res.json({status: true, task: TaskModel.alterar(req.task)})
})

router.delete("/:id", getTask, (req, res) => {
    res.json({status: true, oldtask: TaskModel.apagar(req.task)})
})

module.exports = router