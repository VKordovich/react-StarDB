import React from 'react';
import SwapiService from '../../service/service';
import AppDoubleBlock from '../app-double-block/app-double-block';
import ErrorIndicator from '../app-error-indicator/error-indicator';


import {PlanetDetail,
    PlanetList} from '../sw-components'


export default class PlanetPage extends React.Component{

    swapiService = new SwapiService();

    state = {
        selectedId: null
    }

    onChangeId = (id) => {
        this.setState({selectedId: id})
    }

    
    render() {
        if (this.state.wasError) {
            return <ErrorIndicator/>
        }
        const listPlanet = <PlanetList renderFunc={({name, population}) => (`${name} (${population})`)} selectedId={this.onChangeId}/>
        const detailPlanet = <PlanetDetail itemId={this.state.selectedId}/>



        return (
            <div>
            <AppDoubleBlock left={listPlanet} right={detailPlanet}/>
            </div>
        )
    }
} 