import React from 'react';
import SwapiService from '../../service/service'
import Spinner from '../app-spinner/spinner'
import './app-random-planet.css'


export default class AppRandomPlanet extends React.Component{
  swapiService = new SwapiService();

  state = {
    planet: {},
    loading: true
  }

  constructor() {
    super();
    this.updateFromServer();
  }

  onLoadedPlanet = (planet) => {
    this.setState({ planet, loading: false })
  }

  updateFromServer = () => {
    const id = Math.floor(Math.random() * 25) + 2;
    this.swapiService.getOnePlanet(id).then(this.onLoadedPlanet)
  }
  
    render(){
      const {planet, loading}=this.state
      const spinner = loading ? <Spinner/> : null;
      const content = !loading ? <PlanetView planet={planet}/> : null;

        return(
          <div className="random-planet jumbotron rounded">
          {spinner}
          {content}
          </div>
        );
    }
} 

const PlanetView = ({planet}) => {
  const {id, planetName, population, rotationPeriod, diameter} = planet;
  return (
    <React.Fragment>
        <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}/>
            <div>
              <h4>{planetName}</h4>
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