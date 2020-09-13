const router = require('express').Router()
const todoModel = require('../models/todoModel')

router.get('/getTodos', (req, res) => {

    todoModel.find().then((todos) => {
        console.log('data fetched')
        console.log(todos)
        res.json({todos: todos})
    }).catch((err) => {
        console.log('error occured', err)
    })
})

router.post('/addTodos', (req, res) => {
    const newTodo = new todoModel(req.body);
    console.log(newTodo)

    newTodo.save().then((todo) => {
        res.status(200).json({
            message: {
                msgBody: 'success',
                msgError: false,
                payload: todo
            }
        })
    }).catch((err) => {
        res.status(500).json({
            message: {
                msgBody: 'error',
                msgError: 'true'
            }
        })
    })
})

router.get('/deleteTodo/:id', (req, res) => {
    const todo_id = req.params.id;
    console.log(todo_id);
    todoModel.findByIdAndDelete(todo_id).then((todo) => {
        res.status(200).json({
            message: {
                msgBody: "sucess",
                msgError: false,
                payload: todo
            }
        })

        console.log('deleted todo')
    }).catch((err) => {
        res.status(200).json({
            message: {
                msgBody: "error",
                msgError: true
            }
        })

        console.log('error occured while deleting')
    })
})

router.post('/editTodos', (req, res) => {
    console.log(req.body)
    todoModel.findByIdAndUpdate(req.body.todo._id, {
        $set: {
            name: req.body.todoName,
            createdOn: Date.now()

        }
    }, {new: true}).then((updatedTodo) => {
        console.log("update success" + updatedTodo)
        res.status(200).json({
            message: {
                msgBody: "success",
                msgError: false
            }
        })
    }).catch((err) => {
        console.log(`error occured ${err}`)
    })

})


module.exports = router
