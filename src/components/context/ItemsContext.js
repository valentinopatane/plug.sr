import React,{ createContext, useState} from 'react';

export const ItemsContext = createContext();

export const ItemsProvider = ({children})=>{
    const [products,setProducts] = useState([]);

    const [total, setTotal] = useState(0)

    const [hasProduct, setHasProduct] = useState(true)

    const [cartNumber, setCartNumber] = useState(0)

//---------------------------------------------------------FUNCIONES AUXILIARES---------------------------------------------------------
    function isInCart(itemID){
        return products.some((product)=> product.id === itemID)
    }
    function totalPrice(products){
        let array = products.map((product)=> product.price * product.quantity);

        const initialValue = 0;
        let totalValue = array.reduce((acc,currentValue)=> acc + currentValue, initialValue)
        setTotal(totalValue)
    }
    function restToTotal(item, productID){
        if(item.id === productID){
            let resting = total - item.price
            setTotal(resting)

            if(resting !== 0){
                setHasProduct(false);
            }else{
                setHasProduct(true);
            }
        }
    }
    //---------------------------------------------ADD, DELETE & CLEAR to Cart, CARTNUMBER-------------------------------------------------
    const addItem = (item, quantityToAdd) =>{
            if(isInCart(item.id)){
                const foundProduct = products.find((product)=> product.id === item.id);
                foundProduct.quantity += quantityToAdd;
                totalPrice(products);
            }
            else{
                products.push({...item, quantity: quantityToAdd });
                totalPrice(products);
            }
            setHasProduct(false)
            setProducts([...products]);
            setTimeout(howManyCart(),500)
    }

    const deleteItem = (item, productID)=>{

        restToTotal(item, productID);
        setCartNumber(cartNumber - 1);

        if(item.id === productID && item.quantity !== 1){
            const foundProduct = products.find((product)=> product.id === item.id);
            const newArr = products.map(item => {
                if (item.id === foundProduct.id) {
                  return {...item, quantity: foundProduct.quantity -= 1};
                }
                return item;
            });
            setProducts([...newArr])
        }
        else{const updatedProducts = products.filter((product) =>
             product.id !== productID)
             setProducts([...updatedProducts])}  
    }
    const clearCart =()=>{
        const clearArr = [];
        setProducts(clearArr);
        setTotal(0);
        setHasProduct(true);
        setCartNumber(0);
    }
    const howManyCart =()=>{
      
        let eachQuantity = products.map((product)=> product.quantity);
        const initialValue = 0;
        let totalQuantity = eachQuantity.reduce((acc,currentValue)=> acc + currentValue, initialValue)
        setCartNumber(totalQuantity)
    }
    return(
        <ItemsContext.Provider value={{ products, addItem, deleteItem,clearCart, total, totalPrice, hasProduct, cartNumber}}>
            {children}
        </ItemsContext.Provider>
    );
}
