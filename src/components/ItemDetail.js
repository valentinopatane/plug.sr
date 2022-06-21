import React, { useState, useContext } from "react";
import ItemCount from "./ItemCount";
import {Link} from 'react-router-dom'
import './style.css';
import { ItemsContext } from './context/ItemsContext'


const ItemDetail = ({ item }) => {
  const [IsAdded, setIsAdded] = useState(true);

  const { addItem } = useContext(ItemsContext);

  function onAdd(quantityToAdd){
    if(quantityToAdd > 0){
      setIsAdded(false)
      addItem(item, quantityToAdd);
    }
  }
    return (
      <>
        <div className="item_detail">
          <div className="item_detail_img">
            <img src={item.image} alt="product"></img>
          </div>
          <div className="item_detail_text">
            <h1>{item.name}</h1>
            <p className="item_detail_text_info">{item.description}</p>
            <p style={{fontSize:'18px',fontWeight:'400',letterSpacing:'1px'}}>Price: ${item.price} - Stock Available: {item.stock}</p>
            
        {IsAdded ? (
                  <div className="item_detail_text_button">
                  <ItemCount stock={item.stock} initial={0} onAdd={onAdd}/>
                  </div>
        ) : ( <div className="item_detail_text_button">
                  <Link className="goTo_link" to={'/cart'}>Go to Cart</Link>
                  <Link className="goTo_link" to={'/shop'}>Go to Shop</Link>
              </div>)
        } 
          </div>
        </div>
      </>

      );
}
export default ItemDetail;