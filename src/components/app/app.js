import React from 'react';

import AppHeader from '../app-header';
import AppItemList from '../app-item-list';
import AppPeopleDetails from '../app-people-details';
import AppPlanetDetails from '../app-planet-details';
import AppStarshipDetails from '../app-starship-details';
import AppRandomPlanet from '../app-random-planet';

import './app.css';


export default class App extends React.Component{
    render(){
        return(
            <div className='app-main'>
                <AppHeader/>
                <AppRandomPlanet/>
                <div>
                    <div>
                        <AppItemList/>
                    </div>
                    <div>
                        <AppPeopleDetails/>
                    </div>
                </div>
            </div>
        );
    }
}