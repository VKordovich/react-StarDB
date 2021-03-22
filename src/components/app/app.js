import React from 'react';

import AppHeader from '../app-header';
import AppRandomPlanet from '../app-random-planet';
import {PeoplePage, PlanetPage, StarshipPage, SecretPage, LoginPage} from '../people-page';
import {SwapiServiceProvider} from '../swapi-service-context'
import SwapiService from '../../service/service';
import {BrowserRouter, Redirect, Route, Switch} from 'react-router-dom'
import './app.css';
import { StarshipDetail } from '../sw-components';


export default class App extends React.Component{
    swapiService = new SwapiService();
    state = {
        wasError: false,
        isLoggedIn: true
    }
    onLogin = () => {
        this.setState({isLoggedIn: true}) 
    }
    toggleRandomPlanet = () => {
        this.setState({toggle: !this.state.toggle})
    }

    componentDidCatch() {
        this.setState({wasError: true})
    }

    render(){ 
        const {isLoggedIn} = this.state
        return(
            <SwapiServiceProvider value = {this.swapiService}>
            <BrowserRouter>
            <div className='app-main'>
                <AppHeader/>
                <AppRandomPlanet updateInterval={15000}/>
                <Switch>
                <Route path='/' render={() => <h2>Welcome to StarDB</h2>} exact={true}/>
                <Route path='/people/:id?' component={PeoplePage} />  {/* переключение между страницами с React.Router, разница в "памяти" строки адреса. При перезагрузке остается выбранная страница" */}
                <Route path='/planet' component={PlanetPage} />       {/* переключение между страницами без React.Router */}
                <Route path='/starship' component={StarshipPage} exact/>
                <Route path='/starship/:id' 
                       render={({match}) => {
                       const {id} = match.params
                       return <StarshipDetail itemId={id} />}} />
                <Route path='/login' render={() => { return <LoginPage isLoggedIn={isLoggedIn} onLogin={this.onLogin}/>}}/>
                <Route path='/secret' render={() => { return <SecretPage isLoggedIn={isLoggedIn}/>}}/>
                
                {/* <Redirect to='/'/> */}
                </Switch>  
            </div>
            </BrowserRouter>
            </SwapiServiceProvider>
        );
    }
}