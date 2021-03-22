import React from 'react';
import {withRouter} from 'react-router-dom';
import AppDoubleBlock from '../app-double-block/app-double-block';


import {PersonDetail,
    PersonList} from '../sw-components'


const PeoplePage = ({match, history}) => {
        const {id} = match.params

        const listPeople = <PersonList renderFunc={({name, birthYear}) => (`${name} (${birthYear})`)} selectedId={(itemId) => { return history.push(itemId) }}/>
        const detailPeople = <PersonDetail itemId={id}/>


        return (
            <div>
            <AppDoubleBlock left={listPeople} right={detailPeople}/>
            </div>
        )
    }

    export default withRouter(PeoplePage);