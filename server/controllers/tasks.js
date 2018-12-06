var     Task = require('../models/task'),
        mongoose = require('mongoose'),
        Task = mongoose.model('Task')
module.exports = {
    getAll: (req, res)=>{
        Task.find({}, (err,tasks)=>{
            res.json(tasks)
        })
    },
    getOne:(req, res)=>{
        var id = req.params.id
        Task.findById(id, (err, task)=>{
            if(err){
                console.log(err)
                res.json(err)
            }else{
            console.log(task)
            res.json(task)
            }
        })
    },
    create:(req,res)=>{
        var task = new Task
        task.title = req.body.title
        task.description = req.body.description
        task.completed = req.body.completed
        task.save(function(err){
            if(err){
                for(var key in err.errors){
                    console.log(err.errors[key].message)
                }
                res.json(task)
            }else{
                res.json(task)
            }
        })
    },
    update:(req,res)=>{
        var params = req.params
        Task.findByIdAndUpdate(params.id, {
            $set:{
                title : req.body.title,
                description : req.body.description,
                completed :req.body.completed,
                
            },
            
        },
        (err, task)=>{
            if(err){
                for(var key in err.errors){
                    console.log(err.errors[key].message)
                }
                res.json(task)
            }else{
            res.json(task)
            }
        })
    },
    destroy:(req,res)=>{
        var id = req.params.id
        Task.findByIdAndRemove(id, (err)=>{
            console.log("THANK U NEXT")
            res.redirect('/')
        })
    }
}