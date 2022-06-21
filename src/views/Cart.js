import { useContext} from "react";
import { ItemsContext } from '../components/context/ItemsContext'
import '../components/style.css'
import { Link } from "react-router-dom";
    

const Cart =()=>{

    const { products, deleteItem,clearCart,total,hasProduct} = useContext(ItemsContext);
    
    return(
        <>  
            {hasProduct ? (
                <div className="goToShop_cart">
                    <h5>Cart is Empty</h5>
                    <Link className="goTo_link" to={'/shop'}>Go to Shop</Link>
                </div>
                ) : (
                <div className="body_cart">
                    <h2 style={{color:'#fff', marginTop:'120px'}}>Total: {total}$</h2>
                    <Link className="goTo_link" to={'/checkout'}  id ="completeOrder"style={{marginBottom:'20px'}}>Complete Order</Link>
                    <div className="cartList">
                        {products.map((product)=>{
                             return (
                                <div key={product.id}  className="cartList_prod">
                                    <div className="cartList_prod_img_div">
                                        <img src={product.image} alt='product'></img>
                                    </div>
                                    <h3 style={{color:'#fff', marginBottom:'0px'}}>{product.name}</h3>
                                    <p style={{color:'#fff',marginTop:'0px'}}>{product.quantity} x {product.price}$</p>
                                    <button className="goTo_link" id="removeProduct"style={{fontSize:'14px'}}onClick={()=>deleteItem(product, product.id)}>Remove Product</button>
                                </div>)
                            })}
                    </div>
                    <div style={{marginTop:'20px'}}>
                        <Link className="goTo_link" to={'/plug.sr/shop'}>Go to Shop</Link>
                        <button className="goTo_link" onClick={()=>clearCart()} style={{marginLeft:'10px'}}>Clean Cart</button>
                    </div>
                </div>
                )
            }
        </>
    )
}
export default Cart