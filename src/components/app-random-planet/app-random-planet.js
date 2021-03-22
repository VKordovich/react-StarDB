import React from 'react';
import PropTypes from 'prop-types'
import SwapiService from '../../service/service'
import Spinner from '../app-spinner/spinner'
import ErrorIndicator from '../app-error-indicator/error-indicator'
import './app-random-planet.css'


export default class AppRandomPlanet extends React.Component{
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true,
    error: false
  }
  componentDidMount(){
    const {updateInterval} = this.props
    this.updateFromServer();
    setInterval(this.updateFromServer, updateInterval);
  }

  onErrorLoad = (error) => {
    this.setState({error: true, loading: false})
  }

  onLoadedPlanet = (planet) => {
    this.setState({ planet, loading: false })
  }

  updateFromServer = () => {
    const id = Math.floor(Math.random() * 25) + 3;
    this.swapiService.getOnePlanet(id)
                     .then(this.onLoadedPlanet)
                     .catch(this.onErrorLoad)
  }
  
    render(){
      const {planet, loading, error}=this.state
      const errorLoad = error ? <ErrorIndicator/> : null;
      const spinner = loading ? <Spinner/> : null;
      const content = !(loading || error) ? <PlanetView planet={planet}/> : null;

        return(
          <div className="random-planet jumbotron rounded">
          {errorLoad}
          {spinner}
          {content}
          </div>
        );
    }
} 

AppRandomPlanet.defaultProps = { 
  updateInterval: 15000
}

AppRandomPlanet.propsTypes = { 
  updateInterval: PropTypes.number
}

const PlanetView = ({planet}) => {
  const {id, name, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
        <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`} alt='Я Picturе'/>
            <div>
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                <li className="list-group-item">
                  <span className="term">Population</span>
                  <span>{population}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Rotation Period</span>
                  <span>{rotationPeriod}</span>
                </li>
                <li className="list-group-item">
                  <span className="term">Diameter</span>
                  <span>{diameter}</span>
                </li>
              </ul>
            </div>
    </React.Fragment>
  )
}