    // IMPORT REQUIRED MODULES
const express = require ( 'express');
const mongoose = require('mongoose');

const todoRouter = require('./routes/todoRouter')

//MIDDLEWARES
const app = express();

mongoose.connect('mongodb+srv://test1:test1@cluster0-cxzwg.mongodb.net/react-redux-todoapp?retryWrites=true&w=majority',{useNewUrlParser:true,useUnifiedTopology:true}).then(()=>console.log('database connected'))
app.use(express.json())
app.use('/todos',todoRouter)
//START THE SERVER 

app.listen( '8000',(req,res)=>{
    console.log('server listening to port 8000')
})
