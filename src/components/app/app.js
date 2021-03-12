import React from 'react';

import AppHeader from '../app-header';
import AppRandomPlanet from '../app-random-planet';
import PeoplePage from '../people-page';
import ErrorButton from '../app-error-button'

import './app.css';


export default class App extends React.Component{
    state = {
        toggle: true,
        wasError: false
    }
    toggleRandomPlanet = () => {
        this.setState({toggle: !this.state.toggle})
    }

    componentDidCatch() {
        this.setState({wasError: true})
    }

    render(){ 
        const {toggle} = this.state
        const planetHidden = toggle ? <AppRandomPlanet/> : null
        return(
            <div className='app-main'>
                <AppHeader/>
                {planetHidden}
                <button
                   className = "toggle-planet btn btn-warning btn-lg"
                   onClick = {this.toggleRandomPlanet}>Toggle Random Planet 
                </button>
                <ErrorButton/>
                <PeoplePage />
            </div>
        );
    }
}