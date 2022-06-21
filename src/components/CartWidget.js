import {useContext} from "react";
//CSS
import "./style.css"
//Context
import { ItemsContext } from './context/ItemsContext'

import Icon from '../background/CART.png'


function CartWidget(){
    const { cartNumber, hasProduct} = useContext(ItemsContext);
    return(
        <>  {hasProduct 
            ?   (<div className="carting">
                    <img src={Icon} alt="Cart"></img>
                </div>)
            :   (<div className="carting">
                    <span>( {cartNumber} )</span> <img src={Icon} alt="Cart"></img>
                </div>)
            }
        </>
    )
}
export default CartWidget;

