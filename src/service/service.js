export default class SwapiService {
    _apiAdress = `https://swapi.dev/api`;
    getResourse = async (url) => {
        const response = await fetch(`${this._apiAdress}${url}`);

        if (!response.ok) {
            throw new Error(`ERROR ${response.status}`);
        }
        const body = await response.json();
        return body;
    }

    getPersonImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/characters/${id}.jpg`
    }

    getPlanetImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/planets/${id}.jpg`
    }
    getStarshipImage = ({id}) => {
        return `https://starwars-visualguide.com/assets/img/starships/${id}.jpg`
    }

    getAllPeople = async () => {
        const result = await this.getResourse(`/people/`);
        return result.results.map(this._transformPeople);
    }

    getOnePerson = async (id) => {
        const person = await this.getResourse(`/people/${id}`);
        return this._transformPeople(person);
    }

    getAllPlanet = async () => {
        const result = await this.getResourse(`/planets/`);
        return result.results.map(this._transformPlanet);
    }

    getOnePlanet = async (id) => {
        const planet = await this.getResourse(`/planets/${id}`);
        return this._transformPlanet(planet);
    }

    getAllStarship = async () => {
        const result = await this.getResourse(`/starships/`);
        return result.results.map(this._transformStarship);
    }

    getOneStarShip = async (id) => {
        const starShip = await this.getResourse(`/starships/${id}`);
        return this._transformStarship(starShip);
    }

    _getIdFromUrl = (url) => {
        const regEx = /\/([0-9]*)\/$/;
        return url.match(regEx)[1];
    }

    _transformPlanet = (planet) => {
        return {
            id:this._getIdFromUrl(planet.url),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter
        }
    }

    _transformStarship = (starship) => {
        return {
            id:this._getIdFromUrl(starship.url),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.costInCredits,
            ledgth: starship.ledgth,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargoCapacity
        }
    }

    _transformPeople = (person) => {
        return {
            id:this._getIdFromUrl(person.url),
            name: person.name,
            height: person.height,
            hairColor: person.hair_color,
            mass: person.mass,
            birthYear: person.birth_year
        }
    }
}