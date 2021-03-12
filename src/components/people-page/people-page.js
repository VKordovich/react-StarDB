import React from 'react';
import SwapiService from '../../service/service';
import AppDoubleBlock from '../app-double-block/app-double-block';
import ErrorIndicator from '../app-error-indicator/error-indicator';


import {PersonDetail,
    PlanetDetail,
    StarshipDetail,
    PersonList,
    PlanetList,
    StarshipList} from '../sw-components'


export default class PeoplePage extends React.Component{

    swapiService = new SwapiService();

    state = {
        selectedId: 1
    }

    onChangeId = (id) => {
        this.setState({selectedId: id})
    }

    
    render() {
        if (this.state.wasError) {
            return <ErrorIndicator/>
        }

        const listPeople = <PersonList renderFunc={({name, birthYear}) => (`${name} (${birthYear})`)} selectedId={this.onChangeId}/>
        const listPlanet = <PlanetList renderFunc={({name, population}) => (`${name} (${population})`)} selectedId={this.onChangeId}/>
        const listStarship = <StarshipList renderFunc={({name, manufacturer}) => (`${name} (${manufacturer})`)} selectedId={this.onChangeId}/>
        const detailPeople = <PersonDetail itemId={5}/>
        const detailPlanet = <PlanetDetail itemId={6}/>
        const detailStarship = <StarshipDetail itemId={9}/>


        return (
            <div>
            <AppDoubleBlock left={listPeople} right={detailPeople}/>
            <AppDoubleBlock left={listPlanet} right={detailPlanet}/>
            <AppDoubleBlock left={listStarship} right={detailStarship}/>
            </div>
        )
    }
} 