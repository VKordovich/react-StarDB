import React from 'react';
import SwapiService from '../../service/service'

const {Provider: SwapiServiceProvider,
     Consumer : SwapiServiceConsumer} = React.createContext();

export {
    SwapiServiceProvider,
    SwapiServiceConsumer
}