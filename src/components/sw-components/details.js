import React from 'react';
import AppPeopleDetails from '../app-people-details';
import AppRecord from '../app-record';
import {SwapiServiceConsumer} from '../swapi-service-context'

const PersonDetail = ({itemId}) => {
    if (itemId == null) {
        return <span>Waiting your choose</span>
    }
    return (
        <SwapiServiceConsumer>
            {
                ({getOnePerson, getPersonImage}) => {
                    return (
                        <AppPeopleDetails sendId={itemId}
                                          getOneItem={getOnePerson}
                                          getImageUrl={getPersonImage}>
                           <AppRecord label='Height' value='height'/>
                           <AppRecord label='Hair Color' value='hairColor'/> 
                           <AppRecord label='Mass' value='mass'/>   
                           <AppRecord label='Birth Year' value='birthYear'/>                       
                        </AppPeopleDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

const PlanetDetail = ({itemId}) => {
    if (itemId == null) {
        return <span>Waiting your choose</span>
    }
    return (
        <SwapiServiceConsumer>
        {
            ({getOnePlanet, getPlanetImage}) => {
                return (
                    <AppPeopleDetails sendId={itemId}
                                      getOneItem={getOnePlanet}
                                      getImageUrl={getPlanetImage}>
                       <AppRecord label='Population' value='population'/>
                       <AppRecord label='Rotation Period' value='rotationPeriod'/>     
                       <AppRecord label='Diameter' value='diameter'/>            
                    </AppPeopleDetails>
                )
            }
        }
    </SwapiServiceConsumer>
    )
}

const StarshipDetail = ({itemId}) => {
    if (itemId == null) {
        return <span>Waiting your choose</span>
    }
    return (
        <SwapiServiceConsumer>
            {
                ({getOneStarShip, getStarshipImage}) => {
                    return (
                        <AppPeopleDetails sendId={itemId}
                                          getOneItem={getOneStarShip}
                                          getImageUrl={getStarshipImage}>
                           <AppRecord label='Model' value='model'/>
                           <AppRecord label='Manufacturer' value='manufacturer'/>     
                           <AppRecord label='Ledgth' value='ledgth'/> 
                           <AppRecord label='Crew' value='crew'/>     
                           <AppRecord label='Passengers' value='passengers'/>                
                        </AppPeopleDetails>
                    )
                }
            }
        </SwapiServiceConsumer>
    )
}

export {
    PersonDetail,
    PlanetDetail,
    StarshipDetail
}

