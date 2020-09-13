const {
    FETCH_TODO_REQUEST,
    FETCH_TODO_SUCCESS,
    FETCH_TODO_FAILURE,
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS
} = require("./todoTypes")
const axios = require('axios')
export const fetchTodoRequest = () => {
    return {type: FETCH_TODO_REQUEST}
}

export const fetchTodoSuccess = (todos) => {
    return {type: FETCH_TODO_SUCCESS, payload: todos}
}

export const fetchTodoFailure = (error) => {
    return {type: FETCH_TODO_FAILURE, payload: error}
}

export const addTodoSuccess = (newtodo) => {
    return {type: ADD_TODO_SUCCESS, payload: newtodo}
}
export const deleteTodoSuccess = (todo_id) => {
    return {type: DELETE_TODO_SUCCESS, payload: todo_id}
}
export const editTodoSuccess = (todo) => {
    return {type: EDIT_TODO_SUCCESS, payload: todo}
}

export const getTodos = () => {
    return function (dispatch) {
        dispatch(fetchTodoRequest())
        axios.get('/todos/getTodos').then((res) => {
            console.log(res.data)
            const todos = res.data.todos
            dispatch(fetchTodoSuccess(todos))
        }).catch((err) => {
            dispatch(fetchTodoFailure(err.message))
        })
    }
}

export const addTodoAsync = (todo) => {
    return function (dispatch) {

        return axios.post('/todos/addTodos', todo).then((res) => { // create course success
            console.log(res.data.message);

            dispatch(addTodoSuccess(res.data.message.payload))
        }).catch((err) => {
            console.log(err)
        })
    }
}

export const deleteTodo = (todo_id) => {
    return function (dispatch) {
        return axios.get('/todos/deleteTodo/' + todo_id).then((res) => { // console.log('delete operation success')
            dispatch(deleteTodoSuccess(todo_id))
        }).catch((err) => {
            console.log('error occured')
        })
    }
}

export const editTodo = (obj) => {
    return function (dispatch) {
        return axios.post('/todos/editTodos', obj).then((res) => {
            console.log(res.data)
            dispatch(editTodoSuccess(obj))
        }).catch((err) => {
            console.log(err)
        })
    }

}
