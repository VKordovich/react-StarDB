import React from 'react';


export default class AppHeader extends React.Component{
    render(){
        return(
            <nav className="navbar navbar-expand-lg navbar-dark">
                <a className="navbar-brand" href="#">Star DB</a>
                <div className="" id="">
                  <ul className="nav nav-tabs">
                    <li className="nav-item">
                      <a className="nav-link active" data-toggle="tab" href="#home">People</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" data-toggle="tab" href="#profile">Planets</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="#">Starships</a>
                    </li>
                  </ul>
                </div>
            </nav>
        );
    }
}