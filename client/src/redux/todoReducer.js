import * as actions from './todoAction'
import {
    FETCH_TODO_SUCCESS,
    FETCH_TODO_REQUEST,
    FETCH_TODO_FAILURE,
    ADD_TODO,
    ADD_TODO_SUCCESS,
    DELETE_TODO_SUCCESS,
    EDIT_TODO_SUCCESS
} from './todoTypes';

const initialState = {
    loading: false,
    todos: [],
    error: ''
}

const todoReducer = (state = initialState, action) => {


    switch (action.type) {
        case FETCH_TODO_REQUEST:
            return {
                ...state,
                loading: true
            }

        case FETCH_TODO_SUCCESS:
            return {loading: false, todos: action.payload, error: ''}
        case FETCH_TODO_FAILURE:
            return {loading: false, todos: [], error: action.payload}
        case ADD_TODO_SUCCESS:
            return {
                ...state,
                todos: [
                    ...state.todos,
                    action.payload
                ]
            }

        case DELETE_TODO_SUCCESS:
            const newTodos = state.todos.filter(todo => todo._id !== action.payload)
            return {
                ...state,
                todos: newTodos
            }

        case EDIT_TODO_SUCCESS:
            console.log(action.payload)

            const newTodo = state.todos.map((todo) => {
                if (todo._id === action.payload.todo._id) {
                    todo = {
                        ...todo,
                        name: action.payload.todoName
                    }

                }
                return todo
            })
            console.log(newTodo)
            return {
                ...state,
                todos: newTodo
            }

        default:
            return state
    }
}
export default todoReducer
