import React from 'react'
import {NavLink, Link} from 'react-router-dom'

const NavBar = () => {
    const activeStyle = {
        color: '#F15B2A'
    }
    return(
    <nav class="navbar navbar-expand-lg navbar-light bg-light">

           <NavLink to="/" className="nav-brand"
                    activeStyle={activeStyle}
                    exact>Home</NavLink>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">

                <NavLink to="/todos" className="nav-link"
                    activeStyle={activeStyle}
                    exact>Todos</NavLink>
                <NavLink to="/addNewTodo" className="nav-link"
                    activeStyle={activeStyle}
                    exact>Add Todos</NavLink>
            </div>
        </div>


    </nav> 
   
                
    )}

                export default NavBar
