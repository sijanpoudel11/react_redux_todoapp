import React, {useState} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {Redirect} from 'react-router-dom'
import {ToastContainer,toast} from 'react-toastify'
import * as actions from '../redux/todoAction'
import 'react-toastify/dist/ReactToastify.css';


const AddNewTodo = (props) => {
   // toast.configure();
    
    const [todoName, setname] = useState({name:""})
    const dispatch = useDispatch()

    const onSubmitHandler = (e) => {
        e.preventDefault()
        dispatch(actions.addTodoAsync(todoName))
        
         .then(() => {
             toast.success('successfully todo added')
           props.history.push('/todos')

         })
    }
    return (
        <div>
            <h2>ADD NEW TODO</h2>
            <form onSubmit={onSubmitHandler}>
                <div className="from-group">
                    <label htmlFor="name">Name
                    </label>
                    <input type="text" name="name"
                        onChange={
                            (e) => {setname({name:e.target.value})
                                    console.log(todoName)
                        }
                            
                        }
                        value={todoName.name}
                        className="form-control"
                        placeholder="Enter The Todo Name"/>
                </div>
                <button type="submit" className="btn btn-success">Add</button>
            </form>
        </div>
    )
}

export default AddNewTodo
