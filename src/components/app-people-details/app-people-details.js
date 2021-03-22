import React from 'react';
import SwapiService from '../../service/service';
import Spinner from '../app-spinner/spinner';
import './app-people-details.css';


export default class AppPeopleDetails extends React.Component{
  swapiService = new SwapiService();

  state = {
    item: {},
    loading: true,
    image: null
  }

  componentDidMount() {
    this.onUpdatePeople()
  }

  componentDidUpdate(prevProps) {
    if(this.props.sendId !== prevProps.sendId){
      this.onUpdatePeople()
    }
  }

  onUpdatePeople = () => {
    const {sendId, getOneItem, getImageUrl}= this.props
    getOneItem(sendId)
                      .then((item) => {
                        this.setState({item, 
                                       loading:false,
                                       image: getImageUrl(item)})
                      })
  }

    render(){
      const {item, loading, image} = this.state
      const blockLi = React.Children.map(this.props.children, (child) => {
        return React.cloneElement(child, {item});
      })
   
      const peopleView = !loading ? <InformationView item={item} image={image} li={blockLi}/> : null;
      const spinner = loading ? <Spinner/> : null;
        return(
            <div className="person-details card">
              {spinner}
              {peopleView}
          </div>
        );
    }
} 


const InformationView = ({item, image, li}) => {
  const {name} = item
  return (
    <React.Fragment>
            <img className="person-image" src={image} alt='Я Picturе'/>
            <div className="card-body">
              <h4>{name}</h4>
              <ul className="list-group list-group-flush">
                {li}
              </ul>
            </div>

    </React.Fragment>
  )
}