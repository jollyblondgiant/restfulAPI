const mongoose = require('mongoose')
var TaskSchema = new mongoose.Schema({
    title: String,
    description: {type: String, default: ""}, 
    completed: {type: Boolean, default: false},
    created_at: {type:Date, default:Date.now},
    updated_at:{type:Date, default:Date.now}

})
mongoose.model('Task', TaskSchema)