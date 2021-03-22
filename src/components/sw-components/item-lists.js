import SwapiService from '../../service/service';
import AppItemList from '../app-item-list';
import hocFunc from '../hoc-help/hoc-help'

const swapiService = new SwapiService();

const {getAllPeople, getAllPlanet, getAllStarship} = swapiService;

const PersonList = hocFunc(AppItemList, getAllPeople)

const PlanetList = hocFunc(AppItemList, getAllPlanet)

const StarshipList = hocFunc(AppItemList, getAllStarship)

export {
    PersonList,
    PlanetList,
    StarshipList
}