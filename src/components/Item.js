import * as React from 'react';
import './style.css';


const Item = ({ item }) => {

  return (
    <div className='card'>
            <div className='item_img_div'>
              <img src={item.image} alt="plug.sr" className="item_img"></img>
            </div>
            <div className='cardTextContainer' >
              <h5 className="cardText">
                {item.name}
              </h5>
              <p className="cardText">
                ${item.price}
              </p>
            </div>
    </div>
            
      
        
    );
}
export default Item

