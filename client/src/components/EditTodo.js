import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import { Link } from 'react-router-dom';
import * as actions from '../redux/todoAction' 
import {toast,ToastContainer} from 'react-toastify'


const EditTodo = (props) => {
    const id = props.match.params.todo_id;
    const [todo, setTodos] = useState(useSelector((state) => state.todos.find(t => t._id === id)))
    const [todoName, setTodoName] = useState(todo.name)

    const dispatch = useDispatch()

    console.log(todoName)
    console.log(todo)

    const onUpdateHandler = (e) => {
        e.preventDefault()
        console.log(todo)
        console.log(todoName)
        const obj ={todo:todo,todoName:todoName}

       dispatch( actions.editTodo(obj))
        .then(()=>{
            toast.success("todo update successful")
            props.history.push('/todos')
        })
        
    }

    return (
        <div className="container">
            <div className="jumbotron">
                <form onSubmit={onUpdateHandler}>
                    <h1>Edit Todo</h1>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" name="name"
                            value={todoName}
                            onChange={
                                (e) => {
                                    setTodoName(e.target.value)
                                }
                            }
                            className="fprm-control"/>
                    </div>
                <button className="btn btn-success" type="submit" onClick={onUpdateHandler}>Update</button> | <Link to="/todos"><button className="btn btn-warning ">Cancel</button></Link>
            </form>
        </div>
    </div>
    )
}

export default EditTodo
