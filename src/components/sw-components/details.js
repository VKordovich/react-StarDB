import React from 'react';
import SwapiService from '../../service/service';
import AppPeopleDetails from '../app-people-details';
import AppRecord from '../app-record';
import {SwapiServiceConsumer} from '../swapi-service-context'

const PersonDetail = ({itemId}) => {
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

