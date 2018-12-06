const   mongoose = require('mongoose'),
        Task = mongoose.model('Task'),
        tasks = require('../controllers/tasks')
module.exports = function(app){
    app.get("/tasks", (req, res)=>{
        tasks.getAll(req, res)
    })
    app.get("/tasks/:id", (req, res)=>{
        tasks.getOne(req, res)
    })
    app.post("/tasks", (req, res)=>{
        tasks.create(req, res)
    })
    app.put("/tasks/:id", (req, res)=>{
        tasks.update(req, res)
    })
    app.delete("/tasks/:id", (req, res)=>{
        tasks.destroy(req, res)
    })

}