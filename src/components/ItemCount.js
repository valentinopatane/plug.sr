import React, {useState} from 'react';
import './style.css';


function ItemCount({stock, initial, onAdd}){

    const [counter, setCounter] = useState(initial);
    
    function Increment(){
        if(counter !== stock){
            setCounter(counter +1);
        }
    } 
    function Decrement(){
        if(counter !== initial){
            setCounter(counter-1)
        }
    }
    return(
        <>
            <div className='count'>
                <p>Quantity: {counter}</p>
                <div className='btn-section'>
                    <button onClick={Increment}>↑</button>
                    <button onClick= {Decrement}>↓</button>
                    <button onClick={()=> onAdd(counter)}>Add to cart</button>
                </div>
            </div>
        </>
    );
};

export default ItemCount;




