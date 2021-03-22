import React from 'react';
import Spinner from '../app-spinner/spinner';

const hocFunc = (View, getData) => {
    return class extends React.Component {
      state = {
        data: [],
        loading: true
      }
    
      componentDidMount(){
        this.onUploadItems();
      }
    
      onStateUpdate = (data) => {
        this.setState({data, loading: false});
      }
    
    
      onUploadItems = () => {
        getData().then(this.onStateUpdate)
      }
  
      render() {
        const {data, loading} = this.state
        const spinner = loading ? <Spinner/> : null;
        return <View {...this.props} spinner={spinner} data={data}/>
      }
    }
  }
  
  export default hocFunc