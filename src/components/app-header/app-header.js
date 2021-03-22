import React from 'react';
import {Link} from 'react-router-dom'


export default class AppHeader extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <Link to='/' className="navbar-brand">Star DB</Link>
                <div className="" id="">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <Link to='/people/' className="nav-link">People</Link>
                    </li>
                    <li className="nav-item">
                      <Link to='/planet/' className="nav-link">Planets</Link>
                    </li>
                    <li className="nav-item">
                       <Link to='/starship/' className="nav-link">Starships</Link>
                    </li>
                    <li className="nav-item">
                       <Link to='/login' className="nav-link">Login</Link>
                    </li>
                    <li className="nav-item">
                       <Link to='/secret' className="nav-link">Secret</Link>
                    </li>
                  </ul>
                </div>
            </nav>
        );
    }
}