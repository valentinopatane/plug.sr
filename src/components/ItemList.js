import React from 'react';
import Item from './Item';
import {Link} from "react-router-dom";

const ItemList = ({ items })=>{
    return(
        <div className='itemList'>
            {items.map((item)=>{
                return (
                    <div className="itemList_div" key={item.id}>
                        <Link className="itemList_link" to={`../shop/item/${item.id}`}>
                            <Item item={item}></Item>
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}
export default ItemList;