import React from 'react';
import {StarshipList} from '../sw-components'
import {withRouter} from 'react-router-dom';


const StarshipPage = ({history}) => {
        return (
            <div>
             <StarshipList renderFunc={({name, manufacturer}) => (`${name} (${manufacturer})`)} //относительный путь при передаче id
                           selectedId={(itemId) => { return history.push(itemId) }}/> 
            </div> 
        )
    }

export default withRouter(StarshipPage)