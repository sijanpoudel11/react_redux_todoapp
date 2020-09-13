const mongoose = require('mongoose')

const todoSchema = mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    createdOn:{
        type:Date,
        default:Date.now()
    }
})

module.exports = mongoose.model('todo',todoSchema)