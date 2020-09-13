import React, {useEffect} from 'react';
import './App.css';
import Todos from './components/Todos'
import NavBar from './components/NavBar'
import HomeComponent from './components/Home'
import AddNewTodo from './components/AddNewTodo'
import EditTodo from './components/EditTodo'
import PageNotFound from './components/PageNotFound'
import * as actions from './redux/todoAction'
import {Provider, useSelector, useDispatch, connect} from 'react-redux'
import store from './redux/store'
import {BrowserRouter as Router, Route, witch} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify'


function App(props) {

    useEffect(() => {
        props.getTodos()
        console.log('app refresh')
    }, [])


    return(

        // <Provider store={store}> <div className="App">
            <Router>
                <NavBar/>

                <Route exact path="/"
                    component={HomeComponent}/>
                <Route path="/todos"
                    component={Todos}/>
                <Route path="/addNewTodo"
                    component={AddNewTodo}/>
                <Route path="/editTodo/:todo_id"
                    component={EditTodo}/> {/* <Route path="*" component={PageNotFound} /> */} </Router>
        
        // </Provider>


    );
}
const mapDispatchToProps = (dispatch) => {
    return {
        getTodos: () => dispatch(actions.getTodos())
    }
}


export default connect(null, mapDispatchToProps)(App);
