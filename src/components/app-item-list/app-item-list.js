import React from 'react';
import './app-item-list.css';


const AppItemList = (props) => { 

    const {spinner, data, selectedId, renderFunc} = props
    const itemsList = data.map((item) => {
                      const {id} = item;
                      const itemLabel = renderFunc(item);
                      return (
                        <li className="list-group-item" 
                            key={id} 
                            onClick={() => selectedId(id)}>
                            {itemLabel}
                        </li>
                      )
    })
    
      return(
        <ul className="item-list list-group">
          {spinner}
          {itemsList} 
        </ul>
      );
};

export default AppItemList