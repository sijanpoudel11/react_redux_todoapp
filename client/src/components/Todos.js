import React, {useEffect, useState} from 'react'
import {useSelector, useDispatch, connect} from 'react-redux'
import {toast, ToastContainer} from 'react-toastify'
import {Link, Redirect} from 'react-router-dom'
import * as actions from '../redux/todoAction'
import store from '../redux/store'
import Spinner from './macros/spinner'


const Todos = (props) => {

    toast.configure()

    const onDeleteHandler = (id) => {
        props.deleteTodos(id).then(() => {
            toast.success('todo deletion success')
        })

    }
    const onEditHandler = (todo) => {
        console.log(todo._id);
        // <Redirect to={"/editTodo"+todo._id}/>
        props.history.push('/editTodo/' + todo._id)
    }

    // const todos = useSelector(state => state.todos)
    // const dispatch = useDispatch(actions.getTodos())


    // useEffect(() => {
    //      if(! props.todos.length > 0){
    //           props. getTodos()
    //       }

    // }, [])
    console.log(store.getState())

    if (props.loading == true) {
        return (<div className="jumbotron">
            <Spinner/>
        </div>)
    } else {
        return (<div className="jumbotron">

            <Link to="/addNewTodo">Add New Todo</Link>
            {
            props.todos.map((todo) => {
                return <React.Fragment key={
                    todo._id
                }>
                    <li className="list-group-item">
                        <h3> {
                            todo.name
                        }</h3>
                        <p> {
                            todo.createdOn + "--" + todo._id
                        }</p>
                        <button className="btn btn-danger btn-md"
                            onClick={
                                () => onDeleteHandler(todo._id)
                        }>DELETE Todo</button>|

                        <Link to={
                            "/editTodo/" + todo._id
                        }>
                            <button className="btn btn-info btn-md">EDIT TODO</button>
                        </Link>


                    </li>


                </React.Fragment>

        })
        } </div>)
    }
}


const mapStateToProps = (state) => {
    return {todos: state.todos, loading: state.loading}
}

const mapDispatchToProps = (dispatch) => {
    return { //     getTodos : ()=>dispatch(actions.getTodos()),
        deleteTodos: (id) => dispatch(actions.deleteTodo(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos)
